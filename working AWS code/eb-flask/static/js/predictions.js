//##############Variables##########################################
count4_australia = 0
count5_australia = 0
count6_australia = 0
count7_australia = 0
count8_australia = 0
count9_australia = 0
count10_australia = 0
count11_australia = 0
count12_australia = 0   

frp4_australia = 0
frp5_australia = 0
frp6_australia = 0
frp7_australia = 0
frp8_australia = 0
frp9_australia = 0
frp10_australia = 0
frp11_australia = 0
frp12_australia = 0   



function init() {

//###################getting AFRICA from JSON###########################

  d3.csv("../static/data/prediction.csv").then(function(data) {
    //console.log(data[0].Dates)
    for (var i = 0; i < data.length; i++) { 
      var date = data[i].Dates;
      var date_list = date.split("/")
      month = date_list[0]
      if (month === "4"){
        count4_australia += parseInt(data[i].Count)}
      else if (month === "5"){
        count5_australia += parseInt(data[i].Count)}
      else if (month === "6"){
        count6_australia += parseInt(data[i].Count)}    
      else if (month === "7"){
        count7_australia += parseInt(data[i].Count)} 
      else if (month === "8"){
        count8_australia += parseInt(data[i].Count)}
      else if (month === "9"){
        count9_australia += parseInt(data[i].Count)}
      else if (month === "10"){
        count10_australia += parseInt(data[i].Count)}
      else if (month === "11"){
        count11_australia += parseInt(data[i].Count)}
      else if (month === "12"){
        count12_australia += parseInt(data[i].Count)}    

//####################Extracting FRP data################################        
      if (month === "4"){
          frp4_australia += parseInt(data[i].FRP)}
      else if (month === "5"){
          frp5_australia += parseInt(data[i].FRP)}
      else if (month === "6"){
          frp6_australia += parseInt(data[i].FRP)}    
      else if (month === "7"){
          frp7_australia += parseInt(data[i].FRP)} 
      else if (month === "8"){
          frp8_australia += parseInt(data[i].FRP)}
      else if (month === "9"){
          frp9_australia += parseInt(data[i].FRP)}
      else if (month === "10"){
          frp10_australia += parseInt(data[i].FRP)}
      else if (month === "11"){
          frp11_australia += parseInt(data[i].FRP)}
      else if (month === "12"){
          frp12_australia += parseInt(data[i].FRP)} 

    }

avg4_australia = count4_australia/30
avg5_australia = count5_australia/31
avg6_australia = count6_australia/30
avg7_australia = count7_australia/31
avg8_australia = count8_australia/31
avg9_australia = count9_australia/30
avg10_australia = count10_australia/31
avg11_australia = count11_australia/30
avg12_australia = count12_australia/31


australia_fires = [count4_australia, count5_australia, count6_australia, count7_australia, count8_australia, count9_australia, count10_australia, count11_australia, count12_australia]
australia_frps = [avg4_australia, avg5_australia, avg6_australia, avg7_australia, avg8_australia, avg9_australia, avg10_australia, avg11_australia, avg12_australia]
months = ["April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log(australia_fires)
console.log(australia_frps)

//})
  

//#########################Graphs##################################### https://plot.ly/javascript/axes/    https://stackoverflow.com/questions/55908032/show-full-axis-range-for-plotly-chart
//#####################################################################################################

  var trace = {
    x: months,
    y: australia_fires,
    mode: 'markers',
    marker: {
    size: [2214.45,	2094.75,	1822.8,	980.1,	1043.1,	1054.8,	1008.9,	1768.2,	1955.1],
    sizemode: 'area',
    color: [54,	51,	44,	36,	37,	38,	36,	42,	47]}
  };

  var datat = [trace]

  var layout = {
    title: "Australia: Fire forecast",
    xaxis: { title: "Month",
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
   
}
       

init()
