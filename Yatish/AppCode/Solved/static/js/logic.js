<<<<<<< HEAD
// firemarkers plotting info from rested API
 url = "http://127.0.0.1:5000/api"
 fire_cordinates = d3.json(url).then(function(data){
  var coordinates = [];
  var brightness = [];
  console.log(data);
   for (i = 0; i < data.length; i++) {
    var loc_list = [data[i].latitude, data[i].longitude];
    coordinates.push(loc_list)
    var fire_temp = data[i].bright_ti4;
    brightness.push(fire_temp)
  };
console.log(brightness)
  fireMarkers = [];
  for (var i = 0; i < coordinates.length; i++) {
    // Setting the marker radius for the state by passing population into the markerSize function
    fireMarkers.push(
      L.circle(coordinates[i], {
        stroke: false,
        fillOpacity: 0.75,
        color: "red",
        fillColor: "red",
        radius: 10000
      })
    )};

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

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

 });


// var continents = [
//   {"Name": "Africa", "Location": [-0.025826, 23.432947], "Zoom": 4},
//   {"Name": "Australia", "Location": [-25.985928, 133.881768], "Zoom": 5},
//   {"Name": "Eurasia", "Location": [51.919220, 78.759420], "Zoom": 3},
//   {"Name": "North America", "Location": [41.986402, -90.752039], "Zoom": 4},
//   {"Name": "South America", "Location": [-18.808526, -57.954288], "Zoom": 4}
// ];
=======
// firemarkers plotting info from rested API
 url = "http://127.0.0.1:5000/api"
 fire_cordinates = d3.json(url).then(function(data){
  var coordinates = [];
  var brightness = [];
  console.log(data);
   for (i = 0; i < data.length; i++) {
    var loc_list = [data[i].latitude, data[i].longitude];
    coordinates.push(loc_list)
    var fire_temp = data[i].brightness;
    brightness.push(fire_temp)
  };
console.log(brightness)
  fireMarkers = [];
  for (var i = 0; i < coordinates.length; i++) {
    // Setting the marker radius for the state by passing population into the markerSize function
    fireMarkers.push(
      L.circle(coordinates[i], {
        stroke: false,
        fillOpacity: 0.75,
        color: "red",
        fillColor: "red",
        radius: 10000
      })
    )};

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

// var fireMarkers = [];
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

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  // condition for dropdown menue
var continents = [
  {"Name": "Africa", "Location": [7.026601, 17.517169], "Zoom": 5},
  {"Name": "Australia", "Location": [-25.985928, 133.881768], "Zoom": 5},
  {"Name": "Eurasia", "Location": [24.704768, 92.144528], "Zoom": 5},
  {"Name": "North America", "Location": [33.584754, -91.103957], "Zoom": 5},
  {"Name": "South America", "Location": [3.376254, -61.164163], "Zoom": 5}
];


    d3.selectAll(".dropdown-select").on("change", changeZoom);

    function changeZoom() {
      var input = d3.select(".dropdown-select").property("value");
      console.log(input);
      for (i=0; i<continents.length; i++){
         if (continents[i].Name == input) {
          var newLocation = continents[i].Location;
          var newZoom = continents[i].Zoom;
          console.log(newLocation);
          console.log(newZoom);     
          myMap.setView(newLocation, newZoom)
        }
      } 
      };

});


// // condition for dropdown menue
// var continents = [
//   {"Name": "Africa", "Location": [7.026601, 17.517169], "Zoom": 5},
//   {"Name": "Australia", "Location": [-25.985928, 133.881768], "Zoom": 5},
//   {"Name": "Eurasia", "Location": [24.704768, 92.144528], "Zoom": 5},
//   {"Name": "North America", "Location": [33.584754, -91.103957], "Zoom": 5},
//   {"Name": "South America", "Location": [3.376254, -61.164163], "Zoom": 5}
// ];


//     d3.selectAll(".dropdown-select").on("change", changeZoom);

//     function changeZoom() {
//       var input = d3.select(".dropdown-select").property("value");
//       console.log(input);
//       for (i=0; i<continents.length; i++){
//          if (continents[i].Name == input) {
//           var newLocation = continents[i].Location;
//           var newZoom = continents[i].Zoom;
//           console.log(newLocation);
//           console.log(newZoom);     
//           myMap.setView(newLocation, newZoom)
//         }
//       } 
//       };
>>>>>>> 72e680e421d8c9bae51405979735b6a667d38e1a
