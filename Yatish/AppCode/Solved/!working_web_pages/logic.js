var fireMarkers = [];



// // firemarkers plotting info from rested API
// url = "http://127.0.0.1:5000/api"
// jsonData = d3.json(url).then(function(data){
//   for (i = 0; i < data.length; i++) {
//     L.circle(`[${data[i].latitude}, ${data[i].longtitude}]`, {
//       fillOpacity: 1,
//       color: "red",
//       fillColor: "red",
//       // Setting our circle's radius equal to the output of our markerSize function
//       // This will make our marker's size proportionate to its population
//       radius: 2
//     }).bindPopup('fire');
//   }
// });



// for (i = 0; i < data.length; i++) {
//   L.circle(`[${data[i].latitude}, ${data[i].longtitude}]`, {
//     fillOpacity: 1,
//     color: "red",
//     fillColor: "red",
//     // Setting our circle's radius equal to the output of our markerSize function
//     // This will make our marker's size proportionate to its population
//     radius: 2
//   }).bindPopup('fire');
// }





var continents = [
  {"Name": "Africa", "Location": [-0.025826, 23.432947], "Zoom": 4},
  {"Name": "Australia", "Location": [-25.985928, 133.881768], "Zoom": 5},
  {"Name": "Eurasia", "Location": [51.919220, 78.759420], "Zoom": 3},
  {"Name": "North America", "Location": [41.986402, -90.752039], "Zoom": 4},
  {"Name": "South America", "Location": [-18.808526, -57.954288], "Zoom": 4}
];



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




