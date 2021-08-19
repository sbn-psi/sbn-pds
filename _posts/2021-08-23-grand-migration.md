---
layout: social
title: What Changed in the Migration of Dawn GRaND to PDS4?
category: New Data
author: Carol Neese
---

## Introduction

The Gamma Ray and Neutron Detector (GRaND) is a nuclear spectrometer which flew on the Dawn mission to the two largest bodies in the main asteroid belt, asteroid Vesta and dwarf planet Ceres.  There it measured gamma rays and neutrons resulting from galactic cosmic ray interactions and the decay of radioactive elements within the regolith of the target bodies, providing chemical insights into their formation and evolution.  As well as its primary mission targets, GRaND observed cosmic rays, solar flare X-rays, solar energetic particles, and gamma-ray bursts from massive explosions in distant galaxies.  

![GRaND measures the chemical fingerprint of elements up to 1 meter below the surface by detecting neutrons and gamma rays produced by the interaction of galactic cosmic rays with nuclei within the surface, and by radioactive decay (Prettyman et al., 2019b,c)](https://pdsregistryimages.psi.edu/tips/grand-migration/GRaND_Fig_1.png)

The GRaND data, along with the data from the other Dawn mission instruments, were originally archived in the NASA PDS Small Bodies Node (SBN) in a now-obsolete archiving standard called PDS3.  In 2021, SBN and the GRaND team worked together to migrate the GRaND archive to the modern PDS archiving standard PDS4.  To enable users to make the most of the rich GRaND data set, the powerful capabilities of the PDS4 standard were utilized to enhance the value of the data set.

## Overview of Changes

In migrating the GRaND archive from PDS3 to PDS4, no changes were made to the data files themselves.  The metadata were enhanced and the documentation extensively updated and improved.  A key feature of PDS4 is the use of open-standard eXtensible Markup Language (XML), which provides more flexible and descriptive labelling of data files, enabling advances in software and database capabilities to be leveraged.  Taking advantage of these PDS4 capabilities, new software tools were developed by the Dawn mission's GRaND team for easy access and processing of GRaND data. 

## Improved Metadata

The GRaND PDS4 archive makes use of the nuclear spectroscopy data dictionary (NucSpec), developed by the PDS Small Bodies Node with input from the planetary community.  NucSpec provides metadata associating specific observations with instrument settings and parameters, enabling efficient identification of records for analysis.  The instrument settings are provided in a newly added GRaND instrument state table, including the configuration of subsystems, photomultiplier tube high voltages, and counting window parameters.  

In addition, metadata are provided to identify solar energetic particles (SEPs), solar flares, gamma-ray bursts (GRBs) and other phenomena of interest to the space and astrophysics communities.  Data glitches and anomalies are also flagged.

## New Tools

In conjunction with the migration, the GRaND team developed software tools to work with the GRaND data set using the enriched PDS4 metadata.  The software, written in the Interactive Data Language (IDL), reads the data and parses the data labels, extracting metadata useful for analysis including mission phase and target information, instrument settings, and observing conditions.  This GRaND Software Toolbox is available on NASA GitHub.

In addition to the tools specific to the GRaND archive, the PDS offers the more general PDS4 Viewer which can be used to read and plot PDS4 data and examine the labels in a human-readable format.

## Updated Documentation

The GRaND documentation set has been generally revised and updated to incorporate the information and understanding gained from working with the data set in the years since it was originally archived.  A new Archive Description document was prepared as a detailed guide to understanding and working with the GRaND archive.

# The GRaND Archive, Now New and Improved

The GRaND data migration allowed for improvements to be made in many aspects of the archive. Not only were there enhancements in meta data, documentation, and new tools, but the use of the new more powerful PDS4 data standards have combined to make the archive an easy to use and rich source of data. 

## Resources and Further Reading

[The Dawn GRaND PDS4 Archive at the Planetary Data System](https://arcnav.psi.edu/urn:nasa:pds:context:instrument:dawn.grand)

[The GRaND PDS4 Archive Description](https://sbnarchive.psi.edu/pds4/dawn/grand/dawn-grand-ancillary_1.0/document/Dawn_GRaND_archive_description.pdf)

[The GRaND Software Toolbox at NASA GitHub](https://github.com/nasa/dawn-grand-toolbox)

[PDS4 Viewer](https://sbnwiki.astro.umd.edu/wiki/PDS4_Viewer)

[AGU 2020 Poster about the GRaND PDS4 Archive](https://pdsregistryimages.psi.edu/tips/grand-migration/GRaND_migration_AGU_Poster.pdf) (Prettyman et al. 2020)

## References

Prettyman T.H., Englert P.A.J., Yamashita N. & Landis M.E. (2019b) Neutron, gamma-ray, and X-ray spectroscopy of planetary bodies. Pp. 588-603 in: Remote Compositional Analysis (J.L. Bishop, J.F. Bell & J.E. Moersch, eds). Cambridge University Press, Cambridge. 

Prettyman T.H., Englert P.A.J. & Yamashita N. (2019c) Neutron, gamma-ray, and X-ray spectroscopy: Theory and applications. Pp. 191-238 in: Remote Compositional Analysis (J.L. Bishop, J.F. Bell & J.E. Moersch, eds). Cambridge University Press, Cambridge. 

Prettyman, T.H., Yamashita, N., Stone, J., Neese, C., Palmer, E.E. (2020). The GRaND migration project: State-of-the-art archive and tools for space science.  AGU Fall Meeting Abstracts.


