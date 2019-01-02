let Satellites = function() {
    return {
        'Atlas (Saturn XV)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/atlas_30k_plt.tab.obj')
            },
            datasets: [saturnDataset],
            preview: previews + 'atlas_30k_plt.png'
        },
        'Calypso (Saturn XIV)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/calypso_30k_plt.tab.obj')
            },
            datasets: [saturnDataset],
            preview: previews + 'calypso_30k_plt.png'
        },
        'Daphnis (Saturn XXXV)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/daphnis_30k_plt.tab.obj')
            },
            datasets: [saturnDataset],
            preview: previews + 'daphnis_30k_plt.png'
        },
        'Dione (Saturn IV)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_ISSWA_5_DIONESHAPE_V1_0/data/',
                '.obj File (Min Resolution)': path('dione/dione_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('dione/dione_ver512q.tab.obj')
            },
            datasets: [{
                name: 'Gaskell Dione Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/dioneshape.html'
            }],
            preview: previews + 'dione.png'
        },
        'Epimetheus (Saturn XI)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/epimetheus_30k_plt.tab.obj')
            },
            datasets: [
                saturnDataset,
                stookDataset,
                thomasDataset
            ],
            preview: previews + 'epimetheus_30k_plt.png'
        },
        'Helene (Saturn XII)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/helene_30k_plt.tab.obj')
            },
            datasets: [saturnDataset],
            preview: previews + 'helene_30k_plt.png'
        },
        'Hyperion (Saturn VII)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/hyperion_30k_plt.tab.obj')
            },
            datasets: [
                saturnDataset,
                thomasDataset
            ],
            preview: previews + 'hyperion_30k_plt.png'
        },
        'Janus (Saturn X)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/janus_30k_plt.tab.obj')
            },
            datasets: [
                saturnDataset,
                thomasDataset,
                stookDataset
            ],
            preview: previews + 'janus_30k_plt.png'
        },
        'Mimas (Saturn I)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_MIMASSHAPE_V2_0/data/',
                '.obj File (Min Resolution)': path('mimas/mimas_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('mimas/mimas_ver512q.tab.obj')
            },
            datasets: [{
                name: 'Gaskell Mimas Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/mimasshape.html'
            }],
            preview: previews + 'mimas.png'
        },
        'Pan (Saturn XVIII)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/pan_30k_plt.tab.obj')
            },
            datasets: [saturnDataset],
            preview: previews + 'pan_30k_plt.png'
        },
        'Pandora (Saturn XVII)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/pandora_30k_plt.tab.obj')
            },
            file: files + 'SATURN_SMALL_MOONS/pandora_30k_plt.obj',
            datasets: [
                saturnDataset,
                stookDataset
            ],
            preview: previews + 'pandora_30k_plt.png'
        },
        'Phobos (Mars I)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/multi_mission/VO1_SA_VISA_VISB_5_PHOBOSSHAPE_V1_0/data/',
                '.obj File (Min Resolution)': path('phobos/phobos_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('phobos/phobos_ver512q.tab.obj')
            },
            datasets: [
                {
                    name: 'Gaskell Phobos Shape Model',
                    link: 'https://sbn.psi.edu/pds/resource/phobosshape.html'
                },
                thomasDataset
            ],
            preview: previews + 'phobos.png'
        },
        'Phoebe (Saturn IX)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_PHOEBESHAPE_V2_0/data/',
                '.obj File (Min Resolution)': path('phoebe/phoebe_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('phoebe/phoebe_ver512q.tab.obj')
            },
            datasets: [{
                name: 'Gaskell Phoebe Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/phoebeshape.html'
            }],
            preview: previews + 'phoebe.png'
        },
        'Prometheus (Saturn XVI)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/prometheus_30k_plt.tab.obj')
            },
            datasets: [
                saturnDataset,
                stookDataset
            ],
            preview: previews + 'prometheus_30k_plt.png'
        },
        'Telesto (Saturn XIII)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/telesto_30k_plt.tab.obj')
            },
            datasets: [saturnDataset],
            preview: previews + 'telesto_30k_plt.png'
        },
        'Tethys (Saturn III)': {
            files: {
                'Archived Shape Files (Min Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_TETHYSSHAPE_V1_0/data/',
                '.obj File (Min Resolution)': path('tethys/tethys_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('tethys/tethys_ver512q.tab.obj')
            },
            datasets: [{
                name: 'Gaskell Tethys Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/tethysshape.html'
            }],
            preview: previews + 'tethys.png'
        },
        'Amalthea (Jupiter V)': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [stookDataset],
            preview: null
        },
        'Thebe (Jupiter XIV)': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [stookDataset],
            preview: null
        },
        'Larissa (Neptune VII)': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [stookDataset],
            preview: null
        },
        'Proteus (Neptune VIII)': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [stookDataset],
            preview: null
        },
        'Deimos (Mars II)': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_SHAPE_MODELS_V2_1/data/'
            },
            datasets: [thomasDataset],
            preview: null
        }
    };
};