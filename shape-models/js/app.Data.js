app.factory('Comets',function() {
    return [{
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
                    derived: {
                        downloadLink: 'files/67P/cg_mspcd_shap2_001m_cart.obj',
                        fileFormat: 'OBJ'
                    }
                },
                previews: {
                    default: {
                        path: 'previews/67p.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'files/67P/cg_mspcd_shap2_001m_cart.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    },{
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
                    derived: {
                        downloadLink: 'files/wild2/wild2_cart_full.tab.obj',
                        fileFormat: 'OBJ'
                    }
                },
                previews: {
                    default: {
                        path: 'previews/wild2.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'files/wild2/wild2_cart_full.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    },{
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
                    derived: {
                        downloadLink: 'files/hartley2/hartley_2_2012_cart.obj',
                        fileFormat: 'OBJ'
                    }
                },
                previews: {
                    default: {
                        path: 'files/hartley2/hartley_2_2012_cart.usdz',
                        fileFormat: 'USDZ'
                    },
                    ios: {
                        path: 'previews/hartley2_2012_cart.png',
                        fileFormat: 'PNG'
                    }
                }
            }
        }]
    },{
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
                    derived: {
                        downloadLink: 'files/tempel1/tempel1_2012_cart.obj',
                        fileFormat: 'OBJ'
                    }
                },
                previews: {
                    default: {
                        path: 'previews/previews/tempel1_2012_cart.png',
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
        },/*{
            name: 'Test',
            link: null,
            files: {
                data: {
                    primary: null,
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }*/]
    }]
})

/* ASTEROIDS */
.factory('Asteroids', function(Datasets) {
    const Hudson = Datasets['Hudson_radar'];

    return [{
        name: '1998 KY26',
        type: 'asteroid',
        datasets: [{
            name: Hudson.name,
            link: Hudson.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Hudson.basepath + '1998ky26.tab',
                        fileFormat: 'TAB'
                    },
                    derived: {
                        downloadLink: 'files/RADAR/1998ky26.tab.obj',
                        fileFormat: 'OBJ'
                    }
                },
                previews: {
                    default: {
                        path: 'previews/1998ky26.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'RADAR/1998ky26.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    },{
        name: 'Asteroid 153591',
        type: 'asteroid',
        datasets: [{
            name: 'Shape Model of Asteroid (153591) 2001 SN263',
            link: 'https://sbn.psi.edu/pds/resource/shape153591.html',
            files: {
                data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE153591_V1_0/data/a153591alpha.tab',
                        fileFormat: 'TAB'
                    },
                    derived: {
                        downloadLink: 'files/a153591/a153591alpha.tab.obj',
                        fileFormat: 'OBJ'
                    }
                },
                previews: {
                    default: {
                        path: 'previews/a153591.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'a153591/a153591alpha.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    },{
        name: 'Asteroid 52760',
        type: 'asteroid',
        datasets: [{
            name: Hudson.name,
            link: Hudson.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Hudson.basepath + '52760.tab',
                        fileFormat: 'TAB'
                    },
                    derived: {
                        downloadLink: 'files/RADAR/52760.tab.obj',
                        fileFormat: 'OBJ'
                    }
                },
                previews: {
                    default: {
                        path: 'previews/52760.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'files/RADAR/52760.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    },{
       name: 'Asteroid 8567',
       type: 'asteroid',
       datasets: [{
           name: 'Shape and Rotation of (8567) 1996 HW1',
           link: 'https://sbn.psi.edu/pds/resource/shape8567.html',
           files: {
               data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE8567_V1_0/data/a8567.tab',
                        fileFormat: 'TAB'
                    },
                    derived: {
                        downloadLink: 'files/a8567.tab.obj',
                        fileFormat: 'OBJ'
                    }
               }
           },
           previews: {
               default: {
                   path: 'previews/asteroid_8567.png',
                   fileFormat: 'PNG'
               },
               ios: {
                   path: 'files/a8567.tab.usdz',
                   fileFormat: 'USDZ'
               }
           }
       }]
    },{
        name: '1 Ceres',
        type: 'asteroid',
        datasets: [{
            name: 'Dawn Shape Models of Ceres',
            link: 'https://sbn.psi.edu/pds/resource/dawn/dwncfcshape.html',
            files: {
                data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNCSPC_4_01/DATA/ICQ/CERES_SPC181019_1024.ICQ',
                        fileFormat: 'ICQ'
                    },
                    derived: {
                        downloadLink: 'files/ceres/CERES_SPC181019_0128.ICQ.obj',
                        fileFormat: 'OBJ'
                    }
                },
                previews: {
                    default: {
                        path: 'previews/ceres.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'files/ceres/CERES_SPC181019_0128.ICQ.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        },{
            name: 'Ceres LAMO Regional Digital Terrain Model (Occator)',
            link: 'https://sbn.psi.edu/pds/resource/dawn/dwncfcshape.html',
            files: {
                data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNCSPC_4_01/DATA/ICQ/CERES_SPC181019_1024.ICQ',
                        fileFormat: 'ICQ'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        },{
            name: 'HST Images, Albedo Maps, and Shape of 1 Ceres',
            link: 'https://sbn.psi.edu/pds/resource/cereshst.html',
            files: {
                data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_HSTACS_5_CERESHST_V1_0/data/shape/ceres_shap.tab',
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
    }]
})