var fireMarkers = [];


// firemarkers plotting info from rested API
// url = "http://127.0.0.1:5000/api"
// jsonData = d3.json(url).then(function(data){
//     fireMarkers.push(`[${data.latitude}, ${data.longtitude}]`);
//     (bright_ti4)
// });





// Define variables for base layers
var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create two separate layer group
var fires = L.layerGroup(fireMarkers);

// Create a baseMaps object
var baseMaps = {
  "Dark view": darkmap,
  "Satellite view": satellite
};

// Create an overlay object
var overlayMaps = {
  "Fires": fires
};

// Define a map object
var myMap = L.map("map", {
  center: [17.991615, 17.656456],
  zoom: 3,
  layers: [darkmap, fires],
  zoomControl: false
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);




