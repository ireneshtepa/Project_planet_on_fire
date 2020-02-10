var fireMarkers = [];
 
 
 url = "http://127.0.0.1:5000/api"
 jsonData = d3.json(url).then(function(data){
  console.log(data); 

  console.log(data[3])});
//   for (i = 0; i < data.length; i++) {
//      fireMarkers.push(data[i].latitude)
//  };  

//  for (i = 0; i < data.length; i++) {
//  fireMarkers.push(L.marker(
//   fireMarkers[i], {
//   color: "red",
//   fillColor: "red",
//   radius: 500
// }).bindPopup('fire'))

console.log(fireMarkers);
 

//  for (var i = 0; i < cities.length; i++) {
//    // loop through the cities array, create a new marker, push it to the cityMarkers array
//    cityMarkers.push(
//      L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
//    );
//  }
 
 // Add all the cityMarkers to a new layer group.
 // Now we can handle them as one group instead of referencing each individually






//console.log(fireMarkers);

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

// Create marker layer group
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