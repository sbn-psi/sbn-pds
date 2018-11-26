const previews = 'previews/';
const files = 'files/';
const radarDataset = 'https://sbn.psi.edu/pds/resource/rshape.html';
const saturnDataset = 'https://sbn.psi.edu/pds/resource/saturnsatshapes.html';
const path = function(path) {
    return `files/${path}`;
};

const Bodies = {
    '1998 KY26': {
        files: {
            '1998ky26': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/1998ky26.tab',
                obj: path('RADAR/1998ky26.tab.obj')
            }
        },
        dataset: radarDataset,
        preview: previews + '1998ky26.png'
    },
    'Churyumov–Gerasimenko': {
        files: {
            'Min Resolution': {
                archived: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/data/triplate/mspcd_lam/shap2/cg_mspcd_shap2_006k_cart.wrl',
                obj: path('Churyumov–Gerasimenko/cg_mspcd_shap2_006k_cart.obj')
            },
            'Max Resolution': {
                archived: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/data/triplate/mspcd_lam/shap2/cg_mspcd_shap2_001m_cart.wrl',
                obj: path('Churyumov–Gerasimenko/cg_mspcd_shap2_001m_cart.obj')
            }
        },
        dataset: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/dataset.html',
        preview: previews + '67p.png'
    },
    'Wild 2': {
        files: {
            'wild2_cart_full': {
                archived: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/data/wild2_cart_full.tab',
                obj: path('wild2/wild2_cart_full.tab.obj')
            }
        },
        dataset: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/dataset.html',
        preview: previews + 'wild2.png'
    },
    'Asteroid 153591': {
        files: {
            'a153591': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE153591_V1_0/data/a153591alpha.tab',
                obj: path('a153591/a153591alpha.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/shape153591.html',
        preview: previews + 'a153591.png'
    },
    'Asteroid 52760': {
        files: {
            '52760': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/52760.tab',
                obj: path('RADAR/52760.tab.obj')
            }
        },
        dataset: radarDataset,
        preview: previews + '52760.png'
    },
    'Asteroid 8567': {
        files: {
            'a8567': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE8567_V1_0/data/a8567.tab',
                obj: path('a8567/a8567.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/shape8567.html',
        preview: previews + 'asteroid_8567.png'
    },
    'Atlas': {
        files: {
            'atlas_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/atlas_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/atlas_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'atlas_30k_plt.png'
    },
    'Bacchus': {
        files: {
            '2063bacchus': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/2063bacchus.tab',
                obj: path('RADAR/2063bacchus.tab.obj')
            }
        },
        dataset: radarDataset,
        preview: previews + '2063bacchus.png'
    },
    'Bennu': {
        files: {
            '101955bennu': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_BENNUSHAPE_V1_0/data/101955bennu.tab',
                obj: path('bennu/101955bennu.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/bennushape.html',
        preview: previews + '101955bennu.png'
    },
    'Calypso': {
        files: {
            'calypso_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/calypso_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/calypso_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'calypso_30k_plt.png'
    },
    'Castalia': {
        files: {
            '4769castalia': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/4769castalia.tab',
                obj: path('RADAR/4769castalia.tab.obj')
            }
        },
        dataset: radarDataset,
        preview: previews + '4769castalia.png'
    },
    'Daphnis': {
        files: {
            'daphnis_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/daphnis_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/daphnis_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'daphnis_30k_plt.png'
    },
    'Dione': {
        files: {
            'Min Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_ISSWA_5_DIONESHAPE_V1_0/data/dione_quad64q.tab',
                obj: path('dione/dione_ver64q.tab.obj')
            },
            'Max Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_ISSWA_5_DIONESHAPE_V1_0/data/dione_quad512q.tab',
                obj: path('dione/dione_ver512q.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/dioneshape.html',
        preview: previews + 'dione.png'
    },
    'Epimetheus': {
        files: {
            'epimetheus_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/epimetheus_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/epimetheus_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'epimetheus_30k_plt.png'
    },
    'Eros': {
        files: {
            'Min Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_MSI_5_EROSSHAPE_V1_0/data/quad/quad64q.tab',
                obj: path('eros/ver64q.tab.obj')
            },
            'Max Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_MSI_5_EROSSHAPE_V1_0/data/quad/quad512q.tab',
                obj: path('eros/ver512q.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/erosshape.html',
        preview: previews + 'eros.png'
    },
    'Geographos': {
        files: {
            '1620geographos': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/1620geographos.tab',
                obj: path('RADAR/1620geographos.tab.obj')
            }
        },
        dataset: radarDataset,
        preview: previews + '1620geographos.png'
    },
    'Golevka': {
        files: {
            '6489golevka': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/6489golevka.tab',
                obj: path('RADAR/6489golevka.tab.obj')
            }
        },
        dataset: radarDataset,
        preview: previews + '6489golevka.png'
    },
    'Hartley 2': {
        files: {
            'hartley2_2012_cart': {
                archived: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/data/hartley2_2012_cart.wrl',
                obj: path('hartley2/hartley2_2012_cart.obj')
            }
        },
        dataset: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/',
        preview: previews + 'hartley2_2012_cart.png',
    },
    'Helene': {
        files: {
            'helene_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/helene_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/helene_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'helene_30k_plt.png'
    },
    'Hyperion': {
        files: {
            'hyperion_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/hyperion_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/hyperion_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'hyperion_30k_plt.png'
    },
    'Itokawa': {
        files: {
            'Min Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/hayabusa/HAY_A_AMICA_5_ITOKAWASHAPE_V1_0/data/quad/quad64q.tab',
                obj: path('itokawa/ver64q.tab.obj')
            },
            'Max Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/hayabusa/HAY_A_AMICA_5_ITOKAWASHAPE_V1_0/data/quad/quad512q.tab',
                obj: path('itokawa/ver512q.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/itokawashape.html',
        preview: previews + 'itokawa.png'
    },
    'Itokawa (Radar)': {
        files: {
            '25143itokawa': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/25143itokawa.tab',
                obj: path('RADAR/25143itokawa.tab.obj')
            }
        },
        dataset: radarDataset,
        preview: previews + 'itokawa_radar.png'
    },
    'Janus': {
        files: {
            'janus_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/janus_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/janus_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'janus_30k_plt.png'
    },
    'Kleopatra': {
        files: {
            '216kleopatra': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/216kleopatra.tab',
                obj: path('RADAR/216kleopatra.tab.obj')
            }
        },
        dataset: radarDataset,
        preview: previews + '216kleopatra.png'
    },
    'Lutetia': {
        files: {
            'Min Resolution': {
                archived: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/data/lutetia_003k_cart.wrl',
                obj: path('lutetia/lutetia_003k_cart.obj')
            },
            'Max Resolution': {
                archived: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/data/lutetia_003m_cart.wrl',
                obj: path('lutetia/lutetia_003m_cart.obj')
            }
        },
        dataset: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/dataset.html',
        preview: previews + 'lutetia.png'
    },
    'Mimas': {
        files: {
            'Min Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_MIMASSHAPE_V2_0/data/mimas_ver64q.tab',
                obj: path('mimas/mimas_ver64q.tab.obj')
            },
            'Max Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_MIMASSHAPE_V2_0/data/mimas_ver512q.tab',
                obj: path('mimas/mimas_ver512q.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/mimasshape.html',
        preview: previews + 'mimas.png'
    },
    'Pan': {
        files: {
            'pan_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/pan_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/pan_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'pan_30k_plt.png'
    },
    'Pandora': {
        files: {
            'pandora_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/pandora_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/pandora_30k_plt.tab.obj')
            }
        },
        file: files + 'SATURN_SMALL_MOONS/pandora_30k_plt.obj',
        dataset: saturnDataset,
        preview: previews + 'pandora_30k_plt.png'
    },
    'Phobos': {
        files: {
            'Min Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/VO1_SA_VISA_VISB_5_PHOBOSSHAPE_V1_0/data/phobos_ver64q.tab',
                obj: path('phobos/phobos_ver64q.tab.obj')
            },
            'Max Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/VO1_SA_VISA_VISB_5_PHOBOSSHAPE_V1_0/data/phobos_ver512q.tab',
                obj: path('phobos/phobos_ver512q.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/phobosshape.html',
        preview: previews + 'phobos.png'
    },
    'Phoebe': {
        files: {
            'Min Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_PHOEBESHAPE_V2_0/data/phoebe_ver64q.tab',
                obj: path('phoebe/phoebe_ver64q.tab.obj')
            },
            'Max Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_PHOEBESHAPE_V2_0/data/phoebe_ver512q.tab',
                obj: path('phoebe/phoebe_ver512q.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/phoebeshape.html',
        preview: previews + 'phoebe.png'
    },
    'Prometheus': {
        files: {
            'prometheus_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/prometheus_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/prometheus_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'prometheus_30k_plt.png'
    },
    'Steins': {
        files: {
            'steins': {
                archived: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/data/steins_cart.wrl',
                obj: path('steins/steins.obj')
            }
        },
        dataset: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/dataset.html',
        preview: previews + 'steins.png'
    },
    'Telesto': {
        files: {
            'telesto_30k_plt': {
                archived: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/telesto_30k_plt.tab',
                obj: path('SATURN_SMALL_MOONS/telesto_30k_plt.tab.obj')
            }
        },
        dataset: saturnDataset,
        preview: previews + 'telesto_30k_plt.png'
    },
    'Tempel 1': {
        files: {
            'tempel1_2012_cart': {
                archived: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/data/tempel1_2012_cart.wrl',
                obj: path('tempel1/tempel1_2012_cart.obj')
            }
        },
        dataset: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/dataset.html',
        preview: previews + 'tempel1_2012_cart.png'
    },
    'Tethys': {
        files: {
            'Min Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_TETHYSSHAPE_V1_0/data/tethys_ver64q.tab',
                obj: path('tethys/tethys_ver64q.tab.obj')
            },
            'Max Resolution': {
                archived: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_TETHYSSHAPE_V1_0/data/tethys_ver512q.tab',
                obj: path('tethys/tethys_ver512q.tab.obj')
            }
        },
        dataset: 'https://sbn.psi.edu/pds/resource/tethysshape.html',
        preview: previews + 'tethys.png'
    },
    'Toutatis': {
        files: {
            '4179toutatis': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/4179toutatis.tab',
                obj: path('RADAR/4179toutatis.tab.obj')
            },
            '4179toutatis2': {
                archived: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/4179toutatis2.tab',
                obj: path('RADAR/4179toutatis2.tab.obj')
            }
        },
        dataset: radarDataset,
        preview: previews + 'toutatis.png'
    }
};