---
layout: social
title: How To Print A 3D Shape Model
category: Tool Help
---

Before COVID-19, back when conferences were in person, we made, gave out and even printed 3D shape models of asteroids and comets for our customers.  Many times, we've gotten the request to print models for a variety of reasons.  While this is outside of our charter, we are happy to let people know how to print there own.  Not only are their companies that will print things for you, many university libraries will print 3D objects.

## What is 3D printing?

3D printing, also known as additive manufacturing, is the process of making a 3-dimensional, physical object from a digital file. An object is created by laying down layer upon layer of material until the final object is complete. Each of these layers is a thinly-sliced cross-section of the object.

![image of rows of 67p on printbed](https://pdsregistryimages.psi.edu/tips/how-to-print-shape-models/67p_army.JPG)

The most common file type used for 3D printing is the G-code file. G-code files contain coordinate positions and other basic commands that tell the printer where to print and how to move, both horizontally and vertically. They also give the printer instructions for how to deliver the material, including what temperature the material should be and how thick each layer should be.

Layer thickness, also called layer height, is similar to pixel resolution on a digital display. Increasing the number of layers in a model will make each layer thinner, resulting in a higher “resolution” model with a better-looking result. On the other hand, more layers take longer to print and can lead to significant increases in print times.

## What materials are used for 3D printing?

The most widely used material used in 3D printing is PLA, or polylactic acid. PLA is a type of polymer with a comparably low melting point that is made from fermented plant starch. PLA is popular due to its ease-of-use, dimensional accuracy, and low cost.

Another common material is ABS, or acrylonitrile butadiene styrene. It was one of the first plastics to be used with industrial 3D printers. It boasts toughness and impact resistance that result in durable parts that will hold up to extra usage and wear. LEGO building blocks are made from this material!

There are lots of other materials used for 3D printing, including: PETG, nylon, carbon fiber, ASA, polycarbonate, polypropylene, PVA, and even material blends that include metal and wood. Not all printers are compatible with these materials, so it’s essential to check that the material is compatible with your printer before you start!

## What is a shape model?

A shape model is a digital file that describes 3D geometry. The most common file format for shape models, and the one we will discuss in this article, is OBJ; but other common formats exist, such as STL. 

OBJ files contain the position of each vertex, vertex normals, and the faces that make each polygon defined as a list of vertices. Most 3D graphics and animation software are compatible with OBJ, so viewing and modifying the models graphically is easy and it’s uncommon to ever have to interact with OBJ files in their “raw” form.
![Animated GIF of Itokawa](https://pdsregistryimages.psi.edu/tips/how-to-print-shape-models/itokawa.gif)



## Does PDS have printable shape models?

Yes! PDS SBN archives lots of shape models, and we provide OBJ versions for many of them.

[PDS Small Bodies Node: Shape Models](https://sbn.psi.edu/shape-models/)

NASA also makes available its own repository of 3D models, including spacecraft, solar system bodies, and digital terrain models.

[NASA 3D Resources](​​https://nasa3d.arc.nasa.gov/models)

## I have the OBJ files, now what?

### Slicing Software

Now that you have a digital model, you need to create a G-code file that can tell a 3D printer how to print it. This is where *slicing** software comes in. As we discussed previously, a 3D printer works by adding layer upon layer of material until a model is complete. These layers are cross-sections of the digital model, and slicing software is what performs this conversion from cross-sections to layers.

There are a variety of slicing software available; some open-source, some proprietary. Many 3D printer manufacturers also produce their own slicing software that is specifically tailored for use with the corresponding hardware. Choosing the right slicing software is a personal choice, and often comes down to trial and error. If you’re looking for a recommendation to get started, a popular open-source slicer is [Ultimaker Cura](https://ultimaker.com/software/ultimaker-cura).

![image of slicing software preview](ttps://pdsregistryimages.psi.edu/tips/how-to-print-shape-models/slicer_preview.png)

Since each slicing software is different, you’ll need to learn a bit about the software you’re going to use. However, all slicing software ultimately performs the same task- combining a digital model file and user-configured printer settings (such as printhead temperature, layer height, print speed, etc.) into a set of instructions that a specific model of 3D printer can understand. The output is a G-code file that will be delivered to the 3D printer as the final step in the production of a physical model.

### Time to print!

The last step is to deliver the G-code file to the 3D printer and let the printer do its job. While this might seem like a simple step, the printing process can itself be time consuming and highly iterative. While slicing software tries to minimize the risk of print failures, every person prints spaghetti from time to time. Be patient and try not to get discouraged. Each failure is an opportunity to learn and modify the printer settings. Once your prints begin to complete reliably, you’ll be able to produce other models with much more confidence. And your impressive new models of space objects are sure to be out of this world!
