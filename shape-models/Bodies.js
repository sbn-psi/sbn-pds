const previews = 'previews/';
const files = 'files/';
const radarDataset = 'https://sbn.psi.edu/pds/resource/rshape.html';
const saturnDataset = 'https://sbn.psi.edu/pds/resource/saturnsatshapes.html';
const path = function(path) {
    return `files/${path}`;
};

function Bodies() {
    return {
        '1998 KY26': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/1998ky26.tab',
                '.obj File': path('RADAR/1998ky26.tab.obj')
            },
            dataset: radarDataset,
            preview: previews + '1998ky26.png'
        },
        '67P/Churyumov–Gerasimenko': {
            files: {
                'Archived File (Min Resolution)': 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/data/triplate/mspcd_lam/shap2/cg_mspcd_shap2_006k_cart.wrl',
                'Archived File (Max Resolution)': 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/data/triplate/mspcd_lam/shap2/cg_mspcd_shap2_001m_cart.wrl',
                '.obj File (Min Resolution)': path('Churyumov–Gerasimenko/cg_mspcd_shap2_006k_cart.obj'),
                '.obj File (Max Resolution)': path('Churyumov–Gerasimenko/cg_mspcd_shap2_001m_cart.obj')
            },
            dataset: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/dataset.html',
            preview: previews + '67p.png'
        },
        '81P/Wild 2': {
            files: {
                'Archived File': 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/data/wild2_cart_full.tab',
                '.obj File': path('wild2/wild2_cart_full.tab.obj')
            },
            dataset: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/dataset.html',
            preview: previews + 'wild2.png'
        },
        'Asteroid 153591': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE153591_V1_0/data/a153591alpha.tab',
                '.obj File': path('a153591/a153591alpha.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/shape153591.html',
            preview: previews + 'a153591.png'
        },
        'Asteroid 52760': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/52760.tab',
                '.obj File': path('RADAR/52760.tab.obj')
            },
            dataset: radarDataset,
            preview: previews + '52760.png'
        },
        'Asteroid 8567': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE8567_V1_0/data/a8567.tab',
                '.obj File': path('a8567/a8567.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/shape8567.html',
            preview: previews + 'asteroid_8567.png'
        },
        'Atlas (Saturn XV)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/atlas_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/atlas_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'atlas_30k_plt.png'
        },
        '2063 Bacchus': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/2063bacchus.tab',
                '.obj File': path('RADAR/2063bacchus.tab.obj')
            },
            dataset: radarDataset,
            preview: previews + '2063bacchus.png'
        },
        '101955 Bennu': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_BENNUSHAPE_V1_0/data/101955bennu.tab',
                '.obj File': path('bennu/101955bennu.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/bennushape.html',
            preview: previews + '101955bennu.png'
        },
        'Calypso (Saturn XIV)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/calypso_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/calypso_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'calypso_30k_plt.png'
        },
        '4769 Castalia': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/4769castalia.tab',
                '.obj File': path('RADAR/4769castalia.tab.obj')
            },
            dataset: radarDataset,
            preview: previews + '4769castalia.png'
        },
        'Daphnis (Saturn XXXV)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/daphnis_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/daphnis_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'daphnis_30k_plt.png'
        },
        'Dione (Saturn IV)': {
            files: {
                'Archived File (Min Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_ISSWA_5_DIONESHAPE_V1_0/data/dione_quad64q.tab',
                'Archived File (Max Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_ISSWA_5_DIONESHAPE_V1_0/data/dione_quad512q.tab',
                '.obj File (Min Resolution)': path('dione/dione_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('dione/dione_ver512q.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/dioneshape.html',
            preview: previews + 'dione.png'
        },
        'Epimetheus (Saturn XI)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/epimetheus_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/epimetheus_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'epimetheus_30k_plt.png'
        },
        '433 Eros': {
            files: {
                'Archived File (Min Resolution)': 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_MSI_5_EROSSHAPE_V1_0/data/quad/quad64q.tab',
                'Archived File (Max Resolution)': 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_MSI_5_EROSSHAPE_V1_0/data/quad/quad512q.tab',
                '.obj File (Min Resolution)': path('eros/ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('eros/ver512q.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/erosshape.html',
            preview: previews + 'eros.png'
        },
        '1620 Geographos': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/1620geographos.tab',
                '.obj File': path('RADAR/1620geographos.tab.obj')
            },
            dataset: radarDataset,
            preview: previews + '1620geographos.png'
        },
        '6489 Golevka': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/6489golevka.tab',
                '.obj File': path('RADAR/6489golevka.tab.obj')
            },
            dataset: radarDataset,
            preview: previews + '6489golevka.png'
        },
        '103P/Hartley 2': {
            files: {
                'Archived File': 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/data/hartley2_2012_cart.wrl',
                '.obj File': path('hartley2/hartley2_2012_cart.obj')
            },
            dataset: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/',
            preview: previews + 'hartley2_2012_cart.png',
        },
        'Helene (Saturn XII)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/helene_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/helene_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'helene_30k_plt.png'
        },
        'Hyperion (Saturn VII)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/hyperion_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/hyperion_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'hyperion_30k_plt.png'
        },
        '25143 Itokawa': {
            files: {
                'Archived File (Min Resolution)': 'https://sbnarchive.psi.edu/pds3/hayabusa/HAY_A_AMICA_5_ITOKAWASHAPE_V1_0/data/quad/quad64q.tab',
                'Archived File (Max Resolution)': 'https://sbnarchive.psi.edu/pds3/hayabusa/HAY_A_AMICA_5_ITOKAWASHAPE_V1_0/data/quad/quad512q.tab',
                '.obj File (Min Resolution)': path('itokawa/ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('itokawa/ver512q.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/itokawashape.html',
            preview: previews + 'itokawa.png'
        },
        '25143 Itokawa (Radar)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/25143itokawa.tab',
                '.obj File': path('RADAR/25143itokawa.tab.obj')
            },
            dataset: radarDataset,
            preview: previews + 'itokawa_radar.png'
        },
        'Janus (Saturn X)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/janus_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/janus_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'janus_30k_plt.png'
        },
        '216 Kleopatra': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/216kleopatra.tab',
                '.obj File': path('RADAR/216kleopatra.tab.obj')
            },
            dataset: radarDataset,
            preview: previews + '216kleopatra.png'
        },
        '21 Lutetia': {
            files: {
                'Archived File (Min Resolution)': 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/data/lutetia_003k_cart.wrl',
                'Archived File (Max Resolution)': 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/data/lutetia_003m_cart.wrl',
                '.obj File (Min Resolution)': path('lutetia/lutetia_003k_cart.obj'),
                '.obj File (Max Resolution)': path('lutetia/lutetia_003m_cart.obj')
            },
            dataset: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/dataset.html',
            preview: previews + 'lutetia.png'
        },
        'Mimas (Saturn I)': {
            files: {
                'Archived File (Min Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_MIMASSHAPE_V2_0/data/mimas_ver64q.tab',
                'Archived File (Max Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_MIMASSHAPE_V2_0/data/mimas_ver512q.tab',
                '.obj File (Min Resolution)': path('mimas/mimas_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('mimas/mimas_ver512q.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/mimasshape.html',
            preview: previews + 'mimas.png'
        },
        'Pan (Saturn XVIII)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/pan_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/pan_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'pan_30k_plt.png'
        },
        'Pandora (Saturn XVII)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/pandora_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/pandora_30k_plt.tab.obj')
            },
            file: files + 'SATURN_SMALL_MOONS/pandora_30k_plt.obj',
            dataset: saturnDataset,
            preview: previews + 'pandora_30k_plt.png'
        },
        'Phobos (Mars I)': {
            files: {
                'Archived File (Min Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/VO1_SA_VISA_VISB_5_PHOBOSSHAPE_V1_0/data/phobos_ver64q.tab',
                'Archived File (Max Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/VO1_SA_VISA_VISB_5_PHOBOSSHAPE_V1_0/data/phobos_ver512q.tab',
                '.obj File (Min Resolution)': path('phobos/phobos_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('phobos/phobos_ver512q.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/phobosshape.html',
            preview: previews + 'phobos.png'
        },
        'Phoebe (Saturn IX)': {
            files: {
                'Archived File (Min Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_PHOEBESHAPE_V2_0/data/phoebe_ver64q.tab',
                'Archived File (Max Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_PHOEBESHAPE_V2_0/data/phoebe_ver512q.tab',
                '.obj File (Min Resolution)': path('phoebe/phoebe_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('phoebe/phoebe_ver512q.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/phoebeshape.html',
            preview: previews + 'phoebe.png'
        },
        'Prometheus (Saturn XVI)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/prometheus_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/prometheus_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'prometheus_30k_plt.png'
        },
        '2867 Steins': {
            files: {
                'Archived File': 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/data/steins_cart.wrl',
                '.obj File': path('steins/steins.obj')
            },
            dataset: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/dataset.html',
            preview: previews + 'steins.png'
        },
        'Telesto (Saturn XIII)': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/telesto_30k_plt.tab',
                '.obj File': path('SATURN_SMALL_MOONS/telesto_30k_plt.tab.obj')
            },
            dataset: saturnDataset,
            preview: previews + 'telesto_30k_plt.png'
        },
        '9P/Tempel 1': {
            files: {
                'Archived File': 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/data/tempel1_2012_cart.wrl',
                '.obj File': path('tempel1/tempel1_2012_cart.obj')
            },
            dataset: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/dataset.html',
            preview: previews + 'tempel1_2012_cart.png'
        },
        'Tethys (Saturn III)': {
            files: {
                'Archived File (Min Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_TETHYSSHAPE_V1_0/data/tethys_ver64q.tab',
                'Archived File (Max Resolution)': 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_TETHYSSHAPE_V1_0/data/tethys_ver512q.tab',
                '.obj File (Min Resolution)': path('tethys/tethys_ver64q.tab.obj'),
                '.obj File (Max Resolution)': path('tethys/tethys_ver512q.tab.obj')
            },
            dataset: 'https://sbn.psi.edu/pds/resource/tethysshape.html',
            preview: previews + 'tethys.png'
        },
        '4179 Toutatis': {
            files: {
                'Archived File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/4179toutatis.tab',
                '.obj File': path('RADAR/4179toutatis.tab.obj')
            },
            dataset: radarDataset,
            preview: previews + 'toutatis.png'
        }
    };
};