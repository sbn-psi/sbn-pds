const Asteroids = function() {
    return {
        '1998 KY26': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/1998ky26.tab.obj'),
                    usdzPath: path('RADAR/1998ky26.tab.usdz'),
                    preview: 'previews/1998ky26.png'
                })
            ]
        },
        'Asteroid 153591': {
            datasets: [
                {
                    name: 'Shape Model of Asteroid (153591) 2001 SN263',
                    link: 'https://sbn.psi.edu/pds/resource/shape153591.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE153591_V1_0/data/',
                        objPath: path('a153591/a153591alpha.tab.obj'),
                        usdzPath: path('a153591/a153591alpha.tab.usdz'),
                        preview: 'previews/a153591.png'
                    }
                }
            ]
        },
        'Asteroid 52760': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/52760.tab.obj'),
                    usdzPath: path('RADAR/52760.tab.usdz'),
                    preview: 'previews/52760.png'
                })
            ]
        },
        'Asteroid 8567': {
            datasets: [
                {
                    name: 'Shape and Rotation of (8567) 1996 HW1',
                    link: 'https://sbn.psi.edu/pds/resource/shape8567.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE8567_V1_0/data/',
                        objPath: path('a8567/a8567.tab.obj'),
                        usdzPath: path('a8567/a8567.tab.usdz'),
                        preview: 'previews/asteroid_8567.png'
                    }
                }
            ]
        },
        '1 Ceres': {
            datasets: [
                {
                    name: 'Dawn Shape Models of Ceres',
                    link: 'https://sbn.psi.edu/pds/resource/dawn/dwncfcshape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNCSPC_4_01/DATA/ICQ/',
                        // objPath: path('ceres/CERES_SPC181019_0128.ICQ.OBJ'),
                        objPath: null,
                        // usdzPath: path('ceres/CERES_SPC181019_0128.ICQ.usdz'),
                        usdzPath: null,
                        preview: 'previews/ceres.png'
                    }
                },
                {
                    name: 'Ceres LAMO Regional Digital Terrain Model (Occator)',
                    link: 'https://sbn.psi.edu/pds/resource/dawn/dwncfcshape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNCSPC_4_01/DATA/ICQ/',
                        objPath: null,
                        usdzPath: null,
                        preview: null
                    }
                },
                {
                    name: 'HST Images, Albedo Maps, and Shape of 1 Ceres',
                    link: 'https://sbn.psi.edu/pds/resource/cereshst.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_HSTACS_5_CERESHST_V1_0/data/shape/',
                        objPath: null,
                        usdzPath: null,
                        preview: null
                    }
                }
            ],
            preview: previews + 'ceres.png'
        },
        '1620 Geographos': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/1620geographos.tab.obj'),
                    usdzPath: path('RADAR/1620geographos.tab.usdz'),
                    preview: 'previews/1620geographos.png'
                })
            ]
        },
        '101955 Bennu': {
            datasets: [
                {
                    name: 'Shape Model of Asteroid (101955) Bennu',
                    link: 'https://sbn.psi.edu/pds/resource/bennushape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_BENNUSHAPE_V1_0/data/',
                        objPath: path('bennu/101955bennu.tab.obj'),
                        usdzPath: path('bennu/101955bennu.tab.usdz'),
                        preview: 'previews/101955bennu.png'
                    }
                }
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
                        usdzPath: path('lutetia/lutetia_003k_cart.usdz'),
                        preview: 'previews/lutetia.png'
                    }
                }
            ]
        },
        '216 Kleopatra': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/216kleopatra.tab.obj'),
                    usdzPath: path('RADAR/216kleopatra.tab.usdz'),
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
        '2063 Bacchus': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/2063bacchus.tab.obj'),
                    usdzPath: path('RADAR/2063bacchus.tab.usdz'),
                    preview: 'previews/2063bacchus.png'
                })
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
                        usdzPath: path('steins/steins.usdz'),
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
                        usdzPath: path('itokawa/ver64q.tab.usdz'),
                        preview: 'previews/itokawa.png'
                    }
                },
                radarDataset(nullset)
            ]
        },
        '4 Vesta': {
            datasets: [
                {
                    name: 'Dawn Shape Models of Vesta',
                    link: 'https://sbn.psi.edu/pds/resource/dawn/dwnvfcshape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNVSPG_2/DATA/',
                        // objPath: path('vesta/Vesta-256V.OBJ'),
                        objPath: null,
                        // usdzPath: path('vesta/Vesta-256V.usdz'),
                        usdzPath: null,
                        preview: 'previews/vesta.png'
                    }
                },
                thomasDataset(nullset)
            ]
        },
        '433 Eros': {
            datasets: [
                {
                    name: 'Gaskell Eros Shape Model',
                    link: 'https://sbn.psi.edu/pds/resource/erosshape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_MSI_5_EROSSHAPE_V1_0/data/quad/',
                        objPath: path('eros/ver64q.tab.obj'),
                        usdzPath: path('eros/ver64q.tab.usdz'),
                        preview: 'previews/eros.png'
                    }
                },
                nearDataset(nullset)
            ]
        },
        '4179 Toutatis': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/4179toutatis.tab.obj'),
                    usdzPath: path('RADAR/4179toutatis.tab.usdz'),
                    preview: 'previews/toutatis.png'
                })
            ]
        },
        '4769 Castalia': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/4769castalia.tab.obj'),
                    usdzPath: path('RADAR/4769castalia.tab.usdz'),
                    preview: 'previews/4769castalia.png'
                })
            ]
        },
        '6489 Golevka': {
            datasets: [
                radarDataset({
                    objPath: path('RADAR/6489golevka.tab.obj'),
                    usdzPath: path('RADAR/6489golevka.tab.uusdz'),
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
};
