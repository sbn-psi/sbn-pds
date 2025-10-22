const satellites = [{
    name: 'Phoebe (Saturn IX)',
}, {
    name: 'Amalthea (Jupiter V)',
    type: 'satellite',
    datasets: [{
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + 'j5amalthea.tab',
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
    name: 'Atlas (Saturn XV)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'atlas_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/atlas_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/ATLAS_K30_THO_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/atlas_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/atlas_30k_plt.tab.usdz',
                    fileFormat: 'UDSZ'
                }
            }
        }
    }]
}, {
    name: 'Calypso (Saturn XIV)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'calypso_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/calypso_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/CALYPSO_K30_THO_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/calypso_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/calypso_30k_plt.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: 'Daphnis (Saturn XXXV)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'daphnis_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/daphnis_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/daphnis_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/daphnis_30k_plt.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: 'Deimos (Mars II)',
    type: 'satellite',
    datasets: [{
        name: Thomas.name,
        link: Thomas.link,
        files: {
            data: {
                primary: {
                    downloadLink: Thomas.basepath + 'm2deimos.tab',
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
    name: 'Dione (Saturn IV)',
    type: 'satellite',
    datasets: [{
        name: 'Gaskell Dione Shape Model',
        link: 'https://sbn.psi.edu/pds/resource/dioneshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_ISSWA_5_DIONESHAPE_V1_0/data/dione_ver512q.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/dione/dione_ver64q.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/DIONE_K50_GAS_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/dione.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/dione/dione_ver64q.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: 'Dione SPC Shape Model and Assessment Products',
        link: 'https://sbn.psi.edu/pds/resource/weirichdioneshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds4/cassini/satellite-dione.cassini.shape-models-maps/data/global/dione_512_o.obj',
                    fileFormat: 'OBJ'
                }
            }
        }
    }]
}, {
    name: 'Epimetheus (Saturn XI)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'epimetheus_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/epimetheus_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/EPIMETHEUS_K30_THO_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/epimetheus_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/epimetheus_30k_plt.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + 's11epimetheus.tab',
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
                    downloadLink: Thomas.basepath + 's11epimetheus.tab',
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
    name: 'Helene (Saturn XII)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'helene_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/helene_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/HELENE_K30_THO_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/helene_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/helene_30k_plt.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: 'Hyperion (Saturn VII)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'hyperion_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/hyperion_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/HYPERION_K30_THO_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/hyperion_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/hyperion_30k_plt.tab.usdz',
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
                    downloadLink: Thomas.basepath + 's7hyperion.tab',
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
    name: 'Janus (Saturn X)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'janus_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/janus_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/JANUS_K30_THO_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/janus_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/janus_30k_plt.tab.usdz',
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
                    downloadLink: Thomas.basepath + 's10janus.tab',
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
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + 's10janus.tab',
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
    name: 'Larissa (Neptune VII)',
    type: 'satellite',
    datasets: [{
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + 'n7larissa.tab',
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
    name: 'Mimas (Saturn I)',
    type: 'satellite',
    datasets: [{
        name: 'Gaskell Mimas Shape Model',
        link: 'https://sbn.psi.edu/pds/resource/mimasshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_MIMASSHAPE_V2_0/data/mimas_ver512q.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/mimas/mimas_ver512q.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/MIMAS_M3_GAS_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/mimas.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/mimas/mimas_ver512q.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: 'Mimas SPC Shape Model and Assessment Products',
        link: 'https://sbn.psi.edu/pds/resource/weirichmimasshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds4/cassini/satellite-mimas.cassini.shape-models-maps/data/mimas_512_o.obj',
                    fileFormat: 'OBJ',
                }
            }
        }
    }]
}, {
    name: 'Pan (Saturn XVIII)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'pan_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/pan_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/PAN_K30_THO_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/pan_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/pan_30k_plt.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: 'Pandora (Saturn XVII)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'pandora_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/pandora_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/PANDORA_K30_THO_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/pandora_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/pandora_30k_plt.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + 's17pandora.tab',
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
    name: 'Phobos (Mars I)',
    type: 'satellite',
    datasets: [{
        name: 'Gaskell Phobos Shape Model',
        link: 'https://sbn.psi.edu/pds/resource/phobosshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/VO1_SA_VISA_VISB_5_PHOBOSSHAPE_V1_0/data/phobos_ver512q.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/phobos/phobos_ver512q.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/PHOBOS_M3_GAS_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/phobos.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/phobos/phobos_ver512q.tab.usdz',
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
                    downloadLink: Thomas.basepath + 'm1phobos.tab',
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
    name: 'Phoebe (Saturn IX)',
    type: 'satellite',
    datasets: [{
        name: 'Gaskell Phoebe Shape Model',
        link: 'https://sbn.psi.edu/pds/resource/phoebeshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_PHOEBESHAPE_V2_0/data/phoebe_ver512q.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/phoebe/phoebe_ver512q.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/PHOEBE_M3_GAS_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/phoebe.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/phoebe/phoebe_ver512q.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: Weirich.name,
        link: Weirich.link,
        files: {
            data: {
                primary: {
                    downloadLink: Weirich.basepath + 'phoebe_512_o.obj',
                    fileFormat: 'OBJ',
                },
                derived: null,
            },
            previews: {
                default: null,
                ios: null,
            },
        },
    }]
}, {
    name: 'Prometheus (Saturn XVI)',
    type: 'satellite',
    datasets: [{
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + 's16prometheus.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/prometheus_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/prometheus_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/s16prometheus.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'prometheus_30k_plt.tab',
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
    name: 'Proteus (Neptune VIII)',
    type: 'satellite',
    datasets: [{
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + 'n8proteus.tab',
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
    name: 'Telesto (Saturn XIII)',
    type: 'satellite',
    datasets: [{
        name: Saturn.name,
        link: Saturn.link,
        files: {
            data: {
                primary: {
                    downloadLink: Saturn.basepath + 'telesto_30k_plt.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/telesto_30k_plt.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/TELESTO_K30_THO_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/telesto_30k_plt.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/SATURN_SMALL_MOONS/telesto_30k_plt.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }]
}, {
    name: 'Tethys (Saturn III)',
    type: 'satellite',
    datasets: [{
        name: 'Gaskell Tethys Shape Model',
        link: 'https://sbn.psi.edu/pds/resource/tethysshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_TETHYSSHAPE_V1_0/data/tethys_ver512q.tab',
                    fileFormat: 'TAB'
                },
                derived: [{
                    downloadLink: 'shape-models/files/tethys/tethys_ver512q.tab.obj',
                    fileFormat: 'OBJ'
                }, {
                    downloadLink: 'shape-models/files/dsk/TETHYS_M3_GAS_V01.BDS',
                    fileFormat: 'DSK'
                }]
            },
            previews: {
                default: {
                    path: 'shape-models/previews/tethys.png',
                    fileFormat: 'PNG'
                },
                ios: {
                    path: 'shape-models/files/tethys/tethys_ver512q.tab.usdz',
                    fileFormat: 'USDZ'
                }
            }
        }
    }, {
        name: 'Tethys SPC Shape Model and Assessment Products',
        link: 'https://sbn.psi.edu/pds/resource/weirichtethysshape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds4/cassini/satellite-tethys.cassini.shape-models-maps/data/global/tethys_512_o.obj',
                    fileFormat: 'OBJ',
                }
            },
            previews: {}
        },
    }]
}, {
    name: 'Rhea (Saturn V)',
    type: 'satellite',
    datasets: [{
        name: 'Rhea SPC Shape Model and Assessment Products',
        link: 'https://sbn.psi.edu/pds/resource/weirichrheashape.html',
        files: {
            data: {
                primary: {
                    downloadLink: 'https://sbnarchive.psi.edu/pds4/cassini/satellite-rhea.cassini.shape-models-maps/data/rhea_512_o.obj',
                    fileFormat: 'OBJ'
                }
            }
        }
    }]
}, {
    name: 'Thebe (Jupiter XIV)',
    type: 'satellite',
    datasets: [{
        name: Stooke.name,
        link: Stooke.link,
        files: {
            data: {
                primary: {
                    downloadLink: Stooke.basepath + 'j14thebe.tab',
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
