const previews = 'previews/';
const files = 'files/';

const radarDataset = 'https://sbn.psi.edu/pds/resource/rshape.html';
const saturnDataset = 'https://sbn.psi.edu/pds/resource/saturnsatshapes.html';

const Objects = {
    '1998 KY26': {
        file: files + 'RADAR/1998ky26.obj',
        dataset: radarDataset,
        preview: previews + '1998ky26.png'
    },
    '67P': {
        file: files + '67p/67P-CG.obj',
        dataset: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/dataset.html',
        preview: previews + '67p.png'
    },
    'Asteroid 153591': {
        file: files + 'a153591/a153591alpha.obj',
        dataset: 'https://sbn.psi.edu/pds/resource/shape153591.html',
        preview: previews + 'a153591.png'
    },
    'Asteroid 52760': {
        file: files + 'RADAR/52760.obj',
        dataset: radarDataset,
        preview: previews + '52760.png'
    },
    'Asteroid 8567': {
        file: files + 'a8567/a8567.obj',
        dataset: 'https://sbn.psi.edu/pds/resource/shape8567.html',
        preview: previews + 'asteroid_8567.png'
    },
    'Atlas': {
        file: files + 'SATURN_SMALL_MOONS/atlas_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'atlas.png'
    },
    'Bacchus': {
        file: files + 'RADAR/2063bacchus.obj',
        dataset: radarDataset,
        preview: previews + '2063bacchus.png'
    },
    'Bennu': {
        file: files + '101955bennu.obj',
        dataset: 'https://sbn.psi.edu/pds/resource/bennushape.html',
        preview: previews + '101955bennu.png'
    },
    'Calypso': {
        file: files + 'SATURN_SMALL_MOONS/calypso_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'calypso_30k_plt.png'
    },
    'Castalia': {
        file: files + 'RADAR/4769castalia.obj',
        dataset: radarDataset,
        preview: previews + '4769castalia.png'
    },
    'Daphnis': {
        file: files + 'SATURN_SMALL_MOONS/daphnis_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'daphnis_30k_plt.png'
    },
    'Dione': {
        file: files + 'dione/dione.zip',
        dataset: 'https://sbn.psi.edu/pds/resource/dioneshape.html',
        preview: previews + 'dione.png'
    },
    'Epimetheus': {
        file: files + 'SATURN_SMALL_MOONS/epimetheus_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'epimetheus_30k_plt.png'
    },
    'Eros': {
        file: files + 'eros/eros.zip',
        dataset: 'https://sbn.psi.edu/pds/resource/erosshape.html',
        preview: previews + 'eros.png'
    },
    'Geographos': {
        file: files + 'RADAR/1620geographos.obj',
        dataset: radarDataset,
        preview: previews + '1620geographos.png'
    },
    'Golevka': {
        file: files + 'RADAR/6489golevka.obj',
        dataset: radarDataset,
        preview: previews + '6489golevka.png'
    },
    'Hartley 2': {
        file: files + 'hartley2/hartley2_2012_cart.obj',
        dataset: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/',
        preview: previews + 'hartley2_2012_cart.png',
    },
    'Helene': {
        file: files + 'SATURN_SMALL_MOONS/helene_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'helene_30k_plt.png'
    },
    'Hyperion': {
        file: files + 'SATURN_SMALL_MOONS/hyperion_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'hyperion_30k_plt.png'
    },
    'Itokawa': {
        file: files + 'itokawa/itokawa.zip',
        dataset: 'https://sbn.psi.edu/pds/resource/itokawashape.html',
        preview: previews + 'itokawa.png'
    },
    'Itokawa (Radar)': {
        file: files + 'RADAR/25143itokawa.obj',
        dataset: radarDataset,
        preview: previews + 'itokawa_radar.png'
    },
    'Janus': {
        file: files + 'SATURN_SMALL_MOONS/janus_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'janus_30k_plt.png'
    },
    'Kleopatra': {
        file: files + 'RADAR/216kleopatra.obj',
        dataset: radarDataset,
        preview: previews + '216kleopatra.png'
    },
    'Lutetia': {
        file: files + 'lutetia/lutetia.zip',
        dataset: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/dataset.html',
        preview: previews + 'lutetia.png'
    },
    'Mimas': {
        file: files + 'mimas/mimas.zip',
        dataset: 'https://sbn.psi.edu/pds/resource/mimasshape.html',
        preview: previews + 'mimas.png'
    },
    'Pan': {
        file: files + 'SATURN_SMALL_MOONS/pan_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'pan_30k_plt.png'
    },
    'Pandora': {
        file: files + 'SATURN_SMALL_MOONS/pandora_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'pandora_30k_plt.png'
    },
    'Phobos': {
        file: files + 'phobos/phobos.zip',
        dataset: 'https://sbn.psi.edu/pds/resource/phobosshape.html',
        preview: previews + 'phobos.png'
    },
    'Phoebe': {
        file: files + 'phoebe/phoebe.zip',
        dataset: 'https://sbn.psi.edu/pds/resource/phoebeshape.html',
        preview: previews + 'phoebe.png'
    },
    'Prometheus': {
        file: files + 'SATURN_SMALL_MOONS/prometheus_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'prometheus_30k_plt.png'
    },
    'Steins': {
        file: files + 'steins/steins.obj',
        dataset: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/dataset.html',
        preview: previews + 'steins.png'
    },
    'Telesto': {
        file: files + 'SATURN_SMALL_MOONS/telesto_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'telesto_30k_plt.png'
    },
    'Tempel 1': {
        file: files + 'tempel1/tempel1_2012_cart.obj',
        dataset: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/dataset.html',
        preview: previews + 'tempel1_2012_cart.png'
    },
    'Tethys': {
        file: files + 'tethys/tethys.zip',
        dataset: 'https://sbn.psi.edu/pds/resource/tethysshape.html',
        preview: previews + 'tethys.png'
    },
    'Wild 2': {
        file: files + 'wild2/wild2_cart_full.obj',
        dataset: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/dataset.html',
        preview: previews + 'wild2.png'
    }
}

$(document).ready(function() {
    const errorMessage = $('#error-message');
    const objectNames = Object.keys(Objects);
    const table =
    `<div class="table" id="shape-model-table">
        <div class="row header">
            <div class="cell">Object Name</div>
            <div class="cell">Download Shape Models</div>
            <div class="cell">Link to Dataset</div>
            <div class="cell">Preview</div>
        </div>
        
    </div>`;
    
    errorMessage.replaceWith(table);
    
    objectNames.map(name => {
        const table = $("#shape-model-table");
        
        const newCell = function(element) {
            return `<div class="cell">${element}</div>`;
        };
        
        const nameElement = newCell(`<p>${name}</p>`);
        
        const file = Objects[name]['file'];
        const fileElement = newCell(`<a href="${file}">Download</a>`);
        
        const dataset = Objects[name]['dataset'];
        const datasetElement = newCell(`<a href="${dataset}" target="_blank">Link to Dataset</a>`);
        
        const preview = Objects[name]['preview'];
        const previewElement = newCell(`<img src="${preview}" class="preview">`);
        
        const row = `<div class="row">${nameElement}${fileElement}${datasetElement}${previewElement}</div>`;
        
        table.append(row);
    });
});