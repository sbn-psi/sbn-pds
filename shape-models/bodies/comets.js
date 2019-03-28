let Comets = function() {
    return {};
    return {
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
        '1P/Halley 1': {
            files: {
                'Archived Shape File': 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
            },
            datasets: [stookDataset],
            preview: null
        }
    };
};