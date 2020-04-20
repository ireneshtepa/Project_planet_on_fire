// condition for dropdown menue
var continents = [
  {"Name": "Africa", "Location": [7.026601, 17.517169], "Zoom": 5},
  {"Name": "Asia", "Location": [24.704768, 92.144528], "Zoom": 5},
  {"Name": "Australia", "Location": [-25.985928, 133.881768], "Zoom": 5},
  {"Name": "Europe", "Location": [46.860477, 17.705424], "Zoom": 5},
  {"Name": "North America", "Location": [33.584754, -91.103957], "Zoom": 5},
  {"Name": "South America", "Location": [3.376254, -61.164163], "Zoom": 5}
];


    // d3.selectAll(".dropdown-select").on("change", changeZoom);

    // function changeZoom() {
    //   var input = d3.select(".dropdown-select").property("value");
    //   console.log(input);
    //   for (i=0; i<continents.length; i++){
    //      if (continents[i].Name == input) {
    //       var newLocation = continents[i].Location;
    //       var newZoom = continents[i].Zoom;
    //       console.log(newLocation);
    //       console.log(newZoom);     
    //       myMap.setView(newLocation, newZoom)
    //     }
    //   } 
    //   };

