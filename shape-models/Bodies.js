const previews = 'previews/';
const files = 'files/';
const radarDataset = {
    name: 'Radar Shape Models (Hudson)',
    link: 'https://sbn.psi.edu/pds/resource/rshape.html'
};
const saturnDataset = {
    name: 'Saturn Small Moon Shape Models',
    link: 'https://sbn.psi.edu/pds/resource/saturnsatshapes.html'
};
const stookDataset = {
    name: 'Stooke Small Body Shape Models',
    link: 'https://sbn.psi.edu/pds/resource/stkshape.html'
};
const thomasDataset = {
    name: 'Small Body Optical Shape Models',
    link: 'https://sbn.psi.edu/pds/resource/oshape.html'
};
const nearDataset = {
    name: 'NEAR Collected Shape and Gravity Models',
    link: 'https://sbn.psi.edu/pds/resource/nearmod.html'
};
const path = function(path) {
    return `files/${path}`;
};

function Bodies() {
    return {
        '1998 KY26': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/1998ky26.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + '1998ky26.png'
        },
        '67P/Churyumov–Gerasimenko': {
            files: {
                'Archived Shape Files': 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/data/triplate/mspcd_lam/shap2/',
                '.obj File (Min Resolution)': path('Churyumov–Gerasimenko/cg_mspcd_shap2_006k_cart.obj'),
                '.obj File (Max Resolution)': path('Churyumov–Gerasimenko/cg_mspcd_shap2_001m_cart.obj')
            },
            datasets: [{
                name: 'Rosetta Shape Models of Comet 67P/C-G',
                link: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/dataset.html'
            }],
            preview: previews + '67p.png'
        },
        '81P/Wild 2': {
            files: {
                'Archived Shape Files': 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/data/',
                '.obj File': path('wild2/wild2_cart_full.tab.obj')
            },
            datasets: [{
                name: 'Satdust NAVCAM 81P/Wild 2 Shape Model',
                link: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/dataset.html'
            }],
            preview: previews + 'wild2.png'
        },
        'Asteroid 153591': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE153591_V1_0/data/',
                '.obj File': path('a153591/a153591alpha.tab.obj')
            },
            datasets: [{
                name: 'Shape Model of Asteroid (153591) 2001 SN263',
                link: 'https://sbn.psi.edu/pds/resource/shape153591.html'
            }],
            preview: previews + 'a153591.png'
        },
        'Asteroid 52760': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/52760.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + '52760.png'
        },
        'Asteroid 8567': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE8567_V1_0/data/',
                '.obj File': path('a8567/a8567.tab.obj')
            },
            datasets: [{
                name: 'Shape and Rotation of (8567) 1996 HW1',
                link: 'https://sbn.psi.edu/pds/resource/shape8567.html'
            }],
            preview: previews + 'asteroid_8567.png'
        },
        'Atlas (Saturn XV)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/atlas_30k_plt.tab.obj')
            },
            datasets: [saturnDataset],
            preview: previews + 'atlas_30k_plt.png'
        },
        '2063 Bacchus': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/2063bacchus.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + '2063bacchus.png'
        },
        '101955 Bennu': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_BENNUSHAPE_V1_0/data/',
                '.obj File': path('bennu/101955bennu.tab.obj')
            },
            datasets: [{
                name: 'Shape Model of Asteroid (101955) Bennu',
                link: 'https://sbn.psi.edu/pds/resource/bennushape.html'
            }],
            preview: previews + '101955bennu.png'
        },
        'Calypso (Saturn XIV)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/calypso_30k_plt.tab.obj')
            },
            datasets: [saturnDataset],
            preview: previews + 'calypso_30k_plt.png'
        },
        '4769 Castalia': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/4769castalia.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + '4769castalia.png'
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
            datasets: [saturnDataset],
            preview: previews + 'epimetheus_30k_plt.png'
        },
        '433 Eros': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_MSI_5_EROSSHAPE_V1_0/data/quad/',
                '.obj File (Min Resolution)': path('eros/ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('eros/ver512q.tab.obj')
            },
            datasets: [
                {
                    name: 'Gaskell Eros Shape Model',
                    link: 'https://sbn.psi.edu/pds/resource/erosshape.html'
                },
                nearDataset
            ],
            preview: previews + 'eros.png'
        },
        '1620 Geographos': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/1620geographos.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + '1620geographos.png'
        },
        '6489 Golevka': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/6489golevka.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + '6489golevka.png'
        },
        '103P/Hartley 2': {
            files: {
                'Archived Shape Files': 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/data/',
                '.obj File': path('hartley2/hartley2_2012_cart.obj')
            },
            datasets: [{
                name: 'Shape Model of Hartley 2',
                link: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/'
            }],
            preview: previews + 'hartley2_2012_cart.png',
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
        '25143 Itokawa': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/hayabusa/HAY_A_AMICA_5_ITOKAWASHAPE_V1_0/data/quad/',
                '.obj File (Min Resolution)': path('itokawa/ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('itokawa/ver512q.tab.obj')
            },
            datasets: [
                radarDataset,
                {
                    name: 'Gaskell Itokawa Shape Model',
                    link: 'https://sbn.psi.edu/pds/resource/itokawashape.html'
                }
            ],
            preview: previews + 'itokawa.png'
        },
        'Janus (Saturn X)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/janus_30k_plt.tab.obj')
            },
            datasets: [
                saturnDataset,
                thomasDataset
            ],
            preview: previews + 'janus_30k_plt.png'
        },
        '216 Kleopatra': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/216kleopatra.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + '216kleopatra.png'
        },
        '21 Lutetia': {
            files: {
                'Archived Shape Files': 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/data/',
                '.obj File (Min Resolution)': path('lutetia/lutetia_003k_cart.obj'),
                '.obj File (Max Resolution)': path('lutetia/lutetia_003m_cart.obj')
            },
            datasets: [{
                name: 'Rosetta Shape Model of Asteroid Lutetia',
                link: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/dataset.html'
            }],
            preview: previews + 'lutetia.png'
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
            datasets: [saturnDataset],
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
            datasets: [saturnDataset],
            preview: previews + 'prometheus_30k_plt.png'
        },
        '2867 Steins': {
            files: {
                'Archived Shape Files': 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/data/',
                '.obj File': path('steins/steins.obj')
            },
            datasets: [{
                name: 'Rosetta Shape Model of Asteroid Steins',
                link: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/dataset.html'
            }],
            preview: previews + 'steins.png'
        },
        'Telesto (Saturn XIII)': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
                '.obj File': path('SATURN_SMALL_MOONS/telesto_30k_plt.tab.obj')
            },
            datasets: [saturnDataset],
            preview: previews + 'telesto_30k_plt.png'
        },
        '9P/Tempel 1': {
            files: {
                'Archived Shape Files': 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/data/',
                '.obj File': path('tempel1/tempel1_2012_cart.obj')
            },
            datasets: [{
                name: 'Deep Impact/Stardust-NExT Derived Shape Model',
                link: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/dataset.html'
            }],
            preview: previews + 'tempel1_2012_cart.png'
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
        '4179 Toutatis': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/4179toutatis.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + 'toutatis.png'
        },
        '4 Vesta': {
            files: {
                'Archived Digital Terrain Models': 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNVSPG_2/DATA/'
            },
            datasets: [
                {
                    name: 'Dawn Shape Models of Vesta',
                    link: 'https://sbn.psi.edu/pds/resource/dawn/dwnvfcshape.html'
                },
                thomasDataset
            ],
            preview: null
        },
        '1 Ceres': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNCSPC_4_01/DATA/ICQ/'
            },
            datasets: [{
                name: 'Dawn Shape Models of Ceres',
                link: 'https://sbn.psi.edu/pds/resource/dawn/dwncfcshape.html'
            }],
            preview: null
        },
        '243 Ida': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [
                stookDataset,
                thomasDataset
            ],
            preview: null
        },
        '253 Mathilde': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [
                stookDataset,
                thomasDataset,
                nearDataset
            ],
            preview: null
        },
        '951 Gaspra': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [
                stookDataset,
                thomasDataset
            ],
            preview: null
        },
        '1P/Halley 1': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [stookDataset],
            preview: null
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
        'Janus (Saturn X)': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [stookDataset],
            preview: null
        },
        'Epimetheus (Saturn XI)': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [
                stookDataset,
                thomasDataset
            ],
            preview: null
        },
        'Prometheus (Saturn XVI)': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [stookDataset],
            preview: null
        },
        'Pandora (Saturn XVII)': {
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
        },
        
    };
};