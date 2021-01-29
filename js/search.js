'use strict';
var searchData = [];
var vueApp = {
    el: '#search-bar',
    data: {
        focused: false,
        query: '',
        searchData: searchData
    },
    computed: {
        searchResults: function() {
            return this.searchData.filter(item => {
                for (let val of Object.values(item)) {
                    if ((val.constructor === String || typeof val === 'string') && val.toUpperCase().includes(this.query.toUpperCase())) { return true; }
                    if (Array.isArray(val) && val.some(str => str.toUpperCase().includes(this.query.toUpperCase()))) { return true; }
                }
                return false;
            })
        },
    },
    methods: {
        title: function(result) {
            return `${result.name} - ${result.description ? result.description : result.subtitle}`
        },
        loseFocus: function(event) {
            let container = event.target.closest('.search-container')
            if(!container.contains(event.relatedTarget)) {
                this.focused = false;
            }
        },
        keypress: function(event) {
            switch (event.keyCode) {
                case 27: // Escape key
                    event.target.blur(); break;
                case 13: // Enter key
                    const filteredResults = this.searchResults
                    if(filteredResults.length === 1) {
                        window.location = filteredResults[0].url
                    }
            }
        }
    }
}