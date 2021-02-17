// Create a map object
var myMap = L.map("map", { 
    center: [37.0902, -95.7129], //I am using the US coordinates
    zoom: 4 
  }); 
  
// Adding a grayscale tile layer (the background map image) to our map
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(myMap);

// Store our API endpoint inside url
// USGS Magnitude 2.5+ Earthquakes, Past Week
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Grab the data with d3
d3.json(url, function(response){
    console.log(response.features);
    
    // Function for changing color based on depth
    function chooseColor(depth) {
        if (depth < 10){
            color = "#00ff00";
        }else if (depth < 30){
            color = "#ccff66";
        }else if (depth < 50){
            color = "#ffcc66";
        }else if (depth < 70){
            color = "#ff9900";
        }else if (depth < 90){
            color = "#ff6600";
        }else{
            color = "#ff0000";
        }
        return color;
    }

    // Create markers that reflect the magnitude of the earthquake by their size
    // Marker color depends on depth
    // Popup when clicked
    L.geoJSON(response.features,{
        pointToLayer: function (feature, latlng){
            // console.log(feature.geometry.coordinates[2]);
            return L.circleMarker(latlng, {
                color: '#000',
                weight: 1,
                fillColor: chooseColor(feature.geometry.coordinates[2]),
                fillOpacity: 0.8,
                radius: feature.properties.mag * 2.6
            }).bindPopup(feature.properties.place+ "<hr>"+ feature.properties.mag+"<hr>"+new Date(feature.properties.time));
        }
    }).addTo(myMap);

    // Color for legend
    function getColor(d) {
        return d > 90  ? '#ff0000' :
               d > 70  ? '#ff6600' :
               d > 50  ? '#ff9900' :
               d > 30  ? '#ffcc66' :
               d > 10  ? '#ccff66' :
                         "#00ff00";
    }
    // Create legend
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [-10, 10, 30, 50, 70, 90],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(myMap);
})