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
    
    const sort = {
        // sort asteroids based on asteroid number
        asteroids: function(a,b) {
            // extract asteroid number from name
            const regex = new RegExp(/[0-9]+/,'g');
            
            const ax = parseInt(a.match(regex));
            const bx = parseInt(b.match(regex));
            
            return ax < bx ? 1 : -1;
        },
        comets: function(a,b) {
            // TODO: add positive lookahead for capital 'P' and forward slash
                // to ensure other numbers in comet names do not cause bugs
            const regex = new RegExp(/[0-9]+/,'g');
            
            const ax = parseInt(a.match(regex));
            const bx = parseInt(b.match(regex));
            
            return ax < bx ? 1 : -1;
        }
    };
    
    function newRow(id,name,datasets,preview,odd) {
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
            const rowClass = (() => { return (odd) ? 'odd' : 'even'; })();
            // <tr> element to be added to table
                // this will contain all <td> elements for a single dataset row
            let row = $('<tr>', {class: 'row sbn-body' + ` ${rowClass}`});
            
            // conditionally append($row.$name)
            if ($row.$name !== null) row.append($row.$name);
            
            // then proceed with the rest of the <td>s
            row.append($row.$dataset.$name).append($row.$dataset.$archivedFile).append($row.$dataset.$objFile).append($row.$preview).append($row.$ferretSearch);
            
            $(`#${id}`).after(row);
            return row;
        });
    };

    // PLACE ASTEROIDS
    const asteroidNames = Object.keys(asteroids).sort(sort.asteroids);
    asteroidNames
        .map((asteroid,idx) => {
            const datasets = asteroids[asteroid]['datasets'];
            const preview = asteroids[asteroid]['preview'];
            const odd = idx % 2 === 1;
            newRow('asteroids',asteroid,datasets,preview,odd);
        }
    );
    // ASTEROID COUNT
    $('#asteroid-count').text(`(${Object.keys(asteroids).length})`);
    
    // PLACE COMETS
    const cometNames = Object.keys(comets).sort(sort.comets);
    cometNames
        .map((comet,idx) => {
            const datasets = comets[comet]['datasets'];
            const preview = comets[comet]['preview'];
            const odd = idx % 2 === 1;
            newRow('comets',comet,datasets,preview,odd);
        }
    );
    // COMET COUNT
    $('#comet-count').text(`(${Object.keys(comets).length})`);
    
    // PLACE SATELLITES
    satelliteNames
        .sort(sortAlphaNum)
        .map((satellite,idx) => {
            const datasets = satellites[satellite]['datasets'];
            const preview = satellites[satellite]['preview'];
            const odd = idx % 2 === 1;
            newRow('satellites',satellite,datasets,preview,odd);
        }
    );
    // PLACE SATELLITE COUNT
    $('#satellite-count').text(`(${Object.keys(satellites).length})`);
};
