# Shape models page

## How to add a new shape model

0. Add the shape model file to the `files/` directory
0. Take a screenshot of the rendered model using a modelling software such as MeshMixer and add the file to the `previews/` directory.
0. Add the shape model definition to the corresponding `factory` in `js/app.Data.js` (either Comets, Asteroids, or Satellites depending on what type of object model is being added)
    - Check whether the object name already exists in the factory. If so, add the new definition to the existing object. If not, add the higher-level object definition first, then add the model information.

TODO: add instructions for generating USDZ file for a model