---
layout: social
title: What are good tools for reading XML?
category: Tech Tips
author: Mike Drum
---

Most files in our archive, and the bundles and collections that they are grouped into, are tagged with an XML[^xml] file called a PDS4 Label[^pds3]. These files will contain information about how to read the data file, where it came from, identify any related products, and include a bunch more metadata from the data provider. So, you'll definitely want to be able to read them. This piece will go over some options for doing so, depending on your needs and comfort level with XML.

## 'I don't know what XML is and I don't care to'

If this is you, you may want to start with the [PDS4 Viewer](https://sbnwiki.astro.umd.edu/wiki/PDS4_Viewer). This tool can read and understand labels and present them in a more visually-palatable way, as well as offer extra features for certain data types like images and tables.

![Label view from PDS4 Viewer](https://pdsregistryimages.psi.edu/tips/xml-reader/pds4-viewer-summary.png)

![Plot view from PDS4 Viewer](https://pdsregistryimages.psi.edu/tips/xml-reader/pds4-viewer-plot.png)

## 'Give me something simple'

If you're just looking at one label at a time, just use your browser! Most modern PC/Mac browsers will be able to open and display the contents of an XML file, and give you basic features like highlighting the file syntax and allowing sections to be collapsed for free. If you're already browsing the data on the web, just clicking one of the labels will display its contents in this format. You can also just open up an .xml file with the browser directly.

![XML view inside Chrome and Safari](https://pdsregistryimages.psi.edu/tips/xml-reader/browser.png)

Another good option is just to use an online viewer/converter, like [this one from CodeBeautify](https://codebeautify.org/xmlviewer). These will usually give you even better readability and navigation, to help you quickly see what's inside a label.

![XML Tree View from CodeBeautify](https://pdsregistryimages.psi.edu/tips/xml-reader/converter.png)

## 'Give me something powerful'

One reason to favor this option is that, since XML is a schema-based language, there are rules and definitions behind every element in an XML document. The tools specifically meant to handle XML will be 'schema-aware', and (with some configuration) will allow you to pull in that information so you can see technical definitions. This is also the tier you'll need to be in if you want to start _writing_ labels as a data provider.

There are several free code editors that have extensions to handle XML. [Eclipse](https://www.eclipse.org/downloads/) is the classic option, but it has some known bugs dealing with XML and is just generally a bit bloated, so it's not our recommended option. The new hotness is [Visual Studio Code](https://code.visualstudio.com/), which will know how to look at XML files out of the box but has an entire marketplace of [customized](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml)  [extensions](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml) that will help you work with it.

![An XML file inside Visual Studio Code](https://pdsregistryimages.psi.edu/tips/xml-reader/vscode.png)

If none of that suits you, you may need to break out the wallet. 

The power tool everyone talks about is [Oxygen](https://www.oxygenxml.com/), and it's definitely the only XML editor you'd ever need. It's also pretty expensive, and it also definitely has more features than you'll ever need. Still, if you know people that also use it that might be a good reason to give it a shot. For Mac users, a new up-and-comer is [Xmplify](http://xmplifyapp.com/). This one is going places.

## 'I know what I'm doing and I just want to process a bunch of labels'

Alrighty then. You may want to just go with some software packages that can interface with XML. Python has a great package called [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) which offers convenient ways of getting data _out_ of XML labels as part of a script. If you're already in that world, that's the thing to use.

For the true command-line commandos, of course, you may just be comfortable with `grep` or `sed`. There are more specialized unix tools though, like [XMLSH](http://www.xmlsh.org/HomePage) or [xmllint](http://xmlsoft.org/xmllint.html). One concept that is helpful to be aware of with these is [XPath](https://www.w3schools.com/xml/xpath_intro.asp) -- a query language for XML. It's pretty simple, and will allow you to specify which elements you want to extract data from.

---

The PDS is often working on new tools to use data. We will soon have a searchable registry that will allow you to skip the downloaded files step entirely and start querying the labels directly. Several search tools also achieve similar results for specific types of data, like [Ferret](https://sbn.psi.edu/pds/ferret/). If you've got a problem you're trying to solve and these tools aren't cutting it, please [drop us a line](https://sbn.psi.edu/pds/contact.html).


[^xml]: [eXtensible Markup Language](https://en.wikipedia.org/wiki/XML) - A powerful structured text file format that allows us to define schemas for writing and interpreting its contents

[^pds3]: The exception is PDS3 data, which has its own label format. Eventually these files will be migrated to PDS4, but if you need to learn more about PDS3 labels start with the documentation [here](https://pds.nasa.gov/datastandards/pds3/).