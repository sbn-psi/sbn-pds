(function(document, window) {
    var includeHTML = function() {
        var elements, i, elmnt, file, xhttp;
        elements = document.querySelectorAll("div[include-html]");
        for (elmnt of elements) {
            file = elmnt.getAttribute("include-html");
            if (file) {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            elmnt.innerHTML = this.responseText;
                        }
                        if (this.status == 404) {
                            elmnt.innerHTML = "Included html not found.";
                        }

                        // unwrap
                        var parent = elmnt.parentNode
                        while (elmnt.firstChild) { parent.insertBefore(elmnt.firstChild, elmnt)}
                        parent.removeChild(elmnt)

                        includeHTML()
                        window.PDSSBN_accountForAppBarHeight()
                        window.PDSSBN_checkForSearchBar()
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
            }
        }
    };
    includeHTML();
})(document, window);

/* PDS app bar */
(function(document, window) {
    // always make sure sidebar doesn't overlap header
    window.PDSSBN_accountForAppBarHeight = function() {
        var header = document.getElementById('sbn-header')
        var sidebar = document.getElementById('sbn-sidebar')
        var menuHandle = document.getElementById('sbn-menu-handle')
        var appBar = document.getElementById('pds-app-bar')
        if(header && sidebar && appBar && (sidebar.offsetTop <= header.offsetHeight + header.offsetTop)) {
            sidebar.style.top = (header.offsetHeight + header.offsetTop) + 'px';
        }
        if(header && menuHandle && appBar && (menuHandle.offsetTop <= header.offsetHeight + header.offsetTop)) {
            menuHandle.style.top = (header.offsetHeight + header.offsetTop) + 'px';
        }
    }
    
    // load app bar from pds.nasa.gov
    var link = document.createElement('link');
    link.href = 'https://pds.nasa.gov/pds-app-bar/pds-app-bar.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.body.appendChild(link)
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://pds.nasa.gov/pds-app-bar/pds-app-bar.js'
    script.addEventListener('load', function() {
        PDSSBN_accountForAppBarHeight()
    })
    document.body.appendChild(script);
    
    // as a final measure, run layout code whenever DOM changes
    var container = document.documentElement || document.body
    new MutationObserver(window.PDSSBN_accountForAppBarHeight).observe(container, {subtree: true, childList: true, attributes: false})

})(document, window);

// Load search bar angular app
(function(document, window) {
    window.PDSSBN_checkForSearchBar = function() {
        if(window.PDSSBN_bootstrappedSearchBar === true ) return;
        
        var bar = document.getElementById('search-bar')
        if(!!bar) {
            window.PDSSBN_bootstrappedSearchBar = true
            angular.bootstrap(bar, ['search'])
        }
    }
})(document, window);

/* Methods to Hide/Show Superseded versions of a data set */
const elements = {
    list: document.getElementById('pds-superseded'),
    toggle: document.getElementById('pds-superseded-toggle'),
}
// store variable to track whether to show superseded data sets
let show = false

// event handler
const setShow = function(event,el) {
    show = !show
    elements.list.style.display = (show === true) ? 'block' : 'none'
    elements.toggle.innerHTML = (show === true) ? 'Hide' : 'Show'
}