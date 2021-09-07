---
layout: social
title: Introduction to Archive Navigator
category: Tool Help
author: Mike Drum
---

Recently you may have noticed that our archive has gone through some changes in appearance and structure. This is more than a paint job; we've been working on a project for a couple of years called the [Archive Navigator](https://arcnav.psi.edu), and it's going to drastically improve the experience of browsing the PDS. 

## What it's about

This new version of our archive site is built from the ground up to understand the archive itself, and make it easier to find what you're looking for. Data in the PDS is labeled with a structured format called [PDS4](https://pds.nasa.gov/datastandards/about/), and it includes everything you need to find and use the data. This metadata is provided directly by the authors themselves, so this is only possible due to the hard work of our data providers. We use this metadata to build the interface itself, showing everything about the related target or mission by inspecting the labels themselves and doing the searches for you. Any time you view a page on Archive Navigator, we run a search at the central PDS registry to pull in the latest information about the spacecraft, instrument, or dataset you're looking at and present it dynamically. This makes sure that everything you're seeing is up-to-date, and more importantly, makes it that much easier to browse for exactly the data you're looking for. You may even discover data you didn't know we had!

## Human curated, human friendly

Sometimes what makes sense for a long-term archive label doesn't make much sense for the web pages you're using to find the thing, though.... and sometimes it's not enough, either. We discovered this pretty early on, and built a set of tools internally to help improve the metadata you see, and add things like ✨ pictures ✨ that really only make sense for the web. This means we're not limited to the technical names and descriptions that may be confusing to see right away, and we can also keep things fresh as new nicknames and uses for the data change over time. PDS4 was first and foremost built for machines, and as far as we know you're not one of those. So, we work hard to make sure things just... make sense.

## Okay great so show me

As you wish! 

Archive Navigator was once called the Context Browser, and that's because it's all based around Missions and Targets -- the "context" for a dataset in the PDS. The big idea is that you can always see everything related to a mission or a dataset in one place. You don't need to know what to search for, and if you do wind up here from a search you can know if you're in the right place and have everything you need.

For example, right from this OSIRIS-REx data collection page, you can see links to explore more about that mission:

![Image of OSIRIS-REx data collection](https://pdsregistryimages.psi.edu/tips/arcnav/OSIRIS-REx.png)

Every page related to a mission will show this context. From here, you can navigate to:
- **Overview**: Descriptions about the mission itself, including dates and mission phases
- **Spacecraft**: Descriptions about the spacecraft involved in the mission
- **Targets**: Links out to target information pages that were involved in the mission, sorted by relevance
- **Tools**: Links to specialized software tools that integrate directly with data from this mission
- **Instrument Data**: View information about each instrument, and get links to the data produced by them
- **Other Data**: Any other datasets related to a mission will go here. These are often radio science or SPICE bundles
- **Mission Bundle**: If the mission team archived a bundle of high-level mission documentation, you'll see that here

For data that has been compiled or derived from other datasets, it's usually thought of as being about one or more planetary bodies, rather than as output from a mission. For this type of data, we also have target information pages:

![Image of Eros data](https://pdsregistryimages.psi.edu/tips/arcnav/Eros.png)

Every target of observation in our archive has a page like this. Here you'll find:
- **Overview**: Descriptions and characteristics of the planetary body
- **Related**: Links to other celestial bodies in that system, like moons
- **Tools**: Links to specialized software tools that integrate directly with data from this target
- **Mission Data**: Links out to mission pages that observed that target, sorted by date
- **Derived Data**: Target-oriented datasets. Things like shape models, mosaics, anything derived from other observations

## Powered by PDS4

If you're a fellow PDS4 nerd, this part is for you. On most pages, you'll see an Identifier (LID). This is the unique Logical Identifier for that bundle, collection, mission, spacecraft, target, or instrument. Archive Navigator is organized all around the relationships between these objects, and it's also how we look up things in the first place. Look at the address bar: in most cases, you'll just see simply `arcnav.psi.edu/<LID>`. Looking up a specific dataset is as simple as typing its LID into the URL. This will work even for pages that we haven't curated yet; if it's archived, it's gonna show up.

## Help us get even better

If you have any ideas for ways that the PDS could help you find what you're looking for, we are desperate to hear from you. We hope to present even better tools like this in the future. Drop us a line at [sbn@psi.edu](mailto:sbn@psi.edu) with any feedback you have.