//##############Variables##########################################
var year_africa = [];         var year_euroasia = [];
var month_africa = [];        var month_euroasia = [];
var year_list_africa = {};    var year_list_euroasia = {};
var month_list_africa = {};   var month_list_euroasia = {};
var year_occ_africa = [];     var year_occ_euroasia = [];
var occury_africa = [];       var occury_euroasia = [];
var month_occ_africa  = [];   var month_occ_euroasia  = [];
var occurm_africa = [];       var occurm_euroasia = [];

var year_australia = [];         var year_southamerica = [];
var month_australia = [];        var month_southamerica = [];
var year_list_australia = {};    var year_list_southamerica = {};
var month_list_australia = {};   var month_list_southamerica = {};
var year_occ_australia = [];     var year_occ_southamerica = [];
var occury_australia = [];       var occury_southamerica = [];
var month_occ_australia  = [];   var month_occ_southamerica  = [];
var occurm_australia = [];       var occurm_southamerica = [];

var year_northamerica = [];         
var month_northamerica = [];        
var year_list_northamerica = {};    
var month_list_northamerica = {};   
var year_occ_northamerica = [];     
var occury_northamerica = [];       
var month_occ_northamerica  = [];   
var occurm_northamerica = [];       




function init() {

//###################getting AFRICA from JSON###########################

  d3.json("algeria.json").then(function(data1) {
    
    for (var i = 0; i < data1.length; i++) { 
      var date1 = data1[i].acq_date;
      var date_list1 = date1.split("-")
      year_africa.push(parseInt(date_list1[0]))
      month_africa.push(parseInt(date_list1[1]))  
    }

//########################creating AFRICA list with ocurrence######################################

    for (var i=0; i < year_africa.length; i++) {
      year_list_africa[year_africa[i]] = (year_list_africa[year_africa[i]] || 0) +1 ;
    }

    for (var i=0; i < month_africa.length; i++) {
      month_list_africa[month_africa[i]] = (month_list_africa[month_africa[i]] || 0) +1 ;
    }


  Object.entries(year_list_africa).forEach(([key, value]) => {
    year_occ_africa.push(key);
    occury_africa.push(value);
    })

  Object.entries(month_list_africa).forEach(([key, value]) => {
    month_occ_africa.push(key);
    occurm_africa.push(value);
    })
   
console.log(year_occ_africa);
console.log(occury_africa)


//#########################Graphs##################################### https://plot.ly/javascript/axes/    https://stackoverflow.com/questions/55908032/show-full-axis-range-for-plotly-chart
//#####################################################################################################

  var trace = {
    x: year_occ_africa,
    y: occury_africa,
    type: "line",

  };

  var datat = [trace]

  var layout = {
    title: "Africa: Yearly occurence of fires",
    xaxis: { title: "Year",
            //range: [2015, 2019],
            showgrid: true,
            gridwidth: 2,
            autotick: false,
            ticks: 'outside',
            showline: true,
  
  },
    yaxis: { title: "# of fires" ,
            //rangemode:'tozero',
            autorange: true,
            showgrid: true,
            gridwidth: 2,
            ticks: 'outside',
            showline: true,
           
    },
     
  };


  console.log(datat);

  Plotly.newPlot("plot", datat, layout);
})
 


d3.json("fiji.json").then(function(data2) {
    
  for (var i = 0; i < data2.length; i++) { 
    var date2 = data2[i].acq_date;
    var date_list2 = date2.split("-")
    year_australia.push(parseInt(date_list2[0]))
    month_australia.push(parseInt(date_list2[1]))  
  }

//########################creating AUSTRALIA list with ocurrence######################################

  for (var i=0; i < year_australia.length; i++) {
    year_list_australia[year_australia[i]] = (year_list_australia[year_australia[i]] || 0) +1 ;
  }

  for (var i=0; i < month_australia.length; i++) {
    month_list_australia[month_australia[i]] = (month_list_australia[month_australia[i]] || 0) +1 ;
  }


Object.entries(year_list_australia).forEach(([key, value]) => {
  year_occ_australia.push(key);
  occury_australia.push(value);
  })

Object.entries(month_list_australia).forEach(([key, value]) => {
  month_occ_australia.push(key);
  occurm_australia.push(value);
  })
})

console.log(year_occ_australia);
console.log(occury_australia)

//###################getting EUROASIA from JSON###########################

d3.json("spain.json").then(function(data3) {
    
  for (var i = 0; i < data3.length; i++) { 
    var date3 = data3[i].acq_date;
    var date_list3 = date3.split("-")
    year_euroasia.push(parseInt(date_list3[0]))
    month_euroasia.push(parseInt(date_list3[1]))  
  }

//########################creating OCEANIA list with ocurrence######################################

  for (var i=0; i < year_euroasia.length; i++) {
    year_list_euroasia[year_euroasia[i]] = (year_list_euroasia[year_euroasia[i]] || 0) +1 ;
  }

  for (var i=0; i < month_euroasia.length; i++) {
    month_list_euroasia[month_euroasia[i]] = (month_list_euroasia[month_euroasia[i]] || 0) +1 ;
  }


Object.entries(year_list_euroasia).forEach(([key, value]) => {
  year_occ_euroasia.push(key);
  occury_euroasia.push(value);
  })

Object.entries(month_list_euroasia).forEach(([key, value]) => {
  month_occ_euroasia.push(key);
  occurm_euroasia.push(value);
  })
})

console.log(year_occ_euroasia);
console.log(occury_euroasia);

//###################getting NORTH AMERICA from JSON###########################

d3.json("belize.json").then(function(data4) {
    
  for (var i = 0; i < data4.length; i++) { 
    var date4 = data4[i].acq_date;
    var date_list4 = date4.split("-")
    year_northamerica.push(parseInt(date_list4[0]))
    month_northamerica.push(parseInt(date_list4[1]))  
  }

//########################creating NORTH AMERICA list with ocurrence######################################

  for (var i=0; i < year_northamerica.length; i++) {
    year_list_northamerica[year_northamerica[i]] = (year_list_northamerica[year_northamerica[i]] || 0) +1 ;
  }

  for (var i=0; i < month_northamerica.length; i++) {
    month_list_northamerica[month_northamerica[i]] = (month_list_northamerica[month_northamerica[i]] || 0) +1 ;
  }


Object.entries(year_list_northamerica).forEach(([key, value]) => {
  year_occ_northamerica.push(key);
  occury_northamerica.push(value);
  })

Object.entries(month_list_northamerica).forEach(([key, value]) => {
  month_occ_northamerica.push(key);
  occurm_northamerica.push(value);
  })
})


console.log(year_occ_northamerica);
console.log(occury_northamerica);

//###################getting SOUTH AMERICA from JSON###########################

d3.json("ecuador.json").then(function(data5) {
    
  for (var i = 0; i < data5.length; i++) { 
    var date5 = data5[i].acq_date;
    var date_list5 = date5.split("-")
    year_southamerica.push(parseInt(date_list5[0]))
    month_southamerica.push(parseInt(date_list5[1]))  
  }

//########################creating NORTH AMERICA list with ocurrence######################################

  for (var i=0; i < year_southamerica.length; i++) {
    year_list_southamerica[year_southamerica[i]] = (year_list_southamerica[year_southamerica[i]] || 0) +1 ;
  }

  for (var i=0; i < month_southamerica.length; i++) {
    month_list_southamerica[month_southamerica[i]] = (month_list_southamerica[month_southamerica[i]] || 0) +1 ;
  }


Object.entries(year_list_southamerica).forEach(([key, value]) => {
  year_occ_southamerica.push(key);
  occury_southamerica.push(value);
  })

Object.entries(month_list_southamerica).forEach(([key, value]) => {
  month_occ_southamerica.push(key);
  occurm_southamerica.push(value);
  })
})

console.log(year_occ_southamerica);
console.log(occury_southamerica);


}

