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
// USGS Magnitude 2.5+ Earthquakes, Past Week
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Grab the data with d3
d3.json(url, function(response){
    console.log(response.features);

    // response.forEach(x => {
    //     L.circle(
    //         [x.features[2].geometry.coordinates[0], 
    //         x.features[2].geometry.coordinates[1]
    //         ]).bindPopup(x.features.properties.place+ "<hr>"+ x.features.properties.mag)
    // });
    
    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and magnitude of the earthquake
//     function createFeature(feature, layer){
//         layer.bindPopup(feature.properties.place + "<hr>"+ feature.properties.mag);
//     }
//     // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
//     var earthquakes = L.geoJSON(response.features, {
//     onEachFeature: createFeature
//   }).addTo(myMap);

    function chooseColor(depth) {
        if (depth <= 10){
            color = "#00ff00";
        }else if (depth <= 30){
            color = "#ccff66";
        }else if (depth <= 50){
            color = "#ffcc66";
        }else if (depth <= 70){
            color = "#ff9900";
        }else if (depth <= 90){
            color = "#ff6600";
        }else{
            color = "#ff0000";
        }
        return color;
    }

    // Create markers that reflect the magnitude of the earthquake by their size
    L.geoJSON(response.features,{
        pointToLayer: function (feature, latlng){
            // console.log(feature.geometry.coordinates[2]);
            return L.circleMarker(latlng, {
                color: '#000',
                weight: 1,
                fillColor: chooseColor(feature.geometry.coordinates[2]),
                fillOpacity: 0.8,
                radius: feature.properties.mag * 2.6
            });
        }
    }).addTo(myMap);
})