const asteroids = [{
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
                derived: [{
                    downloadLink: 'shape-models/files/RADAR/1998ky26.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/1998ky26.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'RADAR/1998ky26.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '486958 Arrokoth',
    type: 'asteroid',
    datasets: [{
        name: 'New Horizons Porter (2024) Arrokoth Shape Model Collection',
        link: 'https://pdssbn.astro.umd.edu/holdings/pds4-nh_derived:arrokoth_shapemodel_porter2024-v1.0/SUPPORT/dataset.shtml',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://pdssbn.astro.umd.edu/holdings/pds4-nh_derived:arrokoth_shapemodel_porter2024-v1.0/arrokoth_porter_2024_v01.obj',
                    fileFormat: 'OBJ'
                }
            },
            previews: {
                default: {
                    path: 'shape-models/previews/arrokoth.porter_2024.png',
                    fileFormat: 'PNG'
                }
            }
        }
    }, {
        name: 'New Horizons Arrokoth Encounter Geology and Geophysical Maps and Shape Models',
        link: 'https://pdssbn.astro.umd.edu/holdings/nh-a-lorri_mvic-5-geophys-v1.0/dataset.shtml',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://pdssbn.astro.umd.edu/holdings/nh-a-lorri_mvic-5-geophys-v1.0/data/shape_models/mu69_merged.obj',
                    fileFormat: 'OBJ'
                }
            },
            previews: {
                default: {
                    path: 'shape-models/previews/mu69_merged.png',
                    fileFormat: 'PNG'
                }
            }
        }
    }]
}, {
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
                derived: [{
                    downloadLink: 'shape-models/files/a153591/a153591alpha.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a153591.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'a153591/a153591alpha.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
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
                derived: [{
                    downloadLink: 'shape-models/files/RADAR/52760.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/52760.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/RADAR/52760.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
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
                derived: [{
                    downloadLink: 'shape-models/files/a8567/a8567.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/asteroid_8567.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/a8567/a8567.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
},
{
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
                derived: [{
                    downloadLink: 'shape-models/files/ceres/CERES_SPC181019_0128.ICQ.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/ceres.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/ceres/CERES_SPC181019_0128.ICQ.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
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
    }, {
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
    }, {
        name: 'Ceres SPC Shape and Regional Models',
        link: 'https://sbn.psi.edu/pds/resource/weirichceresshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds4/dawn/dwarf_planet-ceres.dawn.shape-models-maps_V1_0/data/global/ceres_512_p.tab',
                    fileFormat: 'TAB',
                },
                derived: [{
                    downloadLink: 'shape-models/files/ceres/ceres_512_p.obj',
                    fileFormat: 'OBJ'
                }],
            },
            previews: {
                default: null,
                ios: null,
            },
        }
    }]
}, {
    name: '1620 Geographos',
    type: 'asteroid',
    datasets: [{
        name: Hudson.name,
        link: Hudson.link,
        files: {
            data: {
                primary: {
                    downloadLink: Hudson.basepath + '1620geographos.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/RADAR/1620geographos.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/1620geographos.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: Hudson.basepath + '1620geographos.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '101955 Bennu',
    type: 'asteroid',
    datasets: [{
        name: 'Shape Model of Asteroid (101955) Bennu',
        link: 'https://sbn.psi.edu/pds/resource/bennushape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_BENNUSHAPE_V1_0/data/101955bennu.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/bennu/radar/101955bennu.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/BENNU_K3_NOL_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/101955bennu.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/bennu/radar/101955bennu.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: 'OSIRIS-REx SPICE Archive',
        link: 'https://naif.jpl.nasa.gov/pub/naif/pds/pds4/orex/',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://naif.jpl.nasa.gov/pub/naif/pds/pds4/orex/orex_spice/spice_kernels/dsk/bennu_g_03170mm_spc_obj_0000n00000_v020.bds',
                    fileFormat: 'DSK'
                },
                derived: [{
                    downloadLink: 'shape-models/files/bennu/orex/bennu.orex.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/bennu.orex.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/bennu/orex/bennu.orex.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '162173 Ryugu',
    type: 'asteroid',
    datasets: [{
        name: '(JAXA) Hayabusa2 observations of the top-shape carbonaceous asteroid 162173 Ryugu',
        link: 'https://www.darts.isas.jaxa.jp/pub/hayabusa2/paper/Watanabe_2019/README.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://www.darts.isas.jaxa.jp/pub/hayabusa2/paper/Watanabe_2019/SHAPE_SFM_3M_v20180804.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/Ryugu.png',
                    fileFormat: 'PNG'
                },
                ios: null
            }
        }
    }]
}, {
    name: '21 Lutetia',
    type: 'asteroid',
    datasets: [{
        name: 'Rosetta Shape Model of Asteroid Lutetia',
        link: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/dataset.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/data/lutetia_003m_cart.wrl',
                    fileFormat: 'WRL'
                },
                derived: [{
                    downloadLink: 'shape-models/files/lutetia/lutetia_003k_cart.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/LUTETIA_K3_FAR_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/lutetia.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/lutetia/lutetia_003k_cart.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '216 Kleopatra',
    type: 'asteroid',
    datasets: [{
        name: Hudson.name,
        link: Hudson.link,
        files: {
            data: {
                primary: {
                    downloadLink: Hudson.basepath + '216kleopatra.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: Hudson.basepath + '216kleopatra.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/216kleopatra.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'Hudson.basepath' + '216kleopatra.tab.usdz',
                    fileformat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '243 Ida',
    type: 'asteroid',
    datasets: [{
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + '243ida.tab',
                    fileFormat: 'TAB'
                },
                derived: null
            },
            previews: {
                default: null,
                ios: null
            }
        }
    }, {
        name: Thomas.name,
        link: Thomas.link,
        files: {
            data: {
                primary: {
                    downloadLink: Thomas.basepath + '243ida.tab',
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
}, {
    name: '253 Mathilde',
    type: 'asteroid',
    datasets: [{
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + '253mathilde.tab',
                    fileFormat: 'TAB'
                },
                derived: null
            },
            previews: {
                default: null,
                ios: null
            }
        }
    }, {
        name: Thomas.name,
        link: Thomas.link,
        files: {
            data: {
                primary: {
                    downloadLink: Thomas.basepath + '253mathilde.tab',
                    fileFormat: 'TAB'
                },
                derived: null
            },
            previews: {
                default: null,
                ios: null
            }
        }
    }, {
        name: NEAR.name,
        link: NEAR.link,
        files: {
            data: {
                primary: {
                    downloadLink: NEAR.basepath + '253mathilde.tab',
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
}, {
    name: '2063 Bacchus',
    type: 'asteroid',
    datasets: [{
        name: Hudson.name,
        link: Hudson.link,
        files: {
            data: {
                primary: {
                    downloadLink: Hudson.basepath + '2063bacchus.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/RADAR/2063bacchus.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/2063bacchus.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/RADAR/2063bacchus.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '2867 Steins',
    type: 'asteroid',
    datasets: [{
        name: 'Rosetta Shape Model of Asteroid Steins',
        link: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/dataset.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/data/steins_cart.wrl',
                    fileFormat: 'WRL'
                },
                derived: [{
                    downloadLink: 'shape-models/files/steins/steins.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/steins.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/steins/steins.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '25143 Itokawa',
    type: 'asteroid',
    datasets: [{
        name: 'Gaskell Itokawa Shape Model',
        link: 'https://sbn.psi.edu/pds/resource/itokawashape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds3/hayabusa/HAY_A_AMICA_5_ITOKAWASHAPE_V1_0/data/quad/quad512q.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/itokawa/ver64q.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/ITOKAWA_K50_GAS_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/itokawa.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/itokawa/ver64q.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: Hudson.name,
        link: Hudson.link,
        files: {
            data: {
                primary: {
                    downloadLink: Hudson.basepath + '25143itokawa.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/dsk/ITOKAWA_K12_NEE_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: null,
                ios: null
            }
        }
    }]
}, {
    name: '4 Vesta',
    type: 'asteroid',
    datasets: [{
        name: 'Dawn Shape Models of Vesta',
        link: 'https://sbn.psi.edu/pds/resource/dawn/dwnvfcshape.html',
        files: {
            data: {
                primary: null,
                derived: [{
                    downloadLink: 'shape-models/files/vesta/Vesta-256V.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/vesta.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/vesta/Vesta-256V.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: Thomas.name,
        link: Thomas.link,
        files: {
            data: {
                primary: {
                    downloadLink: Thomas.basepath + '4vesta.tab',
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
}, {
    name: '433 Eros',
    type: 'asteroid',
    datasets: [{
        name: 'Gaskell Eros Shape Model',
        link: 'https://sbn.psi.edu/pds/resource/erosshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_MSI_5_EROSSHAPE_V1_0/data/vertex/ver512q.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/eros/ver64q.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/EROS_M3_GAS_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/eros.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/eros/ver64q.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: NEAR.name,
        link: NEAR.link,
        files: {
            data: {
                primary: {
                    downloadLink: NEAR.basepath + 'eros200700.tab',
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
}, {
    name: '4179 Toutatis',
    type: 'asteroid',
    datasets: [{
        name: Hudson.name,
        link: Hudson.link,
        files: {
            data: {
                primary: {
                    downloadLink: Hudson.basepath + '4179toutatis.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/RADAR/4179toutatis.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/toutatis.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/RADAR/4179toutatis.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '4769 Castalia',
    type: 'asteroid',
    datasets: [{
        name: Hudson.name,
        link: Hudson.link,
        files: {
            data: {
                primary: {
                    downloadLink: Hudson.basepath + '4769castalia.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/RADAR/4769castalia.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/4769castalia.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/RADAR/4769castalia.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '6489 Golevka',
    type: 'asteroid',
    datasets: [{
        name: Hudson.name,
        link: Hudson.link,
        files: {
            data: {
                primary: {
                    downloadLink: Hudson.basepath + '6489golevka.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/RADAR/6489golevka.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/6489golevka.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/RADAR/6489golevka.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '951 Gaspra',
    type: 'asteroid',
    datasets: [{
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + '951gaspra.tab',
                    fileFormat: 'TAB'
                },
                derived: null
            },
            previews: {
                default: null,
                ios: null
            }
        }
    }, {
        name: Thomas.name,
        link: Thomas.link,
        files: {
            data: {
                primary: {
                    downloadLink: Thomas.basepath + '951gaspra.tab',
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
}, {
    name: '2100 Ra-Shalom',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a2100rashalom.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a2100rashalom.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a2100rashalom.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '4486 Mithra',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a4486mithra.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a4486mithra.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a4486mithra.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '4660 Nereus',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a4660nereus.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a4660nereus.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a4660nereus.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '10115 1992 SK',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a10115_1992sk.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a10115_1992sk.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a10115_1992sk.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '29075 1950 DA (Retrograde)',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a29075_1950da_retrogrademodel.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a29075_1950da_retrogrademodel.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a29075_1950da_retrogrademodel.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '29075 1950 DA (Prograde)',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a29075_1950da_progrademodel.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a29075_1950da_progrademodel.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a29075_1950da_progrademodel.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '33342 1998 WT24',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a33342_1998wt24.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a33342_1998wt24.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a33342_1998wt24.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '54509 YORP',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a54509_yorp.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a54509_yorp.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a54509_yorp.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '66391 1999 KW4 Alpha',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a66391_1999kw4_primary.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a66391_1999kw4_primary.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a66391_1999kw4_primary.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '66391 1999 KW4 Beta',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a66391_1999kw4_secondary.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a66391_1999kw4_secondary.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a66391_1999kw4_secondary.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '136617 1994 CC Alpha',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + 'a136617_1994cc_primary.obj',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a136617_1994cc_primary.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a136617_1994cc_primary.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '276049 2002 CE26 Alpha',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + '',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a276046_2002ce26_primary.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a276046_2002ce26_primary.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: '341843 2008 EV5',
    type: 'asteroid',
    datasets: [{
        name: Lawrence.name,
        link: Lawrence.link,
        files: {
            data: {
                primary: {
                    downloadLink: Lawrence.basepath + '',
                    fileFormat: 'OBJ'
                },
                derived: null
            },
            previews: {
                default: {
                    path: 'shape-models/previews/a341843_2008ev5.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/usd/a341843_2008ev5.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}
]
