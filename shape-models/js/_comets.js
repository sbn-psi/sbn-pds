const comets = [{
    name: '67P/Churyumov–Gerasimenko',
    type: 'comet',
    datasets: [{
        name: 'Rosetta Shape Models of Comet 67P/C-G',
        link: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/dataset.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/data/triplate/mspcd_lam/shap2/cg_mspcd_shap2_001m_cart.wrl',
                    fileFormat: 'WRL'
                },
                derived: [{
                    downloadLink: 'shape-models/files/67P/cg_mspcd_shap2_001m_cart.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/67p.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/67P/cg_mspcd_shap2_001m_cart.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '81P/Wild 2',
    type: 'comet',
    datasets: [{
        name: 'Satdust NAVCAM 81P/Wild 2 Shape Model',
        link: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/dataset.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/data/wild2_cart_full.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/wild2/wild2_cart_full.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/wild2.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/wild2/wild2_cart_full.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '103P/Hartley 2',
    type: 'comet',
    datasets: [{
        name: 'Shape Model of Hartley 2',
        link: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/data/hartley2_2012_cart.wrl',
                    fileFormat: 'WRL'
                },
                derived: [{
                    downloadLink: 'shape-models/files/hartley2/hartley2_2012_cart.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/hartley2_2012_cart.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/hartley2/hartley2_2012_cart.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '9P/Tempel 1',
    type: 'comet',
    datasets: [{
        name: 'Deep Impact/Stardust-NExT Derived Shape Model',
        link: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/dataset.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/data/tempel1_2012_cart.wrl',
                    fileFormat: 'WRL'
                },
                derived: [{
                    downloadLink: 'shape-models/files/tempel1/tempel1_2012_cart.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/tempel1_2012_cart.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'previews/tempel1/tempel1_2012_cart.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
},
{
    name: '1P/Halley 1',
    type: 'comet',
    datasets: [{
        name: 'Stooke Small Body Shape Models',
        link: 'https://sbn.psi.edu/pds/resource/stkshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/1682q1halley.tab',
                    fileFormat: 'TAB'
                },
                derived: null
            },
            previews: {
                default: null,
                ios: null
            }
        }
    }]
}
]
