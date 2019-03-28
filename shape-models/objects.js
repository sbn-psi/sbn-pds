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
    $('.sbn-body').remove();
    
    const shapeModelTable = $('#shape-model-table');
    const downloadIcon = () => { return $('<i>', {class: 'fas fa-file-download'}); };
    
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
    
    function newRow(id,name,datasets,preview) {
        const rowspan = () => { return datasets.length; };
        const $row = function(dataset,idx) {
            let row = {
                '$name': (function() {
                    if (idx === 0) return $('<th>', {class:'cell'}).text(name).attr('rowspan',rowspan);
                    else return null;
                })(),
                '$dataset': {
                    '$name': $('<td>', {class:'cell'}).append($('<a>', {href: dataset.link}).text(dataset.name)),
                    '$archivedFile': $('<td>', {class: 'cell download-cell'}).append($('<a>', {href: dataset.file.archivePath}).append(downloadIcon()).append($('<p>').text('archive'))),
                    '$objFile': (function() {
                        if (dataset.file.objPath === null) return $('<td>', {class: 'cell download-cell'}).text('-');
                        else return $('<td>', {class:'cell download-cell'}).append($('<a>', {href: dataset.file.objPath}).append(downloadIcon()).append($('<p>').text('obj')));
                    })()
                },
                '$ferretSearch': (function() {
                    const ferretLink = `https://sbnapps.psi.edu/ferret/SimpleSearch/results.action?targetName=${name.replace(/ /g,'%20')}`;
                    if (idx === 0) return $('<td>', {class: 'cell'}).append($('<a>', {href: ferretLink}).text('Ferret Search')).attr('rowspan',rowspan);
                    else return null;
                })(),
                '$preview': (function() {
                    const pview = dataset.file.preview;
                    if (!pview) return $('<td>', {class: 'cell download-cell'}).text('-');
                    else return $('<td>', {class: 'cell'}).append($('<a>', {href: pview}).append($('<img>', {src: pview, class: 'preview', title: 'Click to Enlarge'})));
                })()
            };
            return row;
        };

        let rows = datasets.map((dataset,idx) => {
            return $row(dataset,idx);
        }).reverse();
        
        rows.map(($row,idx) => {
            // <tr> element to be added to table
                // this will contain all <td> elements for a single dataset row
            let row = $('<tr>', {class: 'row sbn-body'});
            
            // conditionally append($row.$name)
            if ($row.$name !== null) row.append($row.$name);
            
            // then proceed with the rest of the <td>s
            row.append($row.$dataset.$name).append($row.$dataset.$archivedFile).append($row.$dataset.$objFile).append($row.$preview).append($row.$ferretSearch);
            
            $(`#${id}`).after(row);
            return row;
        });
    };

    // PLACE ASTEROIDS
    asteroidNames.sort(sortAlphaNum).map(function(asteroid) {
        const datasets = asteroids[asteroid]['datasets'];
        const preview = asteroids[asteroid]['preview'];
        newRow('asteroids',asteroid,datasets,preview);
    });
    // ASTEROID COUNT
    $('#asteroid-count').text(`(${Object.keys(asteroids).length})`);
    
    // PLACE COMETS
    cometNames.sort(sortAlphaNum).map(function(comet) {
        const datasets = comets[comet]['datasets'];
        const preview = comets[comet]['preview'];
        newRow('comets',comet,datasets,preview);
    });
    // COMET COUNT
    $('#comet-count').text(`(${Object.keys(comets).length})`);
    
    // PLACE SATELLITES
    satelliteNames.sort(sortAlphaNum).map(function(satellite) {
        const datasets = satellites[satellite]['datasets'];
        const preview = satellites[satellite]['preview'];
        newRow('satellites',satellite,datasets,preview);
    });
    // PLACE SATELLITE COUNT
    $('#satellite-count').text(`(${Object.keys(satellites).length})`);
};
