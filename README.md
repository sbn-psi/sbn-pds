# SBN PSI Archive Site

This is the repository for the primary archive site for the Asteroid/Dust subnode of the PDS Small Bodies Node. It is a simple static site served via Apache, with dependancies on jQuery, Vue, and AngularJS. Pages are curated manually.

## Adding a new page

1. Create a file in the appropriate directory
2. Copy in the contents of `template.html`
3. Edit the title of the page inside `<title>`
4. Add the page content BETWEEN the following lines:
```HTML
<!-- BEGIN main content -->
<main><div class="sbn-main">

<!-- Content goes here -->

</div></main>
<!-- END main content -->
```
Do not modify anything outside of that area, as it could break functionality of the page 

5. Add page [breadcrumbs](#breadcrumbs) to the top of that section, above your content
6. If this is a "list" page that directs users to other resources, be sure to read the sections on [relative links](#linking) and [list pages](#lists)

## <a name="breadcrumbs"></a> Creating breadcrumbs

Breadcrumbs should be added to any page that is reached via links in the main hierarchy on the site. These will give context to where the user is at, and make it easier to navigate back.

Copy this template:
```HTML
<ol class="breadcrumbs">
    <li><a href="/pds/">Home</a></li>
    <li class="breadcrumbs-separator">/</li>
    <li>  <!-- Link to parent page -->  </li>
    <li class="breadcrumbs-separator">/</li>
    <li>  <!-- Name of current page --> </li>
</ol> 
```

You can add additional levels as needed, like in the context of a mission. See a complete example for the Dawn GRaND Mars Bundle:
```HTML
<ol class="breadcrumbs">
    <li><a href="/pds/">Home</a></li>
    <li class="breadcrumbs-separator">/</li>
    <li><a href="archive/missions.html">Missions</a></li>
    <li class="breadcrumbs-separator">/</li>
    <li><a href="resource/dawn">Dawn</a></li>
    <li class="breadcrumbs-separator">/</li>
    <li><a href="resource/dawn/dawngrandPDS4.html">GRaND</a></li>
    <li class="breadcrumbs-separator">/</li>
    <li>Ceres Bundle 1.0</li>
</ol>
```

## <a name="linking"></a> Linking between pages

### Relative links
Relative links are any link to a page within the same website, and they do not start with `http` or `/`. It is important when creating a link (`<a>`) to be sure to use the correct relative path to the destination page. At the top of each HTML page, there is a `<base>` tag that indicates the origin of any relative links on the page (which should not be modified). In effect, this means that every internal link on the site should point to the path <em> from the root of this project </em>, rather than the relative path from the page itself.

Using the same example above for the breadcrumbs, note that the links all navigate from the root:
```HTML
<a href="resource/dawn/dawngrandPDS4.html">GRaND</a>
```
Even if you were to link to this page from `resource/dawn/index.html`, you would need to spell out the full path; this is done for consistency, and to make it easier to maintain in the future. Creating a simple relative link  to a sibling page (`<a href="dawngrandPDS4.html">`) works when there is no `<base>` tag assigned, but it is no longer appropriate for use on this site.

### Smart breadcrumbs links
In order for breadcrumbs to always show the actual path that the user took to arrive at a particular page, attributes must be added to most internal links which will then be used to pass along parameters to subsequent pages to help them build accurate breadcrumbs.

Smart breadcrumbs links should be used and are most important for "List pages", like the All Asteroid Data, Image Data, etc.

A smart breadcrumb link looks like this example, from the All Asteroids Data page:
```HTML
<a class="referral-link" data-page="Asteroid" data-type="Target Type" href="resource/orex/ola.html">OSIRIS-REx OLA</a>
```

The three pieces that you need to add to a standard relative link are the following:
- `class="referral-link"`: This exact class should be applied to any link to indicate that it is a smart breadcrumb link
- `data-page`: Set the value of this attribute to the name of the page that it is on (the referrer)
- `data-type`: Set the value of this attribute to one of the following exactly: `Data Type`, `Target Type`, or `Missions`, depending on the context of the page that the link is on (the referrer)

If everything works, clicking on the link will navigate to the destination page with some additonal parameters passed in the URL, and the breadcrumbs on the destination page should point back to the path of the referrer.

## Setting a page theme
Theme images in the main site header on each page are an additional context clue, orienting the user as to where they are on the site. In general, we use them to indicate when they are on a page related to a mission, or are navigating based on target/data type.

Pages will already have a default theme applied to them based on their breadcrumbs, but in order to override this (for example, to add a mission logo), do the following:
1. Add an image to the `images` directory (if necessary)
2. At the very beginning of the main content block, look for this line:
```HTML
<main><div class="sbn-main">
```
3. Add (or modify) the data-page-theme attribute, and add the relative path of the image you want. For example, to set the page theme to the Dawn patch, change that line to the following:
```HTML
<main><div class="sbn-main" data-page-theme="images/dawn-patch.png">
```

## <a name="lists"></a> Adding a new List page
There are two additional things to be aware of when creating a new list page, because the site needs to know about them programmatically in order to build the primary browse pages (Target type, data type, missions) as well as keywords to match for the Shortcut box.

### Modifying the Browse page lists

In order to add a row to the browse page tables (Browse by Data Type, Browse by Target Type, Browse by Mission), a new entry must be added to `js/search-data.js`. These entries are Javascript objects, so a small familiarity with those will be helpful, but in this case it is simply a notation for key-value pairs.

Each entry should be surrounded with curly braces `{}`, separated by commas, and each key should be of the form `\[key\]: '\[value\]',` (including the trailing comma).

To add an entry, start from scratch using the above description or copy an existing one and modify the values. The following keys should be set for each entry:
1. `name`: The name of the page as it should appear in the list
1. `url`: The path to the list page you are adding
1. `category`: The type of list being added, one of the following exactly: `Data Type`, `Target Type`, or `Missions`
1. `description`: The description of the page (only used for Data Type pages)
1. `instruments`: The list of instruments used on the mission (only used for Mission pages). This value must be a Javascript array (a comma-separated list of strings surrounded by brackets `[]`)

Once this is saved, a row will be added to the appropriate title based on the category.

### Shortcut search results

The results of the Shortcut bar are sourced from the same file as is used to generate the browse page lists: `js/search-data.js`. To add new results or to edit the keywords that are associated with the results, the procedure is similar to the above instructions.

If you've already added an entry to get a page to appear on the browse page, that entry will also appear in the shortcut search results. Those results are filtered by matching the query against any part of an entry's values, including the name, description, and instruments. 

To add additional keywords associated with a given page that a user might search for, simply add a new key with any name, and add your keywords as the value of that key. For example, if you wanted the "TNOs, Centaurs, and Pluto" page to also appear when the user searched "Trans-Neptunian", you could just do the following:
```JS
{
    name: 'TNOs, Centaurs, and Pluto',
    subtitle: '',
    url: '/pds-staging/archive/tnos.html',
    category: 'Target Types',
    other: 'Trans-Neptunian'
}
```



