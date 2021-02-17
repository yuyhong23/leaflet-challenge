# Leaflet Challenge

Data and instructions provided by UC Berkeley Extension Data Analytics Bootcamp.

# Introduction 

The goal of this assignment is to use my newfound knowledge and skills on javascript's Leaflet library to create dynamic visualizations using GeoJson data.

# Technologies/Libraries

- HTML

- JavaScript

- Leaflet

- D3.js

- CSS

# Detailed Instructions/Assignment Background

### Background

    Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!
    
    The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

### Level 1: Basic Visualization

    1. Your first task is to visualize an earthquake data set.
        - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed page (http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.
    
    2. Import & Visualize the Data
        - Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
        
        - Your data markers should reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.
        
        - HINT the depth of the earth can be found as the third coordinate for each earthquake.
        
        - Include popups that provide additional information about the earthquake when a marker is clicked.
        
        - Create a legend that will provide context for your map data.

### Level 2: More Data (Optional)

    The USGS wants you to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in a second data set and visualize it along side your original set of data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates.
    
    In this step we are going to..
        - Plot a second data set on our map.

        - Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.

        - Add layer controls to our map.

# Files

    - Leaflet-Step-1 folder
        - index.html
        - static folder
            - CSS folder for the styling
            - js contains logic.js where my codes are

    - D3_data_journalism_BONUS folder
        - index.html
        - assets folder
            - CSS folder for the styling
            - data folder contains the downloaded tectonic plate boundaries json file
            - js contains logic.js where my codes are

# Process and Credits

My first assignment working with Leaflet to create markers on map. I used class materials and outside resources for reference. 

Here are the outside resources that I used for this assignment (as well as attempts):

    - https://docs.mapbox.com/mapbox.js/api/v3.3.1/l-circlemarker/
    - https://github.com/DevinLeeBartley/map672/blob/master/module-08/lesson-08.md
    - https://www.w3schools.com/colors/colors_picker.asp
    - https://leafletjs.com/examples/geojson/
    - https://leafletjs.com/examples/quick-start/
    - https://leafletjs.com/examples/layers-control/
    - https://leafletjs.com/examples/choropleth/
    - https://gis.stackexchange.com/questions/193161/add-legend-to-leaflet-map
    - https://docs.mapbox.com/mapbox-gl-js/example/setstyle/
    - https://gis.stackexchange.com/questions/257820/is-it-possible-to-group-geojson-objects-polygons-in-a-layer
