#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Convert JavaScript-like small-body lists (satellites / asteroids / comets)
to consolidated YAML with the schema we've defined.

Usage:
  python convert_small_bodies.py \
      --kind satellites \
      --in satellites.js \
      --out satellites.yaml

  python convert_small_bodies.py \
      --kind asteroids \
      --in asteroids.js \
      --out asteroids.yaml

  python convert_small_bodies.py \
      --kind comets \
      --in _comets.js \
      --out comets.yaml
"""

import argparse
import re
from pathlib import Path
from typing import List, Dict, Tuple, Optional

# -----------------------------
# Parsing helpers (JS-ish text)
# -----------------------------

def _between_balanced(text: str, open_char: str, close_char: str, start_idx: int) -> Tuple[Optional[str], Optional[int]]:
    """
    Return substring of a balanced {...} or [...] block starting at/opening at start_idx,
    and position just after the block. Returns (None, None) if not found.
    """
    # advance to first opening
    i = start_idx
    while i < len(text) and text[i] != open_char:
        i += 1
    if i >= len(text):
        return None, None
    depth, j = 0, i
    while j < len(text):
        c = text[j]
        if c == open_char:
            depth += 1
        elif c == close_char:
            depth -= 1
            if depth == 0:
                return text[i:j+1], j+1
        j += 1
    return None, None


def _find_outer_array(text: str) -> str:
    """Return the content inside the outermost [...] after the first '['."""
    start = text.find('[')
    end = text.rfind(']')
    if start == -1 or end == -1 or end <= start:
        return ""
    return text[start+1:end]


def _split_top_level_objects(array_text: str) -> List[str]:
    """Split JS-like array content into top-level object blocks by tracking braces."""
    objs, i, n = [], 0, len(array_text)
    while i < n:
        while i < n and array_text[i] in ' \t\r\n,':
            i += 1
        if i >= n:
            break
        if array_text[i] != '{':
            i += 1
            continue
        block, j_after = _between_balanced(array_text, '{', '}', i)
        if not block:
            # malformed remainder; bail
            break
        objs.append(block)
        i = j_after
    return objs


# -----------------------------
# Field extraction helpers
# -----------------------------

_re_quoted = re.compile(r"'([^']*)'")

def _find_first_quoted_name(block: str) -> Optional[str]:
    m = re.search(r"\bname\s*:\s*'([^']+)'", block)
    return m.group(1) if m else None

def _find_type(block: str, default_type: str) -> str:
    m = re.search(r"\btype\s*:\s*'([^']+)'", block)
    return m.group(1) if m else default_type

def _find_datasets_array(block: str) -> Optional[str]:
    m = re.search(r"\bdatasets\s*:\s*\[", block)
    if not m:
        return None
    # capture the [...] starting at m.end()-1
    arr_block, _ = _between_balanced(block, '[', ']', m.end()-1)
    if not arr_block:
        return None
    # strip the brackets
    return arr_block[1:-1]

def _split_dataset_objects(ds_array_text: str) -> List[str]:
    return _split_top_level_objects(ds_array_text)

def _lower_handlebars(identifier: str) -> str:
    """
    Convert an identifier like 'Saturn.name' -> '{{ saturn.name }}'
    Assumes simple dotted identifier; does not evaluate expressions.
    """
    ident = identifier.strip()
    # remove trailing commas, braces noise if any accidental
    ident = ident.rstrip(",")
    return f"{{{{ {ident.lower()} }}}}"

def _yaml_quote(s: str) -> str:
    """Always double-quote a normal string; escape inner quotes."""
    return '"' + s.replace('"', '\\"') + '"'

def _is_handlebars(s: str) -> bool:
    return isinstance(s, str) and s.strip().startswith("{{") and s.strip().endswith("}}")


# -----------------------------
# Rule-specific transformers
# -----------------------------

def _archive_path_from_primary(raw_expr: str) -> Optional[str]:
    """
    Compute archive_data_path from the primary.downloadLink expression.

    Rules:
    - Var.basepath + 'file'  ->  "{{ var.basepath }}"
    - 'https://.../file.ext' ->  'https://.../'
    - Anything else -> None
    """
    raw = raw_expr.strip()

    # Case 1: Identifier.basepath + 'file'
    m = re.match(r"([A-Za-z_][A-Za-z0-9_]*)\.basepath\s*\+\s*'([^']+)'", raw)
    if m:
        return _lower_handlebars(f"{m.group(1)}.basepath")

    # Case 2: quoted literal path
    m = re.match(r"'([^']+)'", raw)
    if m:
        full = m.group(1)
        if "/" in full:
            return full.rsplit("/", 1)[0] + "/"
        return full if full.endswith("/") else (full + "/")

    # Unknown form
    return None


def _vr_path_from_ios_block(ios_block: str) -> Optional[str]:
    """
    Extract a usable iOS (USDZ) path from an ios: { path: ... } block.
    Supports:
      - 'literal.usdz'
      - Var.basepath + 'file.usdz'
      - 'Var.basepath' + 'file.usdz' (misquoted identifier)
    Returns a single renderable string; if composed with basepath, we output
    {{ var.basepath }}filename.usdz (no extra quoting around the handlebars).
    """
    m = re.search(r"path\s*:\s*([^,\n}]+)", ios_block)
    if not m:
        return None
    expr = m.group(1).strip()

    # 'literal'
    m1 = re.match(r"'([^']+)'$", expr)
    if m1:
        return m1.group(1)

    # Identifier.basepath + 'file'
    m2 = re.match(r"([A-Za-z_][A-Za-z0-9_]*)\.basepath\s*\+\s*'([^']+)'$", expr)
    if m2:
        return f"{_lower_handlebars(m2.group(1) + '.basepath')}{m2.group(2)}"

    # 'Identifier.basepath' + 'file' (misquoted identifier)
    m3 = re.match(r"'([A-Za-z_][A-Za-z0-9_]*)\.basepath'\s*\+\s*'([^']+)'$", expr)
    if m3:
        return f"{_lower_handlebars(m3.group(1) + '.basepath')}{m3.group(2)}"

    # Fallback: last quoted chunk if present
    m4 = re.findall(r"'([^']+)'", expr)
    if m4:
        if len(m4) == 2 and m4[0].endswith(".basepath"):
            ident = m4[0].split(".")[0].lower()
            return f"{_lower_handlebars(ident + '.basepath')}{m4[1]}"
        return m4[-1]
    return None


def _parse_dataset(ds_block: str) -> Tuple[Optional[Dict], Optional[str]]:
    """
    Parse a dataset object string into our normalized dict and optional vr_ios (first only).
    Returns: (dataset_dict_or_None, vr_ios_path_or_None)
    """
    # name (string or identifier)
    m = re.search(r"\bname\s*:\s*([^,\n]+)", ds_block)
    if not m:
        return None, None
    raw_name = m.group(1).strip()
    if raw_name.startswith("'") and raw_name.endswith("'"):
        ds_name = raw_name.strip("'")
    else:
        ds_name = _lower_handlebars(raw_name)

    # link (string or identifier)
    m = re.search(r"\blink\s*:\s*([^,\n]+)", ds_block)
    ds_link = None
    if m:
        raw_link = m.group(1).strip()
        if raw_link.startswith("'") and raw_link.endswith("'"):
            ds_link = raw_link.strip("'")
        else:
            ds_link = _lower_handlebars(raw_link)

    # primary.downloadLink
    m = re.search(r"primary\s*:\s*(null|\{[^}]*?downloadLink\s*:\s*([^,\n]+).*?\})", ds_block, re.S)
    archive_data_path = None
    if m and m.group(1) != "null":
        archive_data_path = _archive_path_from_primary(m.group(2))

    # derived[]
    related_files: List[Dict[str, str]] = []
    md = re.search(r"derived\s*:\s*(null|\[)", ds_block)
    if md and md.group(1) == "[":
        # capture derived array
        start = md.end() - 1
        arr_block, _ = _between_balanced(ds_block, "[", "]", start)
        if arr_block:
            arr_inner = arr_block[1:-1]
            for obj in _split_top_level_objects(arr_inner):
                mdl = re.search(r"downloadLink\s*:\s*'([^']+)'", obj)
                mff = re.search(r"fileFormat\s*:\s*'([^']+)'", obj)
                if mdl and mff:
                    related_files.append({"name": mff.group(1), "url": mdl.group(1)})
        # If primary is null or unparseable, infer from first derived
        if archive_data_path is None and related_files:
            url = related_files[0]["url"]
            if "/" in url:
                archive_data_path = url.rsplit("/", 1)[0] + "/"

    # previews (default + ios)
    archive_product_preview = None
    vr_ios = None
    mp = re.search(r"previews\s*:\s*\{", ds_block)
    if mp:
        pblock, _ = _between_balanced(ds_block, "{", "}", mp.end() - 1)
        if pblock:
            # default preview
            mdef = re.search(r"default\s*:\s*(null|\{)", pblock)
            if mdef and mdef.group(1) == "{":
                dstart = pblock.find("{", mdef.start())
                dblock, _ = _between_balanced(pblock, "{", "}", dstart)
                if dblock:
                    mpth = re.search(r"path\s*:\s*'([^']+)'", dblock)
                    if mpth:
                        archive_product_preview = mpth.group(1)

            # ios preview (USDZ) -> body level
            mios = re.search(r"ios\s*:\s*(null|\{)", pblock)
            if mios and mios.group(1) == "{":
                iostart = pblock.find("{", mios.start())
                iblock, _ = _between_balanced(pblock, "{", "}", iostart)
                if iblock:
                    vr_ios = _vr_path_from_ios_block(iblock)

    # Ensure archive_data_path is present (REQUIRED)
    if archive_data_path is None:
        if isinstance(ds_link, str) and _is_handlebars(ds_link):
            # {{ x.link }} -> {{ x.basepath }}
            archive_data_path = ds_link.replace(".link", ".basepath")
        elif isinstance(ds_link, str) and ds_link.startswith("http"):
            # literal link URL -> keep as-is (best-effort)
            archive_data_path = ds_link
        else:
            # last-resort; shouldn't occur with given inputs
            archive_data_path = "/"

    dataset: Dict[str, object] = {"name": ds_name}
    if ds_link:
        dataset["link"] = ds_link
    # archive_data_path: emit handlebars raw or quoted string
    dataset["archive_data_path"] = archive_data_path
    if archive_product_preview:
        dataset["archive_product_preview"] = archive_product_preview
    if related_files:
        dataset["related_files"] = related_files

    return dataset, vr_ios


# -----------------------------
# Main conversion pipeline
# -----------------------------

def convert_js_like_file(js_path: Path, kind: str) -> str:
    """
    Convert a JS-like array file to YAML string with top-level key
    'satellites:' | 'asteroids:' | 'comets:'.
    """
    text = js_path.read_text(encoding="utf-8")
    arr = _find_outer_array(text)
    bodies_raw = _split_top_level_objects(arr)

    # Merge by body name
    merged: Dict[str, Dict] = {}
    default_type = {"satellites": "satellite", "asteroids": "asteroid", "comets": "comet"}[kind]

    for body_block in bodies_raw:
        name = _find_first_quoted_name(body_block)
        if not name:
            continue
        btype = _find_type(body_block, default_type)
        ds_arr = _find_datasets_array(body_block)

        vr_first = None
        datasets: List[Dict] = []
        if ds_arr:
            for ds_block in _split_dataset_objects(ds_arr):
                ds_parsed, vr = _parse_dataset(ds_block)
                if not ds_parsed:
                    continue
                datasets.append(ds_parsed)
                if vr and vr_first is None:
                    vr_first = vr  # first USDZ per body

        # Accumulate / merge
        if name in merged:
            merged[name]["datasets"].extend(datasets)
            if merged[name].get("virtual_reality_ios") is None and vr_first is not None:
                merged[name]["virtual_reality_ios"] = vr_first
        else:
            merged[name] = {
                "name": name,
                "type": btype,
                "virtual_reality_ios": vr_first,
                "datasets": datasets,
            }

    # Drop entries without datasets
    for k in list(merged.keys()):
        if not merged[k]["datasets"]:
            del merged[k]

    # Alphabetize by body name
    ordered = [merged[k] for k in sorted(merged.keys(), key=lambda s: s.lower())]

    # -----------------------------
    # YAML emitter (no external deps)
    # -----------------------------
    def emit_value(val: str) -> str:
        return val if _is_handlebars(val) else _yaml_quote(val)

    lines: List[str] = [f"{kind}:"]
    for body in ordered:
        lines.append(f"  - name: {_yaml_quote(body['name'])}")
        lines.append(f"    type: {body.get('type', default_type)}")
        if body.get("virtual_reality_ios"):
            v = body["virtual_reality_ios"]
            lines.append("    virtual_reality_ios: " + (emit_value(v)))
        lines.append("    datasets:")
        for ds in body["datasets"]:
            # name
            lines.append("      - name: " + (emit_value(ds["name"])))
            # link (optional)
            if "link" in ds:
                lines.append("        link: " + emit_value(ds["link"]))
            # archive_data_path (required)
            lines.append("        archive_data_path: " + emit_value(ds["archive_data_path"]))
            # preview (optional)
            if "archive_product_preview" in ds:
                lines.append("        archive_product_preview: " + emit_value(ds["archive_product_preview"]))
            # related_files (optional)
            if "related_files" in ds and ds["related_files"]:
                lines.append("        related_files:")
                for rf in ds["related_files"]:
                    lines.append("          - name: " + _yaml_quote(rf["name"]))
                    lines.append("            url: " + _yaml_quote(rf["url"]))
    return "\n".join(lines) + "\n"


def main():
    ap = argparse.ArgumentParser(description="Convert JS-like small-body lists to consolidated YAML.")
    ap.add_argument("--kind",
                    choices=["satellites", "asteroids", "comets"],
                    required=True,
                    help="Top-level YAML key and default body type.")
    ap.add_argument("--in", dest="inp", required=True, help="Input JS-like file (e.g., satellites.js).")
    ap.add_argument("--out", dest="outp", required=True, help="Output YAML file path.")
    args = ap.parse_args()

    js_path = Path(args.inp)
    yaml_text = convert_js_like_file(js_path, args.kind)
    Path(args.outp).write_text(yaml_text, encoding="utf-8")
    print(f"Wrote {args.outp} ({len(yaml_text)} bytes)")


if __name__ == "__main__":
    main()