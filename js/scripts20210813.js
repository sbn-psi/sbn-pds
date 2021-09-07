/* PDS app bar */
(function(document, window) {
    // always make sure sidebar doesn't overlap header
    function accountForAppBarHeight() {
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
    script.addEventListener('load', accountForAppBarHeight)
    document.body.appendChild(script);
    
    // as a final measure, run layout code whenever DOM changes
    var container = document.documentElement || document.body
    new MutationObserver(accountForAppBarHeight).observe(container, {subtree: true, childList: true, attributes: false})

})(document, window);

// Add button ripples
(function(document, window) {
    document.querySelectorAll('.pds-button').forEach((button) => {
        console.log(button.firstChild.classList)
        if(!button.firstChild.classList || !button.firstChild.classList.contains('button-ripple')) {
            const ripple = document.createElement('div')
            ripple.className = 'button-ripple'
            button.prepend(ripple)
        }
    })
})(document, window);

// Theme toggle
(function(document, window) {
        
        const toggle = document.getElementById('theme-switch-checkbox')
        if(!!toggle) {
            toggle.addEventListener("change", changeTheme, false)

            const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

            if (!!currentTheme) {
                document.documentElement.setAttribute('data-theme', currentTheme);

                if (currentTheme === 'light') {
                    toggle.checked = true;
                }
            }
        }

        function changeTheme(event) {
            if (event.target.checked) {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                document.cookie = "SBNTHEME=light; domain=.psi.edu; path=/; Max-Age=2147483647";
            }
            else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                document.cookie = "SBNTHEME=dark; domain=.psi.edu; path=/; Max-Age=2147483647";
            }    
        }
})(document, window);


// Menu toggle
(function(document, window) {
        
        const toggle = document.getElementById('menu-drawer')
        if(!!toggle) {
            toggle.addEventListener("click", openMenu, false)
        }

        function openMenu(event) {
            document.getElementById("menu").classList.add("open")
            const backdrop = document.getElementById("menu-backdrop")
            backdrop.classList.add('on')
            backdrop.addEventListener('click', backdropClick)
        }
        function closeMenu(event) {
            document.getElementById("menu").classList.remove("open")
            document.getElementById("menu-backdrop").classList.remove('on')
        }

        // set up listener to close menu you click outside
        const backdropClick = (event) => {
            if(!event.target.closest('#menu') && !event.target.closest('#menu-drawer')) {
                closeMenu()
                removeListener()
            }
        }
        const removeListener = () => {
            document.getElementById("menu-backdrop").removeEventListener('click', backdropClick)
        }
})(document, window);

// Update file links to open in new tab
(function(document, window) {
    document.querySelectorAll( `main a[href$='.pdf'],
                                main a[href$='.PDF'],
                                main a[href$='.cat'],
                                main a[href$='.CAT']`).forEach(link => link.target = '_blank');
})(document, window);


(function(document, window) {
    $().ready(function() {
        $("a[href^='\#']").each(function(){ 
            this.href=location.href.split("#")[0]+'#'+this.href.substr(this.href.indexOf('#')+1);
        });
    });
})(document, window);

// Create breadcrumbs from referral links
(function(document, window) {
    const typeUrls = {
        "Data Type": "https://sbn.psi.edu/pds/archive/data-types.html",
        "Target Type": "https://sbn.psi.edu/pds/archive/target-types.html",
        "Missions": "https://sbn.psi.edu/pds/archive/missions.html"
    };
    const typeThemes = {
        "Data Type": "images/spectra.png",
        "Target Type": "images/eros-narrow.jpg",
        "Missions": "images/dawn.jpg"
    }

    document.querySelectorAll(".referral-link").forEach(link => {
        const originalHref = link.href;
        const type = link.dataset.type;
        const pageName = link.dataset.page
        let params = new URLSearchParams();
        params.set("refUrl", window.location);
        params.set("refName", pageName);
        params.set("type", type);
        params.set("typeUrl", typeUrls[type]);
        link.href = originalHref + "?" + params.toString();
    })

    let currentPageType = null
    document.querySelectorAll(".breadcrumbs").forEach(breadcrumbs => {
        let params = new URLSearchParams(window.location.search);

        if (!!params.get("refUrl")) {
            currentPageType = params.get("type")
            const finalBreadcrumb = breadcrumbs.lastElementChild

            let newBreadcrumbs = [{ name: "Home", url: basepath }]
            newBreadcrumbs.push({ name: currentPageType, url: params.get("typeUrl") })
            newBreadcrumbs.push({ name: params.get("refName"), url: params.get("refUrl") })
            breadcrumbs.querySelectorAll("li").forEach(li => breadcrumbs.removeChild(li))
            newBreadcrumbs.forEach(breadcrumb => {
                let el = document.createElement("li")
                el.innerHTML = `<a href="${breadcrumb.url}">${breadcrumb.name}</a>`
                breadcrumbs.appendChild(el)
                el = document.createElement("li")
                el.classList.add("breadcrumbs-separator")
                el.innerText = "/"
                breadcrumbs.appendChild(el)
            })
            breadcrumbs.appendChild(finalBreadcrumb)
        }
    })

        
        var theme = document.querySelector('.sbn-main').dataset.pageTheme
            || typeThemes[currentPageType]
        var header = document.getElementById('sbn-header')
        if(!!theme && !!header) {
            header.style.backgroundImage = `url('${theme}')`
            header.style.backgroundSize = 'auto 100%'
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