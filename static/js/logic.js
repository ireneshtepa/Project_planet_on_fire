// firemarkers plotting info from rested API
 url = "http://127.0.0.1:5000/api"
 fire_cordinates = d3.json(url).then(function(data){
  var coordinates = [];
  var heatMap = [];
  var brightness = [];
   for (i = 0; i < data.length; i++) {
    var loc_list = [data[i].latitude, data[i].longitude];
    coordinates.push(loc_list)
    heatMap_data=[data[i].latitude, data[i].longitude, data[i].brightness];
    heatMap.push(heatMap_data);
    brightness.push(data[i].brightness)
  };
// console.log(heatMap)
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

var minBright = Math.min(...brightness);
var maxBright = Math.max(...brightness);

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
// var fires = L.layerGroup(fireMarkers);
var heat = L.heatLayer(heatMap, {
  radius: 10,
  blur: 12,
  gradient: {0.1: 'blue', 0.3: 'lime', 0.5: "yellow",  0.9: 'red', 1: "#8D021F"}
});  

// Create a baseMaps object
var baseMaps = {
  "Dark view": darkmap,
  "Satellite view": satellite
};

// Create an overlay object
var overlayMaps = {
  "Heat": heat
  // ,"Fires": fires
};


// Define a map object
var myMap = L.map("map", {
  center: [17.991615, 17.656456],
  zoom: 3,
  layers: [darkmap, heat],
  zoomControl: false
});

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  // condition for dropdown menue
var continents = [
  {"Name": "Africa", "Location": [7.026601, 17.517169], "Zoom": 5},
  {"Name": "Asia", "Location": [24.704768, 92.144528], "Zoom": 5},
  {"Name": "Australia", "Location": [-25.985928, 133.881768], "Zoom": 5},
  {"Name": "Europe", "Location": [46.860477, 17.705424], "Zoom": 5},
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

