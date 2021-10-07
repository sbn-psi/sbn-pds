---
layout: social
title: LIDs And LIDVIDs
category: PDS4
---

Have you ever wondered how the PDS tracks and organizes all of the data in the archive?  No?  Well, we have.  In the past, each dataset was tracked by each node and by its title.  However, that didn't allow for focused searching and easily finding data -- thus, we updated our organization system when we created PDS4.


### Introduction

One of the great advantages of the PDS4 archiving standard is that every data product has a unique identifier called a **LID** (Logical Identifier) which makes it possible for everything in the PDS archive to be securely referenced.  The LID is a well-defined character string unique to each product.  Each PDS4 product also has a **VID**, or Version ID, to identify the specific version. The nuts and bolts of PDS4 provide structures to make different types of references between products with different kinds of relationships. The LIDs and VIDs are also used behind the scenes to support search so PDS can serve the desired data to users. Finally, the **LIDVID** (combined LID and VID) of a product provides a permanent identifier which will securely reference a specific version of a specific product over the lifetime of the PDS archive, perhaps hundreds of years.

### Who Needs to Know About LIDs and Why?

Many **data users** may be able to get by without knowing much about LIDs and their structures, but knowing how to use them can be a real help.  For example, the label of a calibrated data file will likely contain a internal LID references to the raw file it's based on and the calibration files used to calibrate it.  The user should be able to figure out how to map raw products onto calibrated products from the archive documentation, but being able to access this information directly could be very useful, and having the information available for computer code could be even more useful.  In another example, data products can refer by LID to relevant documents.  Knowing how to parse the LID reference can make it easier to find the relevant products and documents.

**Individual data providers using OLAF** (On-Line Archiving Facility) don't need to know about the LIDs because OLAF assigns them and implements them in all the products.  


**Data Providers**, however, can gain significant benefit to understanding how to use the LIDs and how they apply to your own data set.

### No Two are Alike - Namespaces Ensure Uniqueness

For the LID system to work, each LID must be unique across the entire universe of LIDs (which goes well beyond PDS).  This ensures that a reference by LID always refers to a single well-identified product.  Uniqueness is achieved by means of **namespaces**.  To understand how this works, let's look a little closer at the structure of a LID.

A LID is a string separated into substrings by colons.  Here's an example LID:

>**urn:nasa:pds:orex.ola**

The alert reader will have spotted that the substrings are separated by colons except the last one, which uses a period.  This is not a typo, read on...

The first substring, **urn**, is "universal resource name" and just specifies that this string is a LID.  The second substring, **nasa**, specifies that this LID belongs to NASA.  Since all NASA LIDs start with **urn:nasa**, they only have to be unique within NASA and don't have to worry about LIDs assigned by other entities.  

The next substring is **pds**, specifying that the LID is for a product archived at the Planetary Data System (PDS).  LIDs starting with **urn:nasa:pds** only have to be unique within the PDS archive and don't have to worry about conflicting with LIDs in other NASA archives.

This particular LID is for the archive bundle containing all the data from the OLA instrument on the **OSIRIS-REx** mission to the asteroid Bennu.  (OLA = OSIRIS-REx Laser Altimeter).   The OSIRIS-REx mission was assigned the namespace **orex**, so they can prefix the bundle substring for all their archive bundles with **orex**.  OSIRIS-REx adding their mission namespace with an abbreviation for the instrument, separated by a period: **orex.ola**.  The full LID, **urn:nasa:pds:orex.ola**, references the archive bundle containing all the raw and calibrated data from the OLA instrument on the OSIRIS-REx mission.  The OLA team doesn't have to worry about LID conflicts with any other archive bundles, even within their own mission.

This process is continued with additional substrings down to the level of individual data files and documents.  To understand how this works you need to know a little about how PDS archives are structured.

### PDS Archive Structure and LIDs

A typical archive package is a bundle -- a group of related products.  The bundle id typically follows the format described above <mission>.<instrument>.

>**Bundle**:  urn:nasa:pds:[bundle_id]


Within each bundle is one or more subgroups, which we call collections.  All of the data products (the actual files themselves) will be put into collections.  What is organized into the collections rather than being made in to a separate bundle has been left somewhat flexible, but as a general rule, a bundle is a single instrument while collections are the next most logical subgrouping (such as documents, raw, calibrated, etc.)

>**Collection**:  urn:nasa:pds:[bundle_id]:[collection_id]

Finally, tacked on to the end of all of that is the product name.  Every data and document file has its own LID so that it can be referenced.  Also, a product LID provides enough information to find the exact bundle and collection it came from, allowing better provenance. 


>**Basic Product**:  urn:nasa:pds:[bundle_id]:[collection_id]:[product_id]

An example:  the calibrated data collection in the OLA bundle has the LID **urn:nasa:pds:orex.ola:data_calibrated**, and a single OLA calibrated data file has the LID **urn:nasa:pds:orex.ola:data_calibrated:20190701_ola_scil2id04000_v003_calv2.dat**. 

The [product_id] is based on the filename of the data or document file, which in this case is 20190701_ola_scil2id04000_V003_calv2.dat.  The [product_id] may vary slightly from the filename because of the LID character restrictions, and may or may not include the path or the extension.

### VIDs and LIDVIDS

The **VID** or Version ID is a number starting at 1.0 and incremented by a whole number whenever significant changes are made to the data (such as recalibration or adding more data).  The VID is incremented by a tenth when minor changes are made.

The VID can be appended to the LID with a double colon to make the **LIDVID**.  Here's the LIDVID of the most recent version of the OSIRIS-REx OLA calibrated collection:  **urn:nasa:pds:orex.ola:data_calibrated::3.0**.  Its VID has been incremented each time new data from Bennu is delivered into the collection, three times now.

You use the LIDVID when you want the exact file (or collection or bundle) that was cited.  You can use only the LID itself if you want whatever is most recent.  For example, if someone writes a paper and sites the LIDVID for an OLAF collection, you can access the exact files that was used in that paper by referencing **urn:nasa:pds:orex.ola:data_calibrated::2.0**, something useful for reproducing scientific results.  On the other hand, you might want the best and most recent OLA data, in which you'd use the LID itself, **urn:nasa:pds:orex.ola:data_calibrated**, in which you'd get version 3 (for example) that would have more data and maybe better metadata or calibration.

### Conclusion and References

You've now learned enough about LIDs and VIDs for basic understanding, and enough to know whether you need to know more for your purposes.  To learn more about LIDs and VIDs and how to use them, here are some references:

[The PDS4 Data Provider's Handbook](https://pds.nasa.gov/datastandards/documents/dph/current/PDS4_DataProvidersHandbook_1.16.0.pdf) chapter 5.

[PDS4 Concepts](https://pds.nasa.gov/datastandards/documents/concepts/Concepts_1.16.0.pdf) chapter 8.

[PDS4 Documentation Page](https://pds.nasa.gov/datastandards/documents/) with links to all the PDS4 documentation.