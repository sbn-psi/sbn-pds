---
layout: social
title: "Can I archive a TIFF?"
category: Archiving Tips
author: Mike Drum
---

TIFF. It's all the rage these days. All my friends are doing it. Can you?

As with a lot of things in PDS: it's complicated. That's why it's getting a whole blog post. TIFF comes in many shapes and sizes, and we're here to nail down some specifics for you. Unlike [my last post about JPEGs]({% post_url 2022-04-18-archive-a-jpeg %}) though, there's some good news here. Spoiler: **You can archive *most* TIFF images, but not all of them**.

## Here's the easy part
If you just want to provide some supplementary images in your bundle (in other words, the TIFF images are not your primary observations), the answer is almost certainly, yes, you can archive them. TIFF 6.0 images may be submitted as Documents [^Cavate] or Browse Products[^browse], because those have a lot more flexibility when it comes to permitted formats. To be clear: if you're submitting an image as a Document, it must actual documentation, not the actual scientific result. This isn't a cheat code! 

## Under pressure

Now let's discuss submitting your data as a TIFF image.

TIFF 6.0 was designed with a lot of capability.  It includes compression as well as the ability to store both image data and text in the same file.  The key consideration is that for long-term scientific archiving, the PDS requires every single part of a data file to be fully described in ways that won't get lost to time. 

As a result, some of the features that TIFF supports cannot be accepted in the PDS.  ***For example [no compression]({% post_url 2022-04-18-archive-a-jpeg %})**. "Baseline" TIFF itself allows for a few different compression formats, so those must be disabled to make the compatible for the PDS.


While some aspects of TIFF images are not compatible with archiving, pretty much any TIFF can be **converted** so that it can be archived


In the end, you're still going to be working with the primary building blocks to describe the images: [`Array_3D_Image`](https://pds.jpl.nasa.gov/datastandards/documents/im/current/index_1I00.html#9.4%C2%A0%C2%A0class_pds_array_3d_image), for RGB or multi-band spectral, or [`Array_2D_Image`](https://pds.jpl.nasa.gov/datastandards/documents/im/current/index_1I00.html#9.4%C2%A0%C2%A0class_pds_array_3d_image) for greyscale mosaic. This structure will be used to define the image's byte offsets, axis sizes, and data types of each byte of the uncompressed image. That means that if it can't be described with those, you can't archive it.

You may archive TIFFs with multiple subfiles, but each must be described by an Image File Directory (IFD), and crucially must also be described individually by its own `Array_*D_Image` and `Header` descriptions.

## GeoTIFF - still complicated

GeoTIFF is an open source format that includes geospatial information alongside the image data inside the TIFF file.  GeoTIFFs store the location of the image so that it can be projected using programs such as ArcGIS. Like baseline TIFF, **the same restrictions apply**, but if you're working with this type of data, it can likely be archived as a GeoTIFF! That way, the original tags can be preserved as part of the archive. In fact, we think it's a great idea to do so, since it will retain compatibility with many tools currently used by the community. 


If you want to make GeoTIFFs for archiving, [GDAL](https://gdal.org/), an open-source translator library for geospatial data, [is able to produce PDS4 labels](https://gdal.org/drivers/raster/pds4.html) and check their compliance.

---

[^browse]: Supplemental versions of products that are in more modern, human-friendly formats to make it more readable. These are always submitted as additional copies of the uncompressed, standards-compliant versions of images. We'll have another post about this soon.



[^Cavate]: To have actual TIFF images in the Document collections, they must also be in a PDF document.  We'll help get that set up for you if that is what you want to do.