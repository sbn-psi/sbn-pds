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
                    derived: [{
                        downloadLink: 'files/67P/cg_mspcd_shap2_001m_cart.obj',
                        format: 'OBJ'
                    }]
                },
                previews: {
                    default: {
                        path: 'previews/67p.png',
                        format: 'PNG'
                    },
                    ios: {
                        path: 'files/67P/cg_mspcd_shap2_001m_cart.usdz',
                        format: 'USDZ'
                    }
                }
            }
        },{
            name: 'Test Dataset',
            link: null,
            files: {}
        }]
    },{
        name: '81P/Wild 2',
        type: 'comet',
        datasets: [{
            name: 'Satdust NAVCAM 81P/Wild 2 Shape Model',
            link: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/dataset.html',
            files: {
                tab: {
                    path: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/data/wild2_cart_full.tab',
                    format: 'TAB',
                    isArchivedFile: true
                },
                obj: {
                    path: 'files/wild2/wild2_cart_full.tab.obj',
                    format: 'OBJ'
                },
                usdz: {
                    path: 'files/wild2/wild2_cart_full.tab.usdz',
                    format: 'USDZ'
                },
                png: {
                    path: 'previews/wild2.png',
                    format: 'PNG'
                }
            }
        }]
    }]
});