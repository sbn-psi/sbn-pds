---
layout: social
title: "What is FITS?"
category: PDS4
author: Kristina Lopez
---

“A picture is worth a thousand words.” We’ve all heard it countless times. 

In the world of astronomy the adage should be “A picture needs a thousand words”. That is because in order to be able to understand and use an astronomical photo you need to have all the meta-data that comes along with it. 

<span style="font-size:.9em;"> Spacecraft position, instrument temperature,</span> <span style="font-size:.8em;"> start time, stop time, pixel scale, <span style="font-size:.7em;"> right ascension, declination, coordinate system,</span> <span style="font-size:.6em;"> phase angle, target name, </span><span style="font-size:.5em;"> filter name, sun position,</span> <span style="font-size:.4em;"> processing level, incidence angle …. </span>Its enough to make your head spin! 

Not to mention data is often more complicated when images contain multiple layers of overlaid information such as backplanes.

How on earth could we possibly manage all this information?! 

Astronomers realized something needed to be done. Not only did all this metadata need to be standardized in order to transfer it from one institution to another but it also needed to be stored in a way that the data could be used far into the future.

Thankfully the Flexible Image Transport System (FITS) data format was created to solve all these problems! 

### What is FITS?

(FITS) is an open standard defining a digital file format useful for storage, transmission and processing of data that was created specifically for astronomical data. FITS files can be easily identified in a dataset as the file name will always end with “.fits”. FITS format is mostly used for image but can also be used for other data types such as structured data, spectra and data cubes.

### What does it do with all the meta-data?   

At the beginning of each FITS file there is a human-readable ASCII header. Think of the header as the “Heres what you need to know” introduction to the data file. The header can be organized into multiple blocks (Space craft data, geometry data, coordinates, etc). Each block contains keywords which provide the crucial metadata. An example of a key word and its value could be “Target_Type: = Asteroid.” Which tells us the target of this photo was an asteroid. In more complex data which contains things such as backplanes, there can be multiple headers. 

Headers provide a quick and easy way to parse and read through the large amounts of meta-data that come with an image! Saving people a lot of time and effort.  

![An example of a FITS header](https://pdsregistryimages.psi.edu/tips/What-is-FITS/header.png)

### We love FITS here at the PDS! 

Not only do we love FITS format because it was designed for astronomical data but it was also designed to be optimal for long term archival storage. Although FITS format standards have been update over the years, FITS format must also be backwards compatible. Ensuring the data can be used for years to come. Once fits, always FITS!

### Mapping FITS to PDS4 


Here at PDS SBN we can use the metadata in a FITS file and map them onto a PDS4 label. By doing this we can created a standardized and searchable file, helping both data users and providers of our archive. While mapping FITS headers into PDS4 labels non standardized keywords will be added to a new data dictionary to meet PDS4 standards. 


FITS labels the image by using keywords that are baked into the file itself. That's why FITS is Flexible, it allows so much metadata to be included in the same file format. In PDS4, we take those types of keywords out and put them in a separate label on its own. That's why we ask for the FITS keywords to be "mapped" to the Product Information Keywords in OLAF, which themselves turn into PDS4 attributes. Because FITS is so Flexible, some of the keywords are non-standard and differ between researchers.

We have this mapping process in order to fix this disparity, and allow a large group of files to be externally labeled without rewriting all of the keyword values over again. If you have other keywords in your image that you think we should include in the external PDS label, you can also work with us to get those mapped into a special project dictionary; we can help you get them mapped into there as well, or import them from a table during the FITS mapping step.