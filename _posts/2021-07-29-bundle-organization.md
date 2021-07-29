---
layout: social
title: How is a PDS 4 Bundle Organized?
category: PDS4
author: Jesse Stone
---

## Introduction

Congratulations, you have found a PDS4 bundle, downloaded it, and now you are ready to do some science! Now, you may be wondering what exactly is in a bundle, and how the contents of a bundle are organized. The general organization of a bundle is pretty straightforward, and once you are familiar with it, you should be able to find what you need. Let's take a look. 

## What are bundles?

![Each instrument for this mission has its own bundle](images/social/BundleOrganization.instruments.png)

Bundles are the broadest level of organization within the PDS. They contain groups of data that are somehow related, and should appear together. A common way bundles are used within the PDS is to have all of the observations for a mission instrument appear in a single bundle. This means that there will be multiple bundles for each mission. There will also often be a bundle for the mission itself, that doesn't contain any data, but contains mission-wide documentation.


## Top Level - Bundles

![The top level of a bundle](images/social/BundleOrganization.top.png)


At the top of each bundle, you will always find a bundle label, with a file name of `bundle_X.xml`. This is a machine-readable version of the primary information about the bundle. Unfortunately, there is no specific human readable version, so you will need to open up this file if you want to view information about the bundle. If you are lucky, there will be a readme file in the top-level directory. This will be a human readable file.

In addition to the bundle label and readme file, you will see a number of subdirectories. These are *collections*, and contain the actual information that we want.

## About Collections

![A collection inventory. Collections maintain a list of their constituent products.](images/social/BundleOrganization.inventory.png)


Collections are groupings of related PDS4 products. Inside of a collection is a *collection label* which contains information about the collection, and a *collection inventory*, which is a list of all of the products that are contained in a collection. Sometimes, this collection inventory will contain references to other produtcs (ususally documents), that are from another bundle. This generally happens with documents that are specific to an entire mission.

### Organization within Collections

![Collections may be broken out into subdirectories](images/social/BundleOrganization.subdirectories.png)


Collections may be informally organized by putting the products in subdirectories. These subdirectories will usually correspond to something like a mission phase, or observation date. However, a product will always appear in the same directory as its label.

## Specific Collections

Documents will generally all appear together in a dedicated *document collection*, while the actual data might be organized into *data collections*, and human-readable browse products will appear in a *browse collection*.

### Document Collection

![A document collection](images/social/BundleOrganization.document.png)


Documents related to the data will appear in the document collection. All of the files in the document collection will be either plain-text files or PDFs.

### Data Collection

![A simple data collection](images/social/BundleOrganization.data.png)


Data products may be organized into multiple collections, depending on how many data products there are, and if there is a sensible way to organize the products. For instance, many bundles have a data collection for each processing level. Other bundles might have a collection for each mission phase or type of observation.

### Browse Collection

![Part of a browse collection](images/social/BundleOrganization.browse.png)


The browse collection contains human readable versions of the data. These are generally intended to help users interpret and understand the data, as well as find specific products. While they are a helpful navigational aid, they are not a substitute for the data themselves, and shouldn't be used for analysis or any science.

### System Collections

![Some bundles have system collections. Don't worry about these](images/social/BundleOrganization.system.png)


PDS4 also has several system collections. These contain data products necessary for the PDS to correctly catalog the bundle, and for the bundle to be complete, in case users are unable to access the rest of the PDS for some reason. Generally, you will not need to do anything with these files, but this will help you recognize them, and understand what they are.

#### Context Collection

![The context collection. This describes the tools used to make the observations, along with the observation targets](images/social/BundleOrganization.context.png)


The context collections contains information about the spacecraft, observatories, telescopes, and instruments that were used to collect the data. It also contains very basic information about the objects that were observed.

#### Schema Collections

![The xml_schema collection. This describes the structure of PDS4 labels in a machine-friendly way](images/social/BundleOrganization.schema.png)

The schema collection contains information about the structure of the labels themselves. This documents where elements and attributes appear in the label, along with an explanation of what each attribute means. This is most useful for software that wants to interpret the labels. Generally, people are not expected to read these files.

## Conclusion

Bundles encompass related data, and usually contain all of the information for a single instrument. They are then broken down further by type of data (browse, data, documents), and may be subdivided further as needed. Bundles and collections are both described by labels, which provide software an easy way to read their infomation. There are also collections that are designed to help with the PDS as a system, and generally are not needed to process the data.

Now that you understand the basics of bundle layout, you should be able to find and process the data that you need.