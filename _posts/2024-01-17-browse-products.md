---
layout: social
title: "Where are all the normal file formats you weirdos?"
category: PDS4
author: Mike Drum
---

I know, I know, you want your jpeg!  

Here at the PDS, we care a lot about file formats. [JPEGs are fickle]({% post_url 2022-05-16-why-cant-i-archive-jpg %}). [TIFFs can get messy]({% post_url 2022-09-20-archiving-tiff %}). Now, you wanna bring me some 2D Fixed Width Tables or FITS Binary Tables with Backplanes? _Yeah_, that's the stuff.

Fine. fine. I know what you really want... 

## Browse Products: for humans by humans

Let me introduce you to Browse Products. These are a type of product often archived alongside the more complex, standards-compliant uncompressed files that are useful for _science_. Browse Products are, as the name suggests, meant for humans browsing the archive to find what they want, while dealing with more familiar file formats. You know the stuff:
* JPG
* JPEG 2000!
* PNG
* TIFF
* PDF (doesn't even have to be [PDF/A]({% post_url 2021-09-7-pdfa %})!!)
* M4A/AAC
* WAV
* And yes, even GIF

![Look at this graph](https://pdsregistryimages.psi.edu/tips/browse-products/graph.gif)

Of course, if you _want_ to provide your Browse Products as fully-documented `Array_2D_Image`s, you're also welcome to do that.

## More than meets the eye

Browse Products are used widely in PDS tools to assist in selecting just the observations you're interested in. Baked inside their PDS4 labels, we make use of internal LIDVID[^lidvid] references to get the Browse Products point to their relevant Observational Product, and vice-versa. So, from every Browse Product, you can get to the raw data right away. Not every product has a Browse Product, but every Browse Product should have an observational one. And if an Observational Product doesn't have a Browse Product, we (or you!) can always add them later. Browse Products are meant to be more of a modern convenience tool, and so we also want to make sure that they are always useful if certain browse formats go out of fashion.

This is useful for a lot more than just file _conversions_ though. Say you archive a table and want to quickly be able to show a plot of that data. Hey guess what, just make the graph a Browse Product. Got some spectra and just want to show all those pretty colors off? Do it! We dare you!

![Some nifty Browse Products in OPUS](https://pdsregistryimages.psi.edu/tips/browse-products/browse.png)

## More to come

As always, I end with a promise of better things in the future. Because Browse Products are integrated into the PDS4 model, and everything is connected by a registry of identifiers, they will eventually become the default way of browsing the entire archive. As more and more PDS4-aware tools come online, it will become easier and easier to find what you want. Browse Products are a big piece of making the PDS more accessible, and if you archive with us we will encourage you to provide them to help out future weirdos.

---

[^lidvid]: The identifier unique to PDS4 that indicates the bundle, collection, product name, and version of a product that's archived with us. [Read more here]({% post_url 2021-09-24-LIDs-and-LIDVIDs %}).
