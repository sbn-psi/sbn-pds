let asteroids = Asteroids();
let comets = Comets();
let satellites = Satellites();

$(document).ready(function() {
    makeTable();
    // search tool
    $('#query').on('keyup', function(event) {
        event.stopPropagation();

        const str = this.value.toUpperCase();
        asteroids = Asteroids();
        comets = Comets();
        satellites = Satellites();

        if (!str) {
            makeTable();
            return;
        };
        
        // FILTER FUNCTION
        function filterObjects(str,objs) {
            let keys = Object.keys(objs);
            let filteredNewBodies = keys.filter(body => {
                body = body.toUpperCase();
                const regex = new RegExp(str,'g');
                return regex.test(body);
            });
            
            keys.map(key => {
                if (filteredNewBodies.indexOf(key) === -1) {
                    delete objs[key];
                };
            });
        };
        
        // FILTER ASTEROIDS
        filterObjects(str,asteroids)
        
        // FILTER COMETS
        filterObjects(str,comets);
        
        // FILTER SATELLITES
        filterObjects(str,satellites);

        makeTable();
    });
});

function makeTable() {
    const shapeModelTable = $('#shape-model-table');
    const table =
    `<div class="table" id="shape-model-table">
        <div class="row header">
            <div class="cell">Object Name</div>
            <div class="cell">Full Datasets with Documentation</div>
            <div class="cell">Download Original or .obj</div>
            <div class="cell">Data Ferret Search</div>
            <div class="cell">Preview</div>
        </div>
        <div class="row category" id="asteroids">
            <div class="cell"><h3>Asteroids <span id="asteroid-count"></span></h3></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
        <div class="row category" id="comets">
            <div class="cell"><h3>Comets <span id="comet-count"></span></h3></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
        <div class="row category" id="satellites">
            <div class="cell"><h3>Planetary Satellites <span id="satellite-count"></span></h3></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
    </div>`;
    
    shapeModelTable.replaceWith(table);
    
    const asteroidNames = Object.keys(asteroids);
    const cometNames = Object.keys(comets);
    const satelliteNames = Object.keys(satellites);
    
    const reAlpha = /[^a-zA-Z]/g;
    const reNum = /[^0-9]/g;

    function sortAlphaNum(b, a) {
        const aA = a.replace(reAlpha, "");
        const bA = b.replace(reAlpha, "");
        if (aA === bA) {
            const aN = parseInt(a.replace(reNum, ""), 10);
            const bN = parseInt(b.replace(reNum, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
    }
    
    function newRow(id,name,datasets,files,preview) {
        const $header = $(`#${id}`);

        const $row = $('<div>', {class: 'row'});

        const newCell = function(element) {
            const $cell = $('<div>', {class: 'cell'});
            $cell.append(element);
            return $cell;
        };

        // construct name cell
        const $name = newCell(`<p><b>${name}</b></p>`);
        $row.append($name);

        // construct link to dataset cell
        const $datasetDiv = $('<div>',{class: 'cell'});
        const $datasetList = $('<ul>');

        $datasetDiv.append($datasetList);

        // const datasets = bodies[name]['datasets'];
        datasets.map(dataset => {
            $datasetList.append(`<li><a href="${dataset.link}">${dataset.name}</a></li>`);
        });
        $row.append($datasetDiv);

        // construct files cell
        const $filesCell = $('<div>', {class: 'cell'});
        const $list = $('<ul>');
        // const files = bodies[name]['files'];
        const titles = Object.keys(files);
        titles.map(title => {
            $list.append(`<li><a href="${files[title]}" download>${title}</a></li>`)
        });

        $filesCell.append($list);
        $row.append($filesCell);

        // construct data ferret search link cell
        function querify(qs) {
            return qs.replace(/ /g,'%20');
        };
        const ferretLink = `https://sbnapps.psi.edu/ferret/SimpleSearch/results.action?targetName=${querify(name)}`;
        $row.append(newCell(`<a href="${ferretLink}">Ferret Search</a>`));

        // construct preview cell
        // const preview = bodies[name]['preview'];
        if (!preview) $row.append(newCell(''));
        else $row.append(newCell(`<a href="${preview}"><img src="${preview}" class="preview" title="Click to Enlarge"></a>`));

        $header.after($row);
    };

    // PLACE ASTEROIDS
    asteroidNames.sort(sortAlphaNum).map(function(asteroid) {
        const datasets = asteroids[asteroid]['datasets'];
        const files = asteroids[asteroid]['files'];
        const preview = asteroids[asteroid]['preview'];
        newRow('asteroids',asteroid,datasets,files,preview);
    });
    // ASTEROID COUNT
    $('#asteroid-count').text(`(${Object.keys(asteroids).length})`);
    
    // PLACE COMETS
    cometNames.sort(sortAlphaNum).map(function(comet) {
        const datasets = comets[comet]['datasets'];
        const files = comets[comet]['files'];
        const preview = comets[comet]['preview'];
        newRow('comets',comet,datasets,files,preview);
    });
    // COMET COUNT
    $('#comet-count').text(`(${Object.keys(comets).length})`);
    
    // PLACE SATELLITES
    satelliteNames.sort(sortAlphaNum).map(function(satellite) {
        const datasets = satellites[satellite]['datasets'];
        const files = satellites[satellite]['files'];
        const preview = satellites[satellite]['preview'];
        newRow('satellites',satellite,datasets,files,preview);
    });
    // SATELLITE COUNT
    $('#satellite-count').text(`(${Object.keys(satellites).length})`);
    
    // APPEND COUNTS
    
};