console.log(year_occ_southamerica);
console.log(occury_southamerica);




//###############################dropdown event###############################################
//############################################################################################
d3.selectAll("#selDataset").on("change", getData);
d3.selectAll("#selDataset1").on("change", getData);


function getData() {

      

  var dropdownMenu = d3.select("#selDataset");
  var dataset = dropdownMenu.property("value");

  var dropdownMenu1 = d3.select("#selDataset1");
  var dataset1 = dropdownMenu1.property("value");  

  console.log(dataset);

  
  var x = [];
  var y = [];
  var update = [];

//########Year option with North America############# 

  if (dataset === 'Yearly' && dataset1 === 'North-America') {

      

      x = year_occ_northamerica
      y = occury_northamerica


      var update = {
        title: "North America: Yearly occurence of fires",
        xaxis: { title: "Year",
                //range: [2015, 2019],
                showgrid: true,
                gridwidth: 2,
                autotick: false,
                ticks: 'outside',
                showline: true,
                
      
        },
        yaxis: { title: "# of fires" ,
                //rangemode:'tozero',
                autorange: true,
                showgrid: true,
                gridwidth: 2,
                ticks: 'outside',
                showline: true,
              
        },   
      };
      
      Plotly.restyle("plot", "x", [x]);
      Plotly.restyle("plot", "y", [y]);
      Plotly.relayout("plot", update);

  }


//##########Month option with North America######################  
  
  if (dataset === 'Monthly' && dataset1 === 'North-America') {



      x = month_occ_northamerica
      y = occurm_northamerica

      var update = {
        title: "North America: Monthly occurence of fires",
        xaxis: { title: "Year",
                //range: [2015, 2019],
                showgrid: true,
                gridwidth: 2,
                //autotick: false,
                ticks: 'outside',
                showline: true,
                tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
                ticktext:["January", "February", "March", "April", "May", "June", "July", 
                          "August", "September", "October", "November", "December"],
                
      
        },
        yaxis: { title: "# of fires" ,
                //rangemode:'tozero',
                autorange: true,
                showgrid: true,
                gridwidth: 2,
                ticks: 'outside',
                showline: true,
              
        },   
      }; 
      
      Plotly.restyle("plot", "x", [x]);
      Plotly.restyle("plot", "y", [y]);
      Plotly.relayout("plot", update);
  
  }


//##################Year option with South America#####################  

  if (dataset === 'Yearly' && dataset1 === 'South-America') {


    

      x = year_occ_southamerica
      y = occury_southamerica


      var update = {
        title: "South America: Yearly occurence of fires",
        xaxis: { title: "Year",
                //range: [2015, 2019],
                showgrid: true,
                gridwidth: 2,
                autotick: false,
                ticks: 'outside',
                showline: true,
                
      
        },
        yaxis: { title: "# of fires" ,
                //rangemode:'tozero',
                autorange: true,
                showgrid: true,
                gridwidth: 2,
                ticks: 'outside',
                showline: true,
              
        },   
      }; 
      
      Plotly.restyle("plot", "x", [x]);
      Plotly.restyle("plot", "y", [y]);
      Plotly.relayout("plot", update);
  
  }


//##########Month option with South America###################  

  if (dataset === 'Monthly' && dataset1 === 'South-America') {



    x = month_occ_southamerica
    y = occurm_southamerica

  

    var update = {
      title: "South America: Monthly occurence of fires",
      xaxis: { title: "Year",
              //range: [2015, 2019],
              showgrid: true,
              gridwidth: 2,
              //autotick: false,
              ticks: 'outside',
              showline: true,
              tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
              ticktext:["January", "February", "March", "April", "May", "June", "July", 
                        "August", "September", "October", "November", "December"],
              
    
      },
      yaxis: { title: "# of fires" ,
              //rangemode:'tozero',
              autorange: true,
              showgrid: true,
              gridwidth: 2,
              ticks: 'outside',
              showline: true,
            
            },   
      };
      
      Plotly.restyle("plot", "x", [x]);
      Plotly.restyle("plot", "y", [y]);
      Plotly.relayout("plot", update);
  
  }

  //##################Year option with Euroasia#####################  

  if (dataset === 'Yearly' && dataset1 === 'Euroasia') {

  

    x = year_occ_euroasia
    y = occury_euroasia


    var update = {
      title: "Euroasia: Yearly occurence of fires",
      xaxis: { title: "Year",
              //range: [2015, 2019],
              showgrid: true,
              gridwidth: 2,
              autotick: false,
              ticks: 'outside',
              showline: true,
              
    
      },
      yaxis: { title: "# of fires" ,
              //rangemode:'tozero',
              autorange: true,
              showgrid: true,
              gridwidth: 2,
              ticks: 'outside',
              showline: true,
            
      },   
    }; 
    
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
    Plotly.relayout("plot", update);

}


//##########Month option with Euroasia###################  

if (dataset === 'Monthly' && dataset1 === 'Euroasia') {



  x = month_occ_euroasia
  y = occurm_euroasia



  var update = {
    title: "Euroasia: Monthly occurence of fires",
    xaxis: { title: "Year",
            //range: [2015, 2019],
            showgrid: true,
            gridwidth: 2,
            //autotick: false,
            ticks: 'outside',
            showline: true,
            tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
            ticktext:["January", "February", "March", "April", "May", "June", "July", 
                      "August", "September", "October", "November", "December"],
            
  
    },
    yaxis: { title: "# of fires" ,
            //rangemode:'tozero',
            autorange: true,
            showgrid: true,
            gridwidth: 2,
            ticks: 'outside',
            showline: true,
          
          },   
    };
    
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
    Plotly.relayout("plot", update);
  
}


  //##################Year option with Africa#####################  

  if (dataset === 'Yearly' && dataset1 === 'Africa') {


    x = year_occ_africa
    y = occury_africa


    var update = {
      title: "Africa: Yearly occurence of fires",
      xaxis: { title: "Year",
              //range: [2015, 2019],
              showgrid: true,
              gridwidth: 2,
              autotick: false,
              ticks: 'outside',
              showline: true,
              
    
      },
      yaxis: { title: "# of fires" ,
              //rangemode:'tozero',
              autorange: true,
              showgrid: true,
              gridwidth: 2,
              ticks: 'outside',
              showline: true,
            
      },   
    }; 
    
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
    Plotly.relayout("plot", update);
  
}


//##########Month option with Euroasia###################  

if (dataset === 'Monthly' && dataset1 === 'Africa') {


  x = month_occ_africa
  y = occurm_africa



  var update = {
    title: "Africa: Monthly occurence of fires",
    xaxis: { title: "Year",
            //range: [2015, 2019],
            showgrid: true,
            gridwidth: 2,
            //autotick: false,
            ticks: 'outside',
            showline: true,
            tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
            ticktext:["January", "February", "March", "April", "May", "June", "July", 
                      "August", "September", "October", "November", "December"],
            
  
    },
    yaxis: { title: "# of fires" ,
            //rangemode:'tozero',
            autorange: true,
            showgrid: true,
            gridwidth: 2,
            ticks: 'outside',
            showline: true,
          
          },   
    };
    
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
    Plotly.relayout("plot", update);
  
}



  //##################Year option with Oceania#####################  

  if (dataset === 'Yearly' && dataset1 === 'Oceania') {


    x = year_occ_australia
    y = occury_australia


    var update = {
      title: "Australia: Yearly occurence of fires",
      xaxis: { title: "Year",
              //range: [2015, 2019],
              showgrid: true,
              gridwidth: 2,
              autotick: false,
              ticks: 'outside',
              showline: true,
              
    
      },
      yaxis: { title: "# of fires" ,
              //rangemode:'tozero',
              autorange: true,
              showgrid: true,
              gridwidth: 2,
              ticks: 'outside',
              showline: true,
            
      },   
    }; 
    
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
    Plotly.relayout("plot", update);
  
}


//##########Month option with Euroasia###################  

if (dataset === 'Monthly' && dataset1 === 'Oceania') {


  x = month_occ_australia
  y = occurm_australia



  var update = {
    title: "Australia: Monthly occurence of fires",
    xaxis: { title: "Year",
            //range: [2015, 2019],
            showgrid: true,
            gridwidth: 2,
            //autotick: false,
            ticks: 'outside',
            showline: true,
            tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
            ticktext:["January", "February", "March", "April", "May", "June", "July", 
                      "August", "September", "October", "November", "December"],
            
  
    },
    yaxis: { title: "# of fires" ,
            //rangemode:'tozero',
            autorange: true,
            showgrid: true,
            gridwidth: 2,
            ticks: 'outside',
            showline: true,
          
          },   
    };
    
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
    Plotly.relayout("plot", update);
  
}


}
        

init()
