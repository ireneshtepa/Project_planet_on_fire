//##############Variables##########################################
var year = []
var month = []
var year_list = {};
var month_list = {};
var year_occ = [];
var occury = [];
var month_occ = [];
var occurm = [];


function init() {

//###################getting data from JSON###########################

  d3.json("merged.json").then(function(data) {
    
    for (var i = 0; i < data.length; i++) { 
      var date = data[i].acq_date;
      var date_list = date.split("-")
      year.push(parseInt(date_list[0]))
      month.push(parseInt(date_list[1]))  
    }

//########################creating list with ocurrence######################################

    for (var i=0; i < year.length; i++) {
      year_list[year[i]] = (year_list[year[i]] || 0) +1 ;
    }

    for (var i=0; i < month.length; i++) {
      month_list[month[i]] = (month_list[month[i]] || 0) +1 ;
    }


  Object.entries(year_list).forEach(([key, value]) => {
  year_occ.push(key);
  occury.push(value);
  })

  Object.entries(month_list).forEach(([key, value]) => {
    month_occ.push(key);
    occurm.push(value);
    })

console.log(year_occ);
console.log(occury)


//#########################Graphs##################################### https://plot.ly/javascript/axes/    https://stackoverflow.com/questions/55908032/show-full-axis-range-for-plotly-chart


  var trace = {
    x: year_occ,
    y: occury,
    type: "line",
    //mode: "lines",

  };


  var data = [trace]

  var layout = {
    title: "Occurence of fires by year",
    xaxis: { title: "Year",
            //range: [2015, 2019],
            showgrid: true,
            gridwidth: 2,
            autotick: false,
            ticks: 'outside',
            showline: true,
  
  },
    yaxis: { title: "# of fires" ,
            rangemode:'tozero',
            autorange: true,
            showgrid: true,
            gridwidth: 2,
            ticks: 'outside',
            showline: true,
           
    },
     
  };

  Plotly.newPlot("plot", data, layout);

  })
 
}


//###############################dropdown event###############################################
d3.selectAll("#selDataset").on("change", getData);


function getData() {
  var dropdownMenu = d3.select("#selDataset");

  var dataset = dropdownMenu.property("value");



  var x = []
  var y = []
  var update = []

//########################Year option###############################  

  if (dataset === 'Yearly') {

    x = year_occ
    y = occury

    var update = {
      title: "Occurence of fires by year",
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
  }
              


//########################Month option###############################  

  if (dataset === 'Monthly') {

    x = month_occ
    y = occurm

    
    var update = {
      title: "Occurence of fires by Month",
      xaxis: { title: "Month",
              //range: [1, 12],
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
              rangemode:'tozero',
              autorange: true,
              showgrid: true,
              gridwidth: 2,
              ticks: 'outside',
              showline: true,
             
    },
       
    };
  

  }

 Plotly.restyle("plot", "x", [x]);
 Plotly.restyle("plot", "y", [y]);
 Plotly.relayout("plot", update);


}
        

init()
