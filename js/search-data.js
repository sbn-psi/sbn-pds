'use strict';
searchApp.factory('searchData', function () {
    return [{
        name: 'Altimetry',
        subtitle: '',
        description: ' These data sets will contain altimetry data which is collected by measuring reflected laser light from the surface of an object. This allows for measurements of height, distance, and altitude. Altimeters can utilize radio waves as well as lasers to measure distance.  ',
        url: '/archive/altimetry.html',
        category: 'Data Types'
    },{
        name: 'Plasma/Particles/Magnetosphere',
        subtitle: 'NEAR Magnetometer',
        description: 'A Magnometer is used to collect data about the magnetic forces of an object. These observation sets can contain magnetic field data and well as detected electromagnetic anomalies.',
        url: '/resource/near/maginst.html',
        category: 'Data Types'
    },{
        name: 'Image Data',
        subtitle: '',
        description: ' These data sets will contain Photographic image data, which can be either from ground based telescopes or from a space craft. These data sets will contain numerous images of an object of group of objects.  ',
        url: '/archive/image.html',
        category: 'Data Types'
    },{
        name: 'Maps and Mosaics',
        subtitle: '',
        description: 'These data sets will contain Mosaic images which are a single large image stitched together from numerous smaller images to give a wide field view of an area.  Usually, it is constructed from a series of spacecraft images taken closely together in time so that the Sun angle is consistent throughout the mosaic; however, for global mosaics, that is not possible.  Additionally, the images are frequently photometrically corrected so that the reflected light is normalized to a single emission angle, typically 30°.',
        url: '/archive/maps.html',
        category: 'Data Types'
    },{
        name: 'NEO Surveys',
        subtitle: '',
        description: ' These data sets will contain Astronomical Survey observations. An astronomical survey is a generalized search over all (or most) of the sky and lacks a specific target. For SBN, its goal is to discover comets and asteroids and improve our knowledge of their orbits.  Alternatively, an astronomical survey may comprise a set of many images or spectra of objects that share a common type or feature. ',
        url: '/archive/surveys.html',
        category: 'Data Types'
    },{
        name: 'Nuclear',
        subtitle: '',
        description: '  These data sets will contain nuclear observations which are made using some speciality spectrometers that detect interactions of highly energetic particles.  These can be an X-ray spectrometer that measures X-rays that are emitted from the surface.  Another one is a neutron spectrometer, which detects different energy states of neutrons that are created when cosmic rays impact the surface.  Detailed analysis can separate particles, atoms, and molecules by their mass, momentum, or energy. Data from these observations can be used to determine chemical composition and abundance.  ',
        url: '/archive/xgn.html',
        category: 'Data Types'
    },{
        name: 'Orbital data',
        subtitle: 'proper elements and dynamical families',
        description: ' These data sets will contain the orbital observations of an object or a family of objects. These data sets will include the proper elements and dynamical families. Orbital observations can be ground based or from spacecraft. Orbital data sets are typically collected over a longer time period to allow for a complete observation of an orbital path.  ',
        url: '/archive/orbital.html',
        category: 'Data Types'
    },{
        name: 'Photometry and Lightcurves',
        subtitle: '',
        description: ' These data sets will contain Photometry observations, which are used to measure the brightness of celestial objects. These measurements can provide information about an object’s size, distance, temperature, and rotation period. ',
        url: '/archive/phot.html',
        category: 'Data Types'
    },{
        name: 'Physical Properties',
        subtitle: 'spin vectors, taxonomic classification, albedos, densities, and diameters',
        description: 'These data sets will include observations on the physical properties of asteroids such as spin vectors, taxonomic classifications, albedos, densities and diameters.',
        url: '/archive/physical.html',
        category: 'Data Types'
    },{
        name: 'Polarimetry',
        subtitle: '',
        description: 'These datasets will contain the measurement of polarization of electromagnetic waves such as radio or light waves (the orientation of the light waves). Typically polarimetry is done on electromagnetic waves that have traveled through or have been reflected, refracted or diffracted by some material in order to characterize that object. ',
        url: '/archive/polarimetry.html',
        category: 'Data Types'
    },{
        name: 'Radar',
        subtitle: '',
        description: ' These data sets will contain radar observations which is a measurement system that uses radio waves (Radar) to determine the range, angle, or velocity of objects. This is done by reflecting radar waves off of a target and analyzing the reflections. Radar data can be used to construct both radar images and shape models of objects.  ',
        url: '/archive/radar.html',
        category: 'Data Types'
    },{
        name: 'Radio Science',
        subtitle: '',
        description: ' These data sets contain Radio astronomy observations which are conducted using large radio antennas referred to as radio telescopes, that are either used singularly, or with multiple linked telescopes utilizing the techniques of radio interferometry and aperture synthesis. The use of interferometry allows radio astronomy to achieve high angular resolution, as the resolving power of an interferometer is set by the distance between its components, rather than the size of its components.  ',
        url: '/archive/rs.html',
        category: 'Data Types'
    },{
        name: 'Shape Models',
        subtitle: '',
        description: 'Shape models (or Digital Terrain Models) 3D computer generated models of an object. Shape models can be computed using radar, visible image data, light curves with inversion techniques or laser altimeter data. ',
        url: '/shape-models/',
        category: 'Data Types'
    },{
        name: 'Gravity Models',
        subtitle: '',
        description: ' These data sets contain gravity models which are created using the gravitational observations of an object. Gravity models can be derived from radio observations as well as spacecraft. Gravity models can include spherical harmonic models of the gravity field, radial gravity acceleration maps and internal density data.  ',
        url: '/archive/gravity.html',
        category: 'Data Types'
    },{
        name: 'SPICE Kernels',
        subtitle: '',
        description: '  These data sets will include SPICE data, which contains time-series details of the position and pointing of the spacecraft, and the position and rotation state of the planets/small bodies.  It also includes exact definitions of the spacecraft equipment and instruments, to include how they are oriented on the spacecraft. The complete SPICE information provides deterministic information to compute relative and inertial positions, pointing and angles of objects in space.  ',
        url: '/archive/spice.html',
        category: 'Data Types'
    },{
        name: 'Spectrophotometry and Spectra',
        subtitle: '',
        description: ` These data sets will contain Spectrophotometry observations which are the quantitative measurement of the reflection or transmission properties of a material as a function of wavelength.This data can also be commonly represented as a chart or a graph that shows the intensity of light being emitted over a range of wavelengths (or wavenumbers). `,
        url: '/archive/spectra.html',
        category: 'Data Types'
    },{
        name: 'All Asteroid Data',
        subtitle: '',
        url: '/archive/asteroids.html',
        category: 'Target Types'
    },{
        name: 'All Dust Data',
        subtitle: '',
        url: '/archive/dust.html',
        category: 'Target Types'
    },{
        name: 'Near Earth Objects',
        subtitle: '',
        url: '/archive/neos.html',
        category: 'Target Types'
    },{
        name: 'TNOs, Centaurs, and Pluto',
        subtitle: '',
        url: '/archive/tnos.html',
        category: 'Target Types'
    },{
        name: 'Planetary Satellites',
        subtitle: '',
        url: '/archive/sat.html',
        category: 'Target Types'
    },{
        name: 'Meteorites',
        subtitle: '',
        url: '/archive/meteorite.html',
        category: 'Target Types'
    },{
        name: 'Meteoroids',
        subtitle: '',
        url: '/archive/meteoroid.html',
        category: 'Target Types'
    },{
        name: 'Comets',
        subtitle: '',
        url: '/archive/comets.html',
        category: 'Target Types'
    },{
        name: 'Laboratory Spectra',
        subtitle: '',
        url: '/archive/lab.html',
        category: 'Target Types'
    },{
        name: 'Bopps',
        subtitle: 'Ceres',
        url: 'http://pdssbn.astro.umd.edu/data_sb/missions/bopps/index.shtml',
        category: 'Mission'
    },{
        name: 'Cassini',
        subtitle: 'Interplanetary dust and Small satellite shape models',
        instruments: ['HRD', 'CDA'],
        url: '/archive/cassini.html',
        category: 'Mission'
    },{
        name: 'Dawn',
        subtitle: '4 Vesta, 1 Ceres',
        instruments: ['VIR', 'FC', 'GRaND'],
        url: '/resource/dawn',
        category: 'Mission'
    },{
        name: 'Galileo',
        subtitle: '243 Ida, 951 Gaspra, Small planetary satellites, Interplanetary dust',
        url: '/archive/galileo.html',
        category: 'Mission'
    },{
        name: 'Giotto',
        subtitle: '1P/Halley (1682 Q1)',
        url: 'http://pdssbn.astro.umd.edu/data_sb/missions/giotto/index.shtml',
        category: 'Mission'
    },{
        name: 'Hayabusa',
        subtitle: '25143 Itokawa',
        url: '/archive/hayabusa.html',
        category: 'Mission'
    },{
        name: 'Hubble Space Telescope',
        subtitle: '1 Ceres, 4 Vesta',
        url: '/archive/sc.html',
        category: 'Mission'
    },{
        name: 'IRAS',
        subtitle: 'Interplanetary dust, Asteroids',
        url: '/archive/iras.html',
        category: 'Mission'
    },{
        name: 'Mariner 9',
        subtitle: 'Deimos',
        url: '/archive/sc.html',
        category: 'Mission'
    },{
        name: 'MSX',
        subtitle: 'Interplanetary dust, Asteroids, Comets',
        url: '/archive/msx.html',
        category: 'Mission'
    },{
        name: 'NEAR',
        subtitle: '433 Eros, 253 Mathilde, C/Hyakutake (1996 B2)',
        url: '/resource/near',
        category: 'Mission'
    },{
        name: 'NEOWISE',
        subtitle: '',
        url: '/resource/neowisediam.html',
        category: 'Mission'
    },{
        name: 'New Horizons',
        subtitle: 'Pluto, and satellites of Pluto and Jupiter',
        url: 'http://pdssbn.astro.umd.edu/data_sb/missions/newhorizons/index.shtml',
        category: 'Mission'
    },{
        name: 'New Horizons Kuiper Belt Extended Mission',
        subtitle: '486958 Arrokoth (KBO)',
        url: 'https://pdssbn.astro.umd.edu/data_sb/missions/nh-kem/index.shtml',
        category: 'Mission'
    },{
        name: 'OSIRIS-REx',
        subtitle: '101955 Bennu',
        instruments: ['OCAMS', 'TAGCAMS', 'OVIRS', 'OTES', 'REXIS', 'OLA', 'DTM', 'DEM'],
        url: '/resource/orex/',
        category: 'Mission'
    },{
        name: 'Rosetta',
        subtitle: '2867 Steins, 21 Lutetia',
        url: 'http://pdssbn.astro.umd.edu/data_sb/missions/rosetta/index.shtml',
        category: 'Mission'
    },{
        name: 'Stardust',
        subtitle: '5535 Annefrank',
        url: 'http://pdssbn.astro.umd.edu/holdings/sdu-a-navcam-2-edr-annefrank-v2.0/dataset.html',
        category: 'Mission'
    },{
        name: 'Ulysses',
        subtitle: 'Interplanetary dust',
        url: '/resource/udds.html',
        category: 'Mission'
    },{
        name: 'Vega 1 and 2',
        subtitle: '1P/Halley (1682 Q1)',
        url: '/archive/sc.html',
        category: 'Mission'
    },{
        name: 'Viking Orbiter',
        subtitle: 'Phobos, Deimos',
        url: '/archive/sc.html',
        category: 'Mission'
    },{
        name: 'Voyager 1 and 2',
        subtitle: 'Small planetary satellites',
        url: '/archive/sc.html',
        category: 'Mission'
    }]
});
