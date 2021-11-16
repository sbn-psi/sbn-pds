---
layout: social
title: "What's the difference between a Bundle, Collection, and Dataset?"
category: PDS4
author: Mike Drum
---

There seem to be a lot of ways to say "a set of data" in the PDS world. You've probably seen some variations of this terminology around: "instrument bundle", "a calibration collection", or "shape model dataset". There are some good reasons for this, and here I hope to cover the various terms and their meanings, as well as why we structured things this way.

## 1. Dataset: a.... set of data

If you see the word Dataset (sometimes also written as "Data Set"), it might mean one of two things. The first, of course, is just that it's a generic way of describing a grouping of data and/or documents on a particular subject. No baggage here; we didn't invent the word, but it is also not a term that is defined in PDS4, the latest version of our archiving label standards. 

However, this term did have a specific meaning in PDS3, the previous PDS standard that still make up quite a large chunk of our archived data. So depending on where you're seeing this word, it may refer specifically to a "PDS3 Data Set": an aggregation of PDS3 data products with a common origin, history, or application. PDS3 Data Sets have a unique identifier and specific file structure. 

![The file structure of a PDS3 Data Set](http://pdsregistryimages.psi.edu/tips/bundles-collections/dawn-dataset.png)

On our archive, if you see something that looks like the above[^pds3], you're looking at a PDS3 Data Set. If you're archiving new data with us, you won't be archiving in PDS3 anymore, so don't worry about this too much.

## 2. Collection: a folder with superpowers

Collections can act more or less the PDS4 version of a Dataset: a grouping of basic products[^product] by type and content. You may see a collection for calibrated images, instrument documentation, basically a bunch of data or supporting products that are closely related. This is at the discretion of the data preparers, but here are some examples of how some collections are grouped by:
 
- Processing level
    - Raw
    - Calibrated
    - I/F
- Data type 
    - Image 
    - Spectra
- Time range/Mission phase
    - Cruise
    - Approach
    - Encounter
    - Year 1, Year 2
- Dataset components
    - Data
    - Documents
    - Browse[^browse]


![A list of collections for the OSIRIS-REx OCAMS instrument](http://pdsregistryimages.psi.edu/tips/bundles-collections/collections.png)

Collections get their real powers by having labels just like individual products do, and with them we track information about the products within that collection. Things like authorship, date range, processing level, or references to the target of observation and the instrument/spacecraft. This is put into place both for usability but also searchability in the future. The individual products are what you actually want, and the collection is a way of keeping them together.

## 3. Bundles: who collects the collections??

Now you might be asking: Mike, that all sounds great, but what if I don't just need one collection? Why can't I hold all these collections?

![A man desperately in need of a PDS4 Bundle](http://pdsregistryimages.psi.edu/tips/bundles-collections/too-many-collections.jpg)

Luckily we thought of that. In PDS4, a related group of Collections is called a Bundle. Much like collections, bundles also have their own labels, and the exact reason for grouping together a bunch of collections is up to the data preparer. Some smaller archives may consist of just one bundle; for example, [OLAF](https://olaf.psi.edu) typically generates a single bundle with one data collection and one document collection. Missions and larger projects might generate a larger set of related bundles: one bundle per instrument, or per mission phase, for example. 

Take a look at the prior example. What if I told you that you were looking at a bundle *the whole time*?

![Bet you never saw that coming](http://pdsregistryimages.psi.edu/tips/bundles-collections/bundle.gif)

Now you can see the whole picture. Bundles are the highest level of grouping that products are organized into in a PDS4 archive. The OSIRIS-REx mission has one bundle per instrument, as well as a bundle for mission-level documentation (cleverly called the "Mission Bundle"). Each of the instrument bundles then have data collections by processing level, a document collection, and a collection for the calibration files.

## Why stop at bundles?

Of course, we still need to be able to group bundles together! So how are we able to tell which bundles are related? That's where "context objects" come in; they're special products that represent a mission, instrument, or target of observation, for example:

- Mission 
  - Dawn
  - Hayabusa
  - Cassini
  
- Instrument
  - OCAMS - OREx Camera Suite 
  - VIR - Dawn's Visual and Infrared Spectrometer
  - ONC - Hayabusa2's Optical Navigation Camera
  
- Target 
  - Bennu
  - Iapetus 
  - Itokawa 

These are all referenced by the bundles (and collections, and basic data products, too). This is the founding principle of the [Archive Navigator]({% post_url 2021-08-10-arcnav-intro %}): a way to browse the entire PDS and find all the related bundles. But that's a post for another time.

---
  
[^pds3]: The most obvious markers of a PDS3 Data Set (apart from all the capital letters everywhere) are `AAREADME.TXT` and `VOLDESC.CAT`. These files exist in most of our legacy archived datasets and are there to describe the PDS3 Data Set that you're looking at. They will not be present in PDS4 Bundles/Collections.

[^product]: A "Product" in PDS4 refers to a label as well as the object it describes. Everything is a product-- Collections, Bundles (spoilers), individual observational products, etc. The real superpower of a collection is that it's a product! For this article I'll usually be using "product" to refer to the most basic type– an individual observational data or document product.

[^browse]: A browse product is usually a copy of another data product but in a more common file format meant to be browsed, but not usable for science: for example, a thumbnail of a FITS image, or a plot of a table. These can be grouped into a type of collection called a Browse Collection.