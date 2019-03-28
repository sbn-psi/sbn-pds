let Satellites = function() {
    return {
        // 'Atlas (Saturn XV)': {
        //     files: {
        //         'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
        //         '.obj File': path('SATURN_SMALL_MOONS/atlas_30k_plt.tab.obj')
        //     },
        //     datasets: [saturnDataset],
        //     preview: previews + 'atlas_30k_plt.png'
        // },
        // 'Calypso (Saturn XIV)': {
        //     files: {
        //         'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
        //         '.obj File': path('SATURN_SMALL_MOONS/calypso_30k_plt.tab.obj')
        //     },
        //     datasets: [saturnDataset],
        //     preview: previews + 'calypso_30k_plt.png'
        // },
        // 'Daphnis (Saturn XXXV)': {
        //     files: {
        //         'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
        //         '.obj File': path('SATURN_SMALL_MOONS/daphnis_30k_plt.tab.obj')
        //     },
        //     datasets: [saturnDataset],
        //     preview: previews + 'daphnis_30k_plt.png'
        // },
        // 'Dione (Saturn IV)': {
        //     files: {
        //         'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_ISSWA_5_DIONESHAPE_V1_0/data/',
        //         '.obj File (Min Resolution)': path('dione/dione_ver64q.tab.obj'),
        //         '.obj File (Max Resolution)': path('dione/dione_ver512q.tab.obj')
        //     },
        //     datasets: [{
        //         name: 'Gaskell Dione Shape Model',
        //         link: 'https://sbn.psi.edu/pds/resource/dioneshape.html'
        //     }],
        //     preview: previews + 'dione.png'
        // },



        'Epimetheus (Saturn XI)': {
            datasets: [
                saturnDataset({
                    objPath: path('SATURN_SMALL_MOONS/epimetheus_30k_plt.tab.obj'),
                    preview: 'previews/epimetheus_30k_plt.png'
                }),
                stookDataset(nullset),
                thomasDataset(nullset)
            ]
        },
        'Helene (Saturn XII)': {
            datasets: [
                saturnDataset({
                    objPath: path('SATURN_SMALL_MOONS/helene_30k_plt.tab.obj'),
                    preview: 'previews/helene_30k_plt.png'
                }
            )]
        },
        'Hyperion (Saturn VII)': {
            datasets: [
                saturnDataset({
                    objPath: path('SATURN_SMALL_MOONS/hyperion_30k_plt.tab.obj'),
                    preview: 'previews/hyperion_30k_plt.png'
                }),
                thomasDataset(nullset)
            ]
        },
        'Janus (Saturn X)': {
            datasets: [
                saturnDataset({
                    objPath: path('SATURN_SMALL_MOONS/janus_30k_plt.tab.obj'),
                    preview: 'previews/janus_30k_plt.png'
                }),
                thomasDataset(nullset),
                stookDataset(nullset)
            ]
        },
        'Mimas (Saturn I)': {
            datasets: [{
                name: 'Gaskell Mimas Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/mimasshape.html',
                file: {
                    archivePath: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_MIMASSHAPE_V2_0/data/',
                    objPath: path('mimas/mimas_ver64q.tab.obj'),
                    preview: 'previews/mimas.png'
                }
            }]
        },
        'Pan (Saturn XVIII)': {
            datasets: [
                saturnDataset({
                    objPath: path('SATURN_SMALL_MOONS/pan_30k_plt.tab.obj'),
                    preview: 'previews/pan_30k_plt.png'
                })
            ]
        },
        'Pandora (Saturn XVII)': {
            datasets: [
                stookDataset(nullset),
                saturnDataset({
                    objPath: files + 'SATURN_SMALL_MOONS/pandora_30k_plt.tab.obj',
                    preview: 'previews/pandora_30k_plt.png'
                })
            ]
        },
        'Phobos (Mars I)': {
            datasets: [
                {
                    name: 'Gaskell Phobos Shape Model',
                    link: 'https://sbn.psi.edu/pds/resource/phobosshape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/multi_mission/VO1_SA_VISA_VISB_5_PHOBOSSHAPE_V1_0/data/',
                        objPath: path('phobos/phobos_ver64q.tab.obj'),
                        preview: 'previews/phobos.png'
                    }
                },
                thomasDataset(nullset)
            ]
        },
        'Phoebe (Saturn IX)': {
            datasets: [{
                name: 'Gaskell Phoebe Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/phoebeshape.html',
                file: {
                    archivePath: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_PHOEBESHAPE_V2_0/data/',
                    objPath: path('phoebe/phoebe_ver64q.tab.obj'),
                    preview: 'previews/phoebe.png'
                }
            }]
        },
        'Prometheus (Saturn XVI)': {
            datasets: [
                saturnDataset(nullset),
                stookDataset({
                    objPath: path('SATURN_SMALL_MOONS/prometheus_30k_plt.tab.obj'),
                    preview: 'previews/prometheus_30k_plt.png'
                })
            ]
        },



        // 'Tethys (Saturn III)': {
        //     files: {
        //         'Archived Shape Files (Min Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_TETHYSSHAPE_V1_0/data/',
        //         '.obj File (Min Resolution)': path('tethys/tethys_ver64q.tab.obj'),
        //         '.obj File (Max Resolution)': path('tethys/tethys_ver512q.tab.obj')
        //     },
        //     datasets: [{
        //         name: 'Gaskell Tethys Shape Model',
        //         link: 'https://sbn.psi.edu/pds/resource/tethysshape.html'
        //     }],
        //     preview: previews + 'tethys.png'
        // },
        // 'Telesto (Saturn XIII)': {
        //     datasets: [
        //         saturnDataset({
        //             objPath: path('SATURN_SMALL_MOONS/telesto_30k_plt.tab.obj'),
        //             archivePath: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/'
        //         })
        //     ],
        //     preview: previews + 'telesto_30k_plt.png'
        // },
        // 'Amalthea (Jupiter V)': {
        //     files: {
        //         'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
        //     },
        //     datasets: [stookDataset],
        //     preview: null
        // },
        // 'Thebe (Jupiter XIV)': {
        //     files: {
        //         'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
        //     },
        //     datasets: [stookDataset],
        //     preview: null
        // },
        // 'Larissa (Neptune VII)': {
        //     files: {
        //         'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
        //     },
        //     datasets: [stookDataset],
        //     preview: null
        // },
        // 'Proteus (Neptune VIII)': {
        //     files: {
        //         'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
        //     },
        //     datasets: [stookDataset],
        //     preview: null
        // },
        // 'Deimos (Mars II)': {
        //     files: {
        //         'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_SHAPE_MODELS_V2_1/data/'
        //     },
        //     datasets: [thomasDataset],
        //     preview: null
        // }
    };
};