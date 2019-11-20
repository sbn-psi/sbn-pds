###### For every page with a list of superseded datasets:

* Replace the existing HTML referring to “Superseded versions” and replace it with the following:
```html
    <h3 id="pds-superseded-title">Superseded Versions: <a onclick="setShow()" id="pds-superseded-toggle">Show</a></h3>
```

* Add the following ID tag to the opening tag of the HTML element that contains the list of superseded data sets:
```html
    <example-element id="pds-superseded">
```


Most of the pages on the site should already include the following snippet at the bottom of the page:
```html
<script>
    includeHTML = function(cb) {
        var z, i, elmnt, file, xhttp;
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            file = elmnt.getAttribute("include-html");
            if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Included html not found.";}
                    elmnt.removeAttribute("include-html");
                    includeHTML(cb);
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
            }
        }
        if (cb) cb();
        };
    includeHTML();
</script>
```

If so, **replace** the above with the following element:
```html
<script src="/pds/sbn-scripts.js" type="text/javascript" charset="utf-8" async defer></script>
```

Otherwise, simply add the above element just before the closing `</body>` tag of the document.

For reference, the following pages have already been updated:

* /pds/resource/apd.html
* /pds/resource/nhsdc.html
* /pds/resource/itokawapol.html