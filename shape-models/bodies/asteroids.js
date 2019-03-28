const Asteroids = function() {
    return {
        
        '1 Ceres': {
            datasets: [
                {
                    name: 'Dawn Shape Models of Ceres',
                    link: 'https://sbn.psi.edu/pds/resource/dawn/dwncfcshape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNCSPC_4_01/DATA/ICQ/',
                        objPath: path('ceres/CERES_SPC181019_0128.ICQ.OBJ'),
                        preview: 'previews/ceres.png'
                    }
                },
                {
                    name: 'Ceres LAMO Regional Digital Terrain Model (Occator)',
                    link: 'https://sbn.psi.edu/pds/resource/dawn/dwncfcshape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNCSPC_4_01/DATA/ICQ/',
                        objPath: null,
                        preview: null
                    }
                },
                {
                    name: 'HST Images, Albedo Maps, and Shape of 1 Ceres',
                    link: 'https://sbn.psi.edu/pds/resource/cereshst.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_HSTACS_5_CERESHST_V1_0/data/shape/',
                        objPath: null,
                        preview: null
                    }
                }
            ],
            preview: previews + 'ceres.png'
        },
        '4 Vesta': {
            datasets: [
                {
                    name: 'Dawn Shape Models of Vesta',
                    link: 'https://sbn.psi.edu/pds/resource/dawn/dwnvfcshape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNVSPG_2/DATA/',
                        objPath: path('vesta/Vesta-256V.OBJ'),
                        preview: 'previews/vesta.png'
                    }
                },
                thomasDataset(nullset)
            ]
        },
        '21 Lutetia': {
            datasets: [
                {
                    name: 'Rosetta Shape Model of Asteroid Lutetia',
                    link: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/dataset.html',
                    file: {
                        archivePath: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/data/',
                        objPath: path('lutetia/lutetia_003k_cart.obj'),
                        preview: 'previews/lutetia.png'
                    }
                }
            ]
        },
        '216 Kleopatra': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/216kleopatra.tab.obj'),
                    preview: 'previews/216kleopatra.png'
                })
            ]
        },
        '243 Ida': {
            datasets: [
                stookDataset(nullset),
                thomasDataset(nullset)
            ]
        },
        '253 Mathilde': {
            datasets: [
                stookDataset(nullset),
                thomasDataset(nullset),
                nearDataset(nullset)
            ]
        },
        '2867 Steins': {
            datasets: [
                {
                    name: 'Rosetta Shape Model of Asteroid Steins',
                    link: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/dataset.html',
                    file: {
                        archivePath: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/data/',
                        objPath: path('steins/steins.obj'),
                        preview: 'previews/steins.png'
                    }
                }
            ]
        },
        '25143 Itokawa': {
            datasets: [
                {
                    name: 'Gaskell Itokawa Shape Model',
                    link: 'https://sbn.psi.edu/pds/resource/itokawashape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/hayabusa/HAY_A_AMICA_5_ITOKAWASHAPE_V1_0/data/quad/',
                        objPath: path('itokawa/ver64q.tab.obj'),
                        preview: 'previews/itokawa.png'
                    }
                },
                radarDataset(nullset)
            ]
        },
        '4179 Toutatis': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/4179toutatis.tab.obj'),
                    preview: 'previews/toutatis.png'
                })
            ]
        },
        '6489 Golevka': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/6489golevka.tab.obj'),
                    preview: 'previews/6489golevka.png'
                })
            ]
        },
        '951 Gaspra': {
            datasets: [
                stookDataset(nullset),
                thomasDataset(nullset)
            ]
        }
    };
    return {
        '1998 KY26': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/1998ky26.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + '1998ky26.png'
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
        '4769 Castalia': {
            files: {
                'Archived Shape Files': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
                '.obj File': path('RADAR/4769castalia.tab.obj')
            },
            datasets: [radarDataset],
            preview: previews + '4769castalia.png'
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
        
        
        
        
        
    
        
        
        
        
        
    };
};