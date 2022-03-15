---
layout: social
title: "OLAF Data Types"
category: Tool Help
---

## What is OLAF?

If you have data that you need to submit to the Planetary Data System (PDS), OLAF might be able to help. The On-Line Archive Facility, OLAF for short, is a web application that helps data providers submit their data to the PDS for archiving without having to learn all the tedious details of the PDS4 archive standard. Submitted data is reviewed for accuracy and completeness and is given a citation once it is accepted.

## What types of data does OLAF support?

OLAF provides support for the data types that are most commonly submitted to the PDS, which includes different types of tables, images, and documents. 

### Tables

#### Delimited (CSV)

Comma-Separated Values (CSV) is a simple file format used to store tabular data, such as in a spreadsheet or database. Files in the CSV format (usually with the extension .csv) can be imported to and exported from programs that store data in tables. The data fields are most often separated by a comma.

#### Fixed-Width

Fixed-width tables are a simple file format used to store data in rows and columns. Each column or data field in a fixed-width table has the exact same width in each row, regardless of the data in each row. When you view the data in a fixed-width table, all the Column1 data will line up, all the Column2 data will line up, and so on.

#### Binary

Binary tables are a simple file format used to store binary data.

#### Multipart (Complex)

Multipart tables, also known as complex tables, are a common type of ASCII data table. A multipart table file is one or more ASCII tables combined into a single file and is a common format for shape model files.

### Images

#### FITS

Flexible Image Transport System (FITS) is an open standard developed by NASA defining a digital file format useful for storage, transmission and processing of data. FITS is the most commonly used digital file format in astronomy.

FITS files are formatted as N-dimensional arrays (for example, a 2D image) or as tables. The FITS standard also includes special (optional) features for scientific data. For example, it includes many provisions for describing photometric and spatial calibration information as well as image origin metadata. We refer to this section of the FITS file as the "header".

OLAF is also capable of supporting FITS image files with a backplanes section.

#### 2D Arrays

A generic 2D array image is an uncompressed image that consists of an optional header section in any format followed by a data section.

OLAF is also capable of supporting generic 2D array image files with a backplanes section.

### Documents

Documents are typically files that support or provide context to the data files. OLAF supports the following document file types:

- Plain Text (.txt or .asc)
- PDF/A (.pdf)

## What if my data type is not supported?

If you need support for a type of data that isn't listed, [let us know](mailto:olaf@psi.edu)! The OLAF development team continues to add support for new data types as needs arise. Your input could be the difference in what data types OLAF supports next.

## More than just submitting data

While understanding which data types OLAF supports is critical when deciding whether OLAF is the right tool for submitting your data, it's also important to recognize that OLAF provides a variety of useful features that will help you fully describe your data. The PDS4 information model thrives on rich metadata, so describing data as thoroughly as possible when it's being submitted is a crucial part of making the data discoverable and useful long into the future.

OLAF can help data providers make connections between their data and mission spacecraft and instruments, observatories, telescopes, and even references to existing publications.

## What if I don't want to use OLAF?

It's true, there are other software programs that can assist you in submitting data to the PDS. And while OLAF is a great way to prepare your data for archiving, it isn't always the best choice. Still, even in some cases where data providers choose not to use OLAF to submit their data, OLAF can still be a useful tool. For example, if a data provider is submitting a *very* large quantity of files, uploading them all to a web application might not make sense. In this case, though, the data provider might submit a single file to OLAF and generate a valid PDS4 label file that can be used as a template for the rest of the data files. This would make it easier to create a software pipeline that fills in the template label file for each data file programatically.
