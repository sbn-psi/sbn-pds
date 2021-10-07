---
layout: social
title: What is SPICE and why do we care?
category: Using Data
author: Eric Palmer
---

Does the idea of translating the pixel/line location on an image into a latitude/longitude hurt your brain?  It can be especially difficult to dig out the information about where the spacecraft and asteroid were and what their orientations were when the picture was taken.

One of the more tricky aspects of asteroid operations is keeping track of coordinate frames:  You could work in inertial, galactic, ecliptic, equatorial, J2000, body-fixed frame, spacecraft frame, topocentric frame and even the image's frame.  If you've had to deal with flight missions, you've surely seen that every system has a specific frame that is native to itself.  Thus, if you want to find out where something was or where it was looking at a specific time, you have to do multiple frame/coordinate transformations, which is an outstanding activity to do while you are waiting for a root canal.  

If every space mission needs to do an excessive number of frame translations, you would hope that someone would have done something to make this easier -- they have!


## SPICE

[SPICE](https://naif.jpl.nasa.gov/naif/) is what most NASA and international planetary missions use to compute navigation and observation geometry parameters needed to process science data and support mission operations.  It was developed at the Jet Propulsion Laboratory (JPL) by the Navigation and Ancillary Information Facility (NAIF) team.  SPICE is an acronym that stands for Spacecraft, Planet, Instrument, C-matrix (or Camera Matrix) and Events.  


## How it works

Flight missions store information about the position and orientation of the spacecraft, indexed by time, in data files called SPICE kernels. NAIF provides additional multi-mission kernels with position, orientation, and shape/size data for the solar system bodies. Once you have a complete set of these kernels, you can use them in software that calls the SPICE library APIs to calculate nearly any observation geometry parameters you want.  

For scientists, we typically use them to see where on the surface an image or measurement was taken.  Obviously, this requires that we know where the spacecraft was, where the asteroid was, where the spacecraft was pointing, what orientation the camera was to the spacecraft and when the image was taken.

The kernels that contain these main types of information are:
* The position of the planets and other natural bodies -- SP-kernel (SPK)
* The orientation of the planets  and other natural bodies -- PC-kernel (PCK)
* The position of the spacecraft -- SP-kernel (SPK)
* The orientation of the spacecraft and any articulating structures -- C-kernel (CK)
* The geometric parameters of the instruments -- Instrument-kernel (IK)
* The definitions of the instrument and spacecraft reference frames -- Frames-kernel (FK)
* The correlation of the on-board time to UTC -- Spacecraft Clock-kernel (SCLK)
* The leapseconds needed for conversion between UTC and Ephemeris Time -- Leapsecond-kernel (LSK)
* The digital shape data for natural bodies -- Digital Shape-kernel (DSK) or Planetary Constants Kernel (PCK)

Kernels may be text or binary files, and have different extensions depending on their types:

| Information Type | Kernel | Text | Binary |
| --- | --- | --- | --- |
| Position of spacecraft or natural object | SPK | --- | .bsp |
| Spacecraft or platform orientation | CK | --- | .bc |
| Instrument parameters | IK | .ti | --- |
| Reference frame defintions | FK | .tf | --- |
| Planetary Constants | PCK | .tpc | --- |
| High Precision Planetary Orientation | PCK | --- | .bpc |
| Leapseconds | LSK | .tls | --- |
| Spacecraft Clock Correlation | SCLK | .tsc | --- |
| Digital Shape models | DSK | --- | .bds |
| Metakernel aggregating sets of kernels | MK | .tm | --- |

## What else is it

SPICE is more than just kernel files containing information needed to calculate navigation and observation geometry. As already mentioned it also includes a set of software tools and libraries.  Most of the tools are provided just to help manage the kernels, while the biggest component of SPICE is the library containing a large selection of APIs that can be used within user-built programs to do all of the needed geometry calculations.  Thus, if you are a programmer and want to calculate the resolution of a pixel on the surface or the coordinates of the sub-solar point when a specific image was taken, you can use the appropriate SPICE library APIs and sets of SPICE kernels.  The SPICE software library developed by NAIF is available in a variety of languages:
* FORTRAN 77
* C
* IDL
* MATLAB
* Java Native Interface (JNI)

Third parties have built a few additional interfaces to SPICE libraries in
* Python (SpiceyPy)
* Ruby
* Julia

## Getting training and help

The NAIF group has provided a significant amount of documentation about SPICE.  

* They have made an entire suite of on-line [training tutorials](https://naif.jpl.nasa.gov/naif/tutorials.html]) and [Self Training](https://naif.jpl.nasa.gov/naif/self_training.html) directions.
* Every function call that SPICE supports has a complete documentation that describes its use and provides examples.  [Documentation](https://naif.jpl.nasa.gov/naif/documentation.html)
* NAIF hosts in person [training classes](https://naif.jpl.nasa.gov/naif/training.html)
* There are hands-on [programming lessons](https://naif.jpl.nasa.gov/naif/lessons.html) presenting detailed SPICE-based solutions for a few common observation geometry cases.
* If you can't write your own code, you can use NAIF's a web tool that let's you do calculations using the wealth of SPICE data available on the NAIF server [WebGeocalc](https://naif.jpl.nasa.gov/naif/webgeocalc.html)
* NAIF also provides a tool to visualize space mission and Solar system based on SPICE data [Cosmographia](https://naif.jpl.nasa.gov/naif/cosmographia.html)

## The Data

Finally, NAIF carefully selects, validates, documents and [archives](https://naif.jpl.nasa.gov/naif/data_archived.html) the SPICE kernels for the missions flown by NASA.  Note, the number and size of the SPICE files can get very large by the end of a mission.

## Free

All of the data and tools generated by NAIF are free and in the public domain.  Anyone can use them for whatever purposes they desire.  

## Enduring

All of the SPICE software and data files (kernels) are fully backwards compatible; you need not worry about old SPICE data files or software continuing to work into the future.

## Thank Goodness for SPICE

Hopefully if you have read this far you now understand why we at the PDS are grateful for the SPICE information system. SPICE has turned the tedious and long task of computing observation geometry into a reusable and highly accurate process. Furthermore for those who are new to working with SPICE, NAIF has provided a plethora of training and help options to make learning and using the data as painless as possible. SPICE is an essential part of the archiving database here at SBN PDS and we know it will make using archived data easier for years to come.
