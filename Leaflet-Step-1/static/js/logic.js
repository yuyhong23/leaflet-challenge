// Create a map object
var myMap = L.map("map", { 
    center: [37.0902, -95.7129], //I am using the US coordinates
    zoom: 4 
  }); 
  
// Adding a tile layer (the background map image) to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11", 
    accessToken: API_KEY
}).addTo(myMap);

// Store our API endpoint inside url
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Grab the data with d3
d3.json(url, function(data){
    console.log(data.features);

    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and magnitude of the earthquake
    function createFeature(feature, layer){
        layer.bindPopup(feature.properties.title + "<hr>"+ feature.properties.mag);
    }
    // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
    var earthquakes = L.geoJSON(data.features, {
    onEachFeature: createFeature
  }).addTo(myMap);
})