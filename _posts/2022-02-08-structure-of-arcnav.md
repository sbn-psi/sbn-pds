---
layout: social
title: "How Archive Navigator is Structured"
category: Tool Help
author: Mike Drum
---

Earlier in this series I introduced our new dynamic data browser Archive Navigator. If you haven't read up on that yet, [check that out first]({% post_url 2021-08-10-arcnav-intro %}). In it I described the motivation behind creating the service and an intro to the main types of pages on the site. This post will be a deeper dive into the structure of the site, and what goes into building each page. You'll learn more about all the features available to discover on the datasets.

## Cool let's get to it

There are two main "contexts" you can exist in on the site: **Mission** and **Target**. 

![The mission context header](https://pdsregistryimages.psi.edu/tips/Structure-of-Arcnav/MissionHeader.png.png)

If you're in a Mission-related area, you will see a blue banner with the name of the related mission, as well as individual tabs describing the different features and datasets of that mission. The first section has background information on the mission and links out to related targets and tools. The second section is where you'll find any observational data that is directly sourced from mission teams, and other supporting datasets and documentation. As mentioned in the last post, you can view information on the overall mission, spacecraft, individual instruments, or other related datasets like SPICE kernels, or any ground-based support datasets.

This first section is there to help you get oriented with the mission, and help you navigate to other areas of interest. The tools tab will take you to a curated list of software that directly searches or interacts with with mission data. This was one of the primary reasons we created Archive Navigator: to direct scientists to tools they might not be aware of, by building a connecting web between those services and a browsable archive. In many cases, the links in here will take you to a specific area of a tool dedicated to that mission.

The Targets tab will direct you to an information page dedicated to the celestial body you've selected.

![The target context header](https://pdsregistryimages.psi.edu/tips/Structure-of-Arcnav/TargetHeader.png)

Like Missions, this is divided into support/navigational information and data. However, in the case of targets, we link out to other related targets in their gravitational family (if any). In the case of complex systems like Saturn or Jupiter, this can be especially helpful to see which bodies we have data for, and also just get any extra classification information about those objects. The data side is divided into "Mission Data" and "Derived data"; the former just takes you back to the related missions that have observed that target, but the latter is where things get interesting. Many datasets, while possibly derivative of data from a spacecraft, have been further processed or combined with other data to form what we call "Derived" data. Think of things like mosaic images, digital terrain models, tables of multiple asteroids that compare physical properties, etc. These datasets are better thought of as being "about a target" than "from a mission", and so that data goes here! We hand-tag each bundle that we think deserves to go here, and you'll find a wide variety of high quality data archived in PDS by R&A or other independent programs.

## Take me down to data town

The thing to remember about Archive Navigator is that we're all about landing pages here. So what gets a little confusing is that there's a landing page for each instrument, but then there's usually an entirely separate page for each bundle of data. Even in the case like you see with OSIRIS-REx, where there's just one archived bundle for each instrument, we put those on separate pages because they are registered with different identifiers in PDS4[^pds4]. More importantly, many instruments have more than one bundle, so we want a consistent website that people can learn to understand works in the same way across missions.

For mission instrument data that we have in PDS4, the path to finding that data will generally look like this:
![How to find mission instrument data](https://pdsregistryimages.psi.edu/tips/Structure-of-Arcnav/Hierarchy.png)

We also have separate pages for each PDS4 Bundle and Collection. If you need a refresher on what those are, check out [Bundles vs Collections]({% post_url 2021-11-16-bundles-vs-collections %}). The Bundle page is primarily there to categorize and direct you to the Collections, but we also directly link to browse the bundle files if you just want to view that highest level first. Bundle pages have an icon next to their name indicating that it's somewhat of a "box", and collections get a "folder". Once you've found your way all the way to a collection page, we offer links to browse the collection files, and in many cases also offer a link to smaller download packages (divided by mission phase, for example). And with that, you'll have finally made it all the way to the data!

## Wait what's all this other stuff

Now, as much as we'd like it to, not all data or metadata is inside of PDS4[^pds4] just yet. So, Archive Navigator was designed to allows us to display supplemental information about missions, targets, and really just anything else we think you should see on those pages. This includes PDS3 data that has not yet migrated over to the new standard. We built a custom content management system that allows us to include arbitrary HTML content inside the pages, and what this results in is the flexibility to include other links to data that you'll surely see a lot of.

![Dawn's Framing camera still exists in PDS3 format](https://pdsregistryimages.psi.edu/tips/Structure-of-Arcnav/DawnFC.png)

As you can see, it fits *somewhat* naturally into the rest of the website. We've added these big tables of links to PDS3 datasets for most of the missions hosted at SBN Asteroid/Dust subnode, and will likely add more over time until it gets migrated. This flexibility was added because we know imposing the strict structure of PDS4 onto all of the data would only really make things more confusing to most people. 

So, you could say that the structure of Archive Navigator is PDS4... but the *real* structure is you 🤗

---

[pds4]: PDS4 is the latest standard for archiving in PDS. It's the super complicated one with all the XML. You can read more by checking out [our articles on the subject](https://sbn.psi.edu/pds/support/pds4/).