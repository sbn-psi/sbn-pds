---
layout: social
title: "Why Can't I Archive a JPEG?"
category: Archiving Tips
author: Mike Drum
---

Look, we get it. PDS can probably seem kinda difficult sometimes. We have all these complicated requirements, we force people to change their data formats, and it's hard to see why. You've got all these images or PDFs, why can't we just take them and be happy?? How hard is it to just be a big dropbox for science?

Well, today we are going to just step back and briefly explain the method to our madness. And for the record, this article is not really specifically about JPG, but really all forms of data compression and why it's inappropriate for an archive.

## On Bits And Bytes

First, some boring but important fundamentals. You probably know computers use binary code to store and compute things. 1's and 0's and all that. Those are bits (and 8 of them is a byte). Well, every file on a computer is still just a series of bytes, and so they look like this:

![A bunch of bytes](https://pdsregistryimages.psi.edu/tips/archiving-jpeg/binary1.png)

A hard drive has a bunch of files, so it basically looks like this:

![Even more bytes](https://pdsregistryimages.psi.edu/tips/archiving-jpeg/binary2.png)

Fun stuff. 

The only way that a computer knows how to handle any of that is by assuming they are in a specific format, and reading it that way. ASCII is one such format, which translates each byte into a symbol or letter in the latin alphabet. Bytes can also be read as numbers, but there are even lots of different ways of doing that. Then when it comes to files, an example image format could assume that the first twenty bytes describes the name of the file, the next four bytes how wide an image is, the next four how long it is, and the remainder of the file has three 24-bit pixels describing their color values.[^simple]

If you do just a little bit of math, you can see that even the extremely simple, minimal example we laid out above would get out of hand pretty quickly. A random photo from my camera/phone is 3024 × 4032 pixels, which would make that format use over 100MB of data for just the color values. 

So anyway, one day humans invented compression.

## On JPEG and the fickleness of humanity

So JPEGs (and many other image formats) are a lot more complicated than they would seem because they do a lot of fancy tricks to fit more data into smaller files. Everything starts with a raw image in a format similar to that example above, but then an algorithm translates that to a much smaller format. This can happen *losslessly* (such that the compressed file can be fully restored to its original file) where patterens are identified, which is the key to compression.  Instead of repeating the same set of bits each time it appears, just include it once and then indicate where those bits should go.  This can typically cut an image file size in half.

However, to get really small files, other techniques will result in minor details being lost.  JPEG is a format that takes advantage of how human visual perception works where it finds patterns in photos and simplify certain blocks of an image down to those patterns. This removes unnoticeable (or barely noticeable) detail and replaces it with averages.


Thing is, it's a very complicated algorithm. It is also only efficient in specific scenarios, too. So we keep inventing new data formats. You probably know a lot of them:

* JPG
* TIFF
* GIF
* PNG
* FITS
* BMP

You probably also don't know about a lot of them:

* HEIF
* ICO
* Nrrd
* JPEG 2000
* JPEG XL
* JPEG XR
* PICT 
* PGM
* PPM

Data file formats come and go, because different manufactures have different goals for making images efficient. Each of the obscure formats I mentioned was made because it's *better* than all the others for some specific cases[^gif]. And we never know which format will win out in the end, and which one computers will be able to render in 50 years time.


The goal of the PDS is to have the data and its usability outlive all of us working on it, and that means that we can't adopt every file format out there (even uncompressed ones like BMP and some FITS). As much as possible, we want to describe every data file with our labels *down to the very byte*. This is why we ask for files to be described as arrays or tables most of the time. Those are algorithms that can be fully described in a label. 


So, in the end, there are two reasons we can't archive compressed data: 
1. Original observational data might be lost due to lossy compression
2. The actual compression algorithm itself would need to be archived

## Physics strikes back

Now, that all said, the future might hold some exceptions to this policy. Due to reasons of practicality, we are already starting to pull down observational data in compressed formats, because it turns out there's only one Deep Space Network right now. Transferring raw _video_ would simply be impossible at the current bitrates available to spacecraft, so we're currently in the process of figuring out how we're going to archive that data. These are the principles we're working with though, so rest assured that we intend to make it data both usable now and in the future. Somehow.

---

[^simple]: This is all a drastic simplification. File headers are a lot bigger and more complicated, but it's fine for this example.

[^gif]: GIFs are basically the worst file format out there, and yet we still use them because they can have animations built in and who doesn't like moving picture
