//##############Variables##########################################
sum2015_africa = 0 
sum2016_africa = 0         
sum2017_africa = 0
sum2018_africa = 0
sum2019_africa = 0
sum01_africa = 0
sum02_africa = 0
sum03_africa = 0
sum04_africa = 0
sum05_africa = 0
sum06_africa = 0
sum07_africa = 0
sum08_africa = 0
sum09_africa = 0
sum10_africa = 0
sum11_africa = 0
sum12_africa = 0   

sum2015_australia = 0 
sum2016_australia = 0         
sum2017_australia = 0
sum2018_australia = 0
sum2019_australia = 0
sum01_australia = 0
sum02_australia = 0
sum03_australia = 0
sum04_australia = 0
sum05_australia = 0
sum06_australia = 0
sum07_australia = 0
sum08_australia = 0
sum09_australia = 0
sum10_australia = 0
sum11_australia = 0
sum12_australia = 0   

sum2015_south_america = 0 
sum2016_south_america = 0         
sum2017_south_america = 0
sum2018_south_america = 0
sum2019_south_america = 0
sum01_south_america = 0
sum02_south_america = 0
sum03_south_america = 0
sum04_south_america = 0
sum05_south_america = 0
sum06_south_america = 0
sum07_south_america = 0
sum08_south_america = 0
sum09_south_america = 0
sum10_south_america = 0
sum11_south_america = 0
sum12_south_america = 0   

sum2015_north_america = 0 
sum2016_north_america = 0         
sum2017_north_america = 0
sum2018_north_america = 0
sum2019_north_america = 0
sum01_north_america = 0
sum02_north_america = 0
sum03_north_america = 0
sum04_north_america = 0
sum05_north_america = 0
sum06_north_america = 0
sum07_north_america = 0
sum08_north_america = 0
sum09_north_america = 0
sum10_north_america = 0
sum11_north_america = 0
sum12_north_america = 0   

sum2015_asia = 0 
sum2016_asia = 0         
sum2017_asia = 0
sum2018_asia = 0
sum2019_asia = 0
sum01_asia = 0
sum02_asia = 0
sum03_asia = 0
sum04_asia = 0
sum05_asia = 0
sum06_asia = 0
sum07_asia = 0
sum08_asia = 0
sum09_asia = 0
sum10_asia = 0
sum11_asia = 0
sum12_asia = 0   

sum2015_europe = 0 
sum2016_europe = 0         
sum2017_europe = 0
sum2018_europe = 0
sum2019_europe = 0
sum01_europe = 0
sum02_europe = 0
sum03_europe = 0
sum04_europe = 0
sum05_europe = 0
sum06_europe = 0
sum07_europe = 0
sum08_europe = 0
sum09_europe = 0
sum10_europe = 0
sum11_europe = 0
sum12_europe = 0   

years = ["2015", "2016", "2017", "2018", "2019"]
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// url_africa= "http://127.0.0.1:5000/api/africa_historic_data"
// url_australia= "http://127.0.0.1:5000/api/australia_historic_data"
// url_asia= "http://127.0.0.1:5000/api/asia_historic_data"
// url_europe= "http://127.0.0.1:5000/api/europe_historic_data"
// url_north_america= "http://127.0.0.1:5000/api/north_america_historic_data"
// url_south_america= "http://127.0.0.1:5000/api/south_america_historic_data"

url_africa= "http://flask-19.eba-9jgnz35i.us-east-2.elasticbeanstalk.com/api/africa_historic_data"
url_australia= "http://flask-19.eba-9jgnz35i.us-east-2.elasticbeanstalk.com/api/australia_historic_data"
url_asia= "http://flask-19.eba-9jgnz35i.us-east-2.elasticbeanstalk.com/api/asia_historic_data"
url_europe= "http://flask-19.eba-9jgnz35i.us-east-2.elasticbeanstalk.com/api/europe_historic_data"
url_north_america= "http://flask-19.eba-9jgnz35i.us-east-2.elasticbeanstalk.com/api/north_america_historic_data"
url_south_america= "http://flask-19.eba-9jgnz35i.us-east-2.elasticbeanstalk.com/api/south_america_historic_data"



function init() {

//###################getting AFRICA from JSON###########################

  d3.json(url_africa).then(function(data1) {
    //console.log(data1["Africa"][0])  //["Data"]
    for (var j = 0; j < data1["Africa"].length; j++) {
      for (var i = 0; i < data1["Africa"][j]["Data"].length; i++) {
        var sample1 = data1["Africa"][j]["Data"][i]["Date"]
        var date_list1 = sample1.split("-")
        year1 = date_list1[0]
        month1 = date_list1[1]
          if (year1 === "2015"){
            sum2015_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}
          else if (year1 === "2016"){
            sum2016_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}
          else if (year1 === "2017"){
            sum2017_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}
          else if (year1 === "2018"){
            sum2018_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}
          else if (year1 === "2019"){
            sum2019_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}
        
        if (month1 === "01"){
            sum01_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}
        else if (month1 === "02"){
            sum02_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}
        else if (month1 === "03"){
            sum03_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}  
        else if (month1 === "04"){
            sum04_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}  
        else if (month1 === "05"){
            sum05_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}  
        else if (month1 === "06"){
            sum06_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}  
        else if (month1 === "07"){
            sum07_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}  
        else if (month1 === "08"){
            sum08_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}  
        else if (month1 === "09"){
            sum09_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}  
        else if (month1 === "10"){
            sum10_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])}  
        else if (month1 === "11"){
            sum11_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])} 
        else if (month1 === "12"){
            sum12_africa += parseInt(data1["Africa"][j]["Data"][i]["Number of fires"])} 
    
    
    }
  }

//})

    africa_year = [sum2015_africa, sum2016_africa, sum2017_africa, sum2018_africa, sum2019_africa]
    africa_month = [sum01_africa, sum02_africa, sum03_africa, sum04_africa, sum05_africa, sum06_africa, sum07_africa, sum08_africa, sum09_africa, sum10_africa, sum11_africa, sum12_africa]

    //console.log(africa_month)
  
//#########################Graphs##################################### https://plot.ly/javascript/axes/    https://stackoverflow.com/questions/55908032/show-full-axis-range-for-plotly-chart
//#####################################################################################################

  

 


//###################getting Australia from JSON###########################

d3.json(url_australia).then(function(data2) {
  for (var j = 0; j < data2["Australia"].length; j++) {
    for (var i = 0; i < data2["Australia"][j]["Data"].length; i++) {
      var sample2 = data2["Australia"][j]["Data"][i]["Date"]
      var date_list2 = sample2.split("-")
      year2 = date_list2[0]
      month2 = date_list2[1]
        if (year2 === "2015"){
          sum2015_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}
        else if (year2 === "2016"){
          sum2016_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}
        else if (year2 === "2017"){
          sum2017_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}
        else if (year2 === "2018"){
          sum2018_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}
        else if (year2 === "2019"){
          sum2019_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}
      
      if (month2 === "01"){
          sum01_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}
      else if (month2 === "02"){
          sum02_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}
      else if (month2 === "03"){
          sum03_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}  
      else if (month2 === "04"){
          sum04_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}  
      else if (month2 === "05"){
          sum05_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}  
      else if (month2 === "06"){
          sum06_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}  
      else if (month2 === "07"){
          sum07_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}  
      else if (month2 === "08"){
          sum08_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}  
      else if (month2 === "09"){
          sum09_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}  
      else if (month2 === "10"){
          sum10_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])}  
      else if (month2 === "11"){
          sum11_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])} 
      else if (month2 === "12"){
          sum12_australia += parseInt(data2["Australia"][j]["Data"][i]["Number of fires"])} 
  }
  }

  australia_year = [sum2015_australia, sum2016_australia, sum2017_australia, sum2018_australia, sum2019_australia]
  australia_month = [sum01_australia, sum02_australia, sum03_australia, sum04_australia, sum05_australia, sum06_australia, sum07_australia, sum08_australia, sum09_australia, sum10_australia, sum11_australia, sum12_australia]

  //console.log(australia_year)

//})






//###################getting EUROPE from JSON###########################

d3.json(url_europe).then(function(data3) {
    
  for (var j = 0; j < data3["Europe"].length; j++) {
    for (var i = 0; i < data3["Europe"][j]["Data"].length; i++) { 
      var sample3 = data3["Europe"][j]["Data"][i]["Date"]
      var date_list3 = sample3.split("-")
      year3 = date_list3[0]
      month3 = date_list3[1]
        if (year3 === "2015"){
          sum2015_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}
        else if (year3 === "2016"){
          sum2016_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}
        else if (year3 === "2017"){
          sum2017_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}
        else if (year3 === "2018"){
          sum2018_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}
        else if (year3 === "2019"){
          sum2019_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}
        
        if (month3 === "01"){
            sum01_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}
        else if (month3 === "02"){
            sum02_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}
        else if (month3 === "03"){
            sum03_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}  
        else if (month3 === "04"){
            sum04_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}  
        else if (month3 === "05"){
            sum05_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}  
        else if (month3 === "06"){
            sum06_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}  
        else if (month3 === "07"){
            sum07_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}  
        else if (month3 === "08"){
            sum08_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}  
        else if (month3 === "09"){
            sum09_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}  
        else if (month3 === "10"){
            sum10_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])}  
        else if (month3 === "11"){
            sum11_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])} 
        else if (month3 === "12"){
            sum12_europe += parseInt(data3["Europe"][j]["Data"][i]["Number of fires"])} 
    }
  }
    europe_year = [sum2015_europe, sum2016_europe, sum2017_europe, sum2018_europe, sum2019_europe]
    europe_month = [sum01_europe, sum02_europe, sum03_europe, sum04_europe, sum05_europe, sum06_europe, sum07_europe, sum08_europe, sum09_europe, sum10_europe, sum11_europe, sum12_europe]

    //console.log(europe_year)

  //})






//###################getting Asia from JSON###########################

d3.json(url_asia).then(function(data4) {
    
  for (var j = 0; j < data4["Asia"].length; j++) {
    for (var i = 0; i < data4["Asia"][j]["Data"].length; i++) {  
      var sample4 = data4["Asia"][j]["Data"][i]["Date"]
      var date_list4 = sample4.split("-")
      year4 = date_list4[0]
      month4 = date_list4[1]
        if (year4 === "2015"){
          sum2015_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}
        else if (year4 === "2016"){
            sum2016_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}
        else if (year4 === "2017"){
            sum2017_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}
        else if (year4 === "2018"){
            sum2018_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}
        else if (year4 === "2019"){
            sum2019_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}
        
        if (month4 === "01"){
            sum01_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}
        else if (month4 === "02"){
            sum02_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}
        else if (month4 === "03"){
            sum03_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}  
        else if (month4 === "04"){
            sum04_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}  
        else if (month4 === "05"){
            sum05_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}  
        else if (month4 === "06"){
            sum06_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}  
        else if (month4 === "07"){
            sum07_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}  
        else if (month4 === "08"){
            sum08_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}  
        else if (month4 === "09"){
            sum09_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}  
        else if (month4 === "10"){
            sum10_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])}  
        else if (month4 === "11"){
            sum11_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])} 
        else if (month4 === "12"){
            sum12_asia += parseInt(data4["Asia"][j]["Data"][i]["Number of fires"])} 
    }
  }

    asia_year = [sum2015_asia, sum2016_asia, sum2017_asia, sum2018_asia, sum2019_asia]
    asia_month = [sum01_asia, sum02_asia, sum03_asia, sum04_asia, sum05_asia, sum06_asia, sum07_asia, sum08_asia, sum09_asia, sum10_asia, sum11_asia, sum12_asia]

    //console.log(asia_year)

  //})





//###################getting NORTH AMERICA from JSON###########################

d3.json(url_north_america).then(function(data5) {
    
  for (var j = 0; j < data5["North America"].length; j++) {
    for (var i = 0; i < data5["North America"][j]["Data"].length; i++) { 
      var sample5 = data5["North America"][j]["Data"][i]["Date"]
      var date_list5 = sample5.split("-")
      year5 = date_list5[0]
      month5 = date_list5[1]
        if (year5 === "2015"){
          sum2015_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}
        else if (year5 === "2016"){
          sum2016_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}
        else if (year5 === "2017"){
          sum2017_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}
        else if (year5 === "2018"){
          sum2018_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}
        else if (year5 === "2019"){
          sum2019_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}
      
      if (month5 === "01"){
          sum01_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}
      else if (month5 === "02"){
          sum02_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}
      else if (month5 === "03"){
          sum03_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}  
      else if (month5 === "04"){
          sum04_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}  
      else if (month5 === "05"){
          sum05_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}  
      else if (month5 === "06"){
          sum06_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}  
      else if (month5 === "07"){
          sum07_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}  
      else if (month5 === "08"){
          sum08_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}  
      else if (month5 === "09"){
          sum09_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}  
      else if (month5 === "10"){
          sum10_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])}  
      else if (month5 === "11"){
          sum11_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])} 
      else if (month5 === "12"){
          sum12_north_america += parseInt(data5["North America"][j]["Data"][i]["Number of fires"])} 
  }
  }
  north_america_year = [sum2015_north_america, sum2016_north_america, sum2017_north_america, sum2018_north_america, sum2019_north_america]
  north_america_month = [sum01_north_america, sum02_north_america, sum03_north_america, sum04_north_america, sum05_north_america, sum06_north_america, sum07_north_america, sum08_north_america, sum09_north_america, sum10_north_america, sum11_north_america, sum12_north_america]

  //console.log(north_america_year)


//})




//###################getting SOUTH AMERICA from JSON###########################

d3.json(url_south_america).then(function(data6) {
    
  for (var j = 0; j < data6["South America"].length; j++) {
    for (var i = 0; i < data6["South America"][j]["Data"].length; i++) { 
      var sample6 = data6["South America"][j]["Data"][i]["Date"]
      var date_list6 = sample6.split("-")
      year6 = date_list6[0]
      month6 = date_list6[1]
        if (year6 === "2015"){
          sum2015_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}
        else if (year6 === "2016"){
          sum2016_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}
        else if (year6 === "2017"){
          sum2017_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}
        else if (year6 === "2018"){
          sum2018_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}
        else if (year6 === "2019"){
          sum2019_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}
      
      if (month6 === "01"){
          sum01_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}
      else if (month6 === "02"){
          sum02_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}
      else if (month6 === "03"){
          sum03_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}  
      else if (month6 === "04"){
          sum04_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}  
      else if (month6 === "05"){
          sum05_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}  
      else if (month6 === "06"){
          sum06_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}  
      else if (month6 === "07"){
          sum07_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}  
      else if (month6 === "08"){
          sum08_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}  
      else if (month6 === "09"){
          sum09_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}  
      else if (month6 === "10"){
          sum10_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])}  
      else if (month6 === "11"){
          sum11_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])} 
      else if (month6 === "12"){
          sum12_south_america += parseInt(data6["South America"][j]["Data"][i]["Number of fires"])} 
  }
  }
  south_america_year = [sum2015_south_america, sum2016_south_america, sum2017_south_america, sum2018_south_america, sum2019_south_america]
  south_america_month = [sum01_south_america, sum02_south_america, sum03_south_america, sum04_south_america, sum05_south_america, sum06_south_america, sum07_south_america, sum08_south_america, sum09_south_america, sum10_south_america, sum11_south_america, sum12_south_america]

  //console.log(south_america_year)


//})



var trace1 = {
  x: years,
  y: africa_year,
  type: "line",
  line: {color: 'rgb(111, 0, 255)', width: 3},
  marker: {color: 'rgb(111, 0, 255)',size: 12},
  name: 'Africa'
};

var trace2 = {
  x: years,
  y: asia_year,
  type: "line",
  line: {color: 'rgb(255, 162, 0)', width: 3},
  marker: {color: 'rgb(255, 162, 0)',size: 12},
  name: 'Asia'
};


var trace3 = {
  x: years,
  y: australia_year,
  type: "line",
  line: {color: 'rgb(242, 255, 0)', width: 3},
  marker: {color: 'rgb(242, 255, 0)',size: 12},
  name: "Australia"
};


var trace4 = {
  x: years,
  y: europe_year,
  type: "line",
  line: {color: 'rgb(38, 255, 0)', width: 3},
  marker: {color: 'rgb(38, 255, 0)',size: 12},
  name: "Europe"
};

var trace5 = {
  x: years,
  y: north_america_year,
  type: "line",
  line: {color: 'rgb(255, 0, 153)', width: 3},
  marker: {color: 'rgb(255, 0, 153)',size: 12},
  name: 'North America'
};


var trace6 = {
  x: years,
  y: south_america_year,
  type: "line",
  line: {color: 'rgb(255, 0, 0)', width: 3},
  marker: {color: 'rgb(255, 0, 0)',size: 12},
  name: "South America"
};




var datat = [trace1, trace2, trace3, trace4, trace5, trace6]

var layout = {
  title: "World: Yearly occurence of fires",
  xaxis: { title: "Year",
          //range: [2015, 2019],
          showgrid: true,
          gridwidth: 2,
          autotick: false,
          ticks: 'outside',
          showline: true,
          //plot_bgcolor: 'rgba(255, 0, 0)'
          colorway : ['#f3cec9']

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


//console.log(datat);

Plotly.newPlot("plot", datat, layout);


})
})
})
})
})
})


/*console.log(south_america_year)
console.log(north_america_year)
console.log(asia_year)
console.log(africa_year)
console.log(europe_year)
console.log(australia_year)
*/


//###############################dropdown event###############################################
//############################################################################################
d3.selectAll("#selDataset").on("change", getData);
d3.selectAll("#selDataset1").on("change", getData);


function getData() {

      

  var dropdownMenu = d3.select("#selDataset");
  var dataset = dropdownMenu.property("value");

  var dropdownMenu1 = d3.select("#selDataset1");
  var dataset1 = dropdownMenu1.property("value");  

  //console.log(dataset);

  
  //var x = [];
  //var y = [];
  //var data = [trace]
  //var update = [];

//########Year option with North America############# 

  if (dataset === 'Yearly' && dataset1 === 'North-America') {

      

      //x = years
      //y = north_america_year

      var trace = {
        x: years,
        y: north_america_year,
        type: "line",
        line: {color: 'rgb(255, 0, 153)', width: 3},
        marker: {color: 'rgb(255, 0, 153)',size: 12},
        name: 'North America'
      };


      var data = [trace]

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
      
      //Plotly.restyle("plot", "x", [x]);
      //Plotly.restyle("plot", "y", [y]);
      //Plotly.relayout("plot", data);
      //Plotly.relayout("plot", update);
      Plotly.newPlot("plot", data, update);

  }


//##########Month option with North America######################  
  
  if (dataset === 'Monthly' && dataset1 === 'North-America') {



      //x = months
      //y = north_america_month

      var trace = {
        x: months,
        y: north_america_month,
        type: "line",
        line: {color: 'rgb(255, 0, 153)', width: 3},
        marker: {color: 'rgb(255, 0, 153)',size: 12},
        name: 'North America'
      };

      var data = [trace]

      var update = {
        title: "North America: Monthly occurence of fires",
        xaxis: { title: "Month",
                //range: [2015, 2019],
                showgrid: true,
                gridwidth: 2,
                //autotick: false,
                ticks: 'outside',
                showline: true,
               // tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
               // ticktext:["January", "February", "March", "April", "May", "June", "July", 
               //           "August", "September", "October", "November", "December"],
                
      
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
      
      //Plotly.restyle("plot", "x", [x]);
      //Plotly.restyle("plot", "y", [y]);
      //Plotly.relayout("plot", update);

      Plotly.newPlot("plot", data, update);
  
  }


//##################Year option with South America#####################  

  if (dataset === 'Yearly' && dataset1 === 'South-America') {


    

      //x = years
      //y = south_america_year

      var trace = {
        x: years,
        y: south_america_year,
        type: "line",
        line: {color: 'rgb(255, 0, 0)', width: 3},
        marker: {color: 'rgb(255, 0, 0)',size: 12},
        name: "South America"
      };


      var data = [trace] 

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
      
      //Plotly.restyle("plot", "x", [x]);
      //Plotly.restyle("plot", "y", [y]);
      //Plotly.relayout("plot", update)
      Plotly.newPlot("plot", data, update);
  
  }


//##########Month option with South America###################  

  if (dataset === 'Monthly' && dataset1 === 'South-America') {



    //x = months
    //y = south_america_month

    var trace = {
      x: months,
      y: south_america_month,
      type: "line",
      line: {color: 'rgb(255, 0, 0)', width: 3},
      marker: {color: 'rgb(255, 0, 0)',size: 12},
      name: "South America"
    };


    var data = [trace] 

    var update = {
      title: "South America: Monthly occurence of fires",
      xaxis: { title: "Month",
              //range: [2015, 2019],
              showgrid: true,
              gridwidth: 2,
              //autotick: false,
              ticks: 'outside',
              showline: true,
              //tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
              //ticktext:["January", "February", "March", "April", "May", "June", "July", 
                  //      "August", "September", "October", "November", "December"],
              
    
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
      
      //Plotly.restyle("plot", "x", [x]);
      //Plotly.restyle("plot", "y", [y]);
      //Plotly.relayout("plot", update);
      Plotly.newPlot("plot", data, update);
  
  }

  //##################Year option with Europe#####################  

  if (dataset === 'Yearly' && dataset1 === 'Europe') {

  

    //x = years
    //y = europe_year

    var trace = {
      x: years,
      y: europe_year,
      type: "line",
      line: {color: 'rgb(38, 255, 0)', width: 3},
      marker: {color: 'rgb(38, 255, 0)',size: 12},
      name: "Europe"
    };

    var data = [trace] 


    var update = {
      title: "Europe: Yearly occurence of fires",
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
    
    //Plotly.restyle("plot", "x", [x]);
    //Plotly.restyle("plot", "y", [y]);
    //Plotly.relayout("plot", update);

    Plotly.newPlot("plot", data, update);

}


//##########Month option with Europe###################  

if (dataset === 'Monthly' && dataset1 === 'Europe') {



  //x = months
  //y = europe_month

  var trace = {
      x: months,
      y: europe_month,
      type: "line",
      line: {color: 'rgb(38, 255, 0)', width: 3},
      marker: {color: 'rgb(38, 255, 0)',size: 12},
      name: "Europe"
    };

    var data = [trace] 



  var update = {
    title: "Europe: Monthly occurence of fires",
    xaxis: { title: "Month",
            //range: [2015, 2019],
            showgrid: true,
            gridwidth: 2,
            //autotick: false,
            ticks: 'outside',
            showline: true,
            //tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
            //ticktext:["January", "February", "March", "April", "May", "June", "July", 
             //         "August", "September", "October", "November", "December"],
            
  
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
    
    //Plotly.restyle("plot", "x", [x]);
    //Plotly.restyle("plot", "y", [y]);
    //Plotly.relayout("plot", update);

    Plotly.newPlot("plot", data, update);
  
}



//##################Year option with Asia#####################  

if (dataset === 'Yearly' && dataset1 === 'Asia') {

  

  //x = years
  //y = asia_year

  var trace = {
    x: years,
    y: asia_year,
    type: "line",
    line: {color: 'rgb(255, 162, 0)', width: 3},
    marker: {color: 'rgb(255, 162, 0)',size: 12},
    name: 'Asia'
  };

  var data = [trace]


  var update = {
    title: "Asia: Yearly occurence of fires",
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
  
  //Plotly.restyle("plot", "x", [x]);
  //Plotly.restyle("plot", "y", [y]);
  //Plotly.relayout("plot", update);
  Plotly.newPlot("plot", data, update);

}


//##########Month option with Asia###################  

if (dataset === 'Monthly' && dataset1 === 'Asia') {



//x = months
//y = asia_month

var trace = {
  x: months,
  y: asia_month,
  type: "line",
  line: {color: 'rgb(255, 162, 0)', width: 3},
  marker: {color: 'rgb(255, 162, 0)',size: 12},
  name: 'Asia'
};

var data = [trace]

var update = {
  title: "Asia: Monthly occurence of fires",
  xaxis: { title: "Month",
          //range: [2015, 2019],
          showgrid: true,
          gridwidth: 2,
          //autotick: false,
          ticks: 'outside',
          showline: true,
          //tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
          //ticktext:["January", "February", "March", "April", "May", "June", "July", 
           //         "August", "September", "October", "November", "December"],
          

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
  
  //Plotly.restyle("plot", "x", [x]);
  //Plotly.restyle("plot", "y", [y]);
  //Plotly.relayout("plot", update);
  Plotly.newPlot("plot", data, update);

}





  //##################Year option with Africa#####################  

  if (dataset === 'Yearly' && dataset1 === 'Africa') {


    //x = years
    //y = africa_year

    var trace = {
      x: years,
      y: africa_year,
      type: "line",
      line: {color: 'rgb(111, 0, 255)', width: 3},
      marker: {color: 'rgb(111, 0, 255)',size: 12},
      name: 'Africa'
    };

    var data = [trace]


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
    
    //Plotly.restyle("plot", "x", [x]);
    //Plotly.restyle("plot", "y", [y]);
    //Plotly.relayout("plot", update);

    Plotly.newPlot("plot", data, update);
  
}



//##########Month option with Africa###################  

if (dataset === 'Monthly' && dataset1 === 'Africa') {


  //x = months
  //y = africa_month

  var trace = {
      x: months,
      y: africa_month,
      type: "line",
      line: {color: 'rgb(111, 0, 255)', width: 3},
      marker: {color: 'rgb(111, 0, 255)',size: 12},
      name: 'Africa'
    };

    var data = [trace]



  var update = {
    title: "Africa: Monthly occurence of fires",
    xaxis: { title: "Month",
            //range: [2015, 2019],
            showgrid: true,
            gridwidth: 2,
            //autotick: false,
            ticks: 'outside',
            showline: true,
            //tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
            //ticktext:["January", "February", "March", "April", "May", "June", "July", 
            //          "August", "September", "October", "November", "December"],
            
  
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
    
    //Plotly.restyle("plot", "x", [x]);
    //Plotly.restyle("plot", "y", [y]);
    //Plotly.relayout("plot", update);

    Plotly.newPlot("plot", data, update);
  
}



  //##################Year option with Australia#####################  

  if (dataset === 'Yearly' && dataset1 === 'Australia') {


    //x = years
    //y = australia_year

    var trace = {
      x: years,
      y: australia_year,
      type: "line",
      line: {color: 'rgb(242, 255, 0)', width: 3},
      marker: {color: 'rgb(242, 255, 0)',size: 12},
      name: "Australia"
    };


    var data = [trace]

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
    
    //Plotly.restyle("plot", "x", [x]);
    //Plotly.restyle("plot", "y", [y]);
    //Plotly.relayout("plot", update);

    Plotly.newPlot("plot", data, update);
  
}


//##########Month option with Australia###################  

if (dataset === 'Monthly' && dataset1 === 'Australia') {


  //x = months
  //y = australia_month


  var trace = {
    x: months,
    y: australia_month,
    type: "line",
    line: {color: 'rgb(242, 255, 0)', width: 3},
    marker: {color: 'rgb(242, 255, 0)',size: 12},
    name: "Australia"
  };


  var data = [trace]


  var update = {
    title: "Australia: Monthly occurence of fires",
    xaxis: { title: "Month",
            //range: [2015, 2019],
            showgrid: true,
            gridwidth: 2,
            //autotick: false,
            ticks: 'outside',
            showline: true,
            //tickvals:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
            //ticktext:["January", "February", "March", "April", "May", "June", "July", 
              //        "August", "September", "October", "November", "December"],
            
  
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
    
    //Plotly.restyle("plot", "x", [x]);
    //Plotly.restyle("plot", "y", [y]);
    //Plotly.relayout("plot", update);
    Plotly.newPlot("plot", data, update);

  
}

//###################################Year option with All continents######################################################

if (dataset === 'Yearly' && dataset1 === 'All') {

      

  //x = years
  //y = north_america_year

  var trace1 = {
    x: years,
    y: africa_year,
    type: "line",
    line: {color: 'rgb(111, 0, 255)', width: 3},
    marker: {color: 'rgb(111, 0, 255)',size: 12},
    name: 'Africa'
  };
  
  var trace2 = {
    x: years,
    y: asia_year,
    type: "line",
    line: {color: 'rgb(255, 162, 0)', width: 3},
    marker: {color: 'rgb(255, 162, 0)',size: 12},
    name: 'Asia'
  };
  
  
  var trace3 = {
    x: years,
    y: australia_year,
    type: "line",
    line: {color: 'rgb(242, 255, 0)', width: 3},
    marker: {color: 'rgb(242, 255, 0)',size: 12},
    name: "Australia"
  };
  
  
  var trace4 = {
    x: years,
    y: europe_year,
    type: "line",
    line: {color: 'rgb(38, 255, 0)', width: 3},
    marker: {color: 'rgb(38, 255, 0)',size: 12},
    name: "Europe"
  };
  
  var trace5 = {
    x: years,
    y: north_america_year,
    type: "line",
    line: {color: 'rgb(255, 0, 153)', width: 3},
    marker: {color: 'rgb(255, 0, 153)',size: 12},
    name: 'North America'
  };
  
  
  var trace6 = {
    x: years,
    y: south_america_year,
    type: "line",
    line: {color: 'rgb(255, 0, 0)', width: 3},
    marker: {color: 'rgb(255, 0, 0)',size: 12},
    name: "South America"
  };
  
  
  
  var data = [trace1, trace2, trace3, trace4, trace5, trace6]
  
  var update = {
    title: "World: Yearly occurence of fires",
    xaxis: { title: "Year",
            //range: [2015, 2019],
            showgrid: true,
            gridwidth: 2,
            autotick: false,
            ticks: 'outside',
            showline: true,
            //plot_bgcolor: 'rgba(255, 0, 0)'
            colorway : ['#f3cec9']
  
  },
    yaxis: { title: "# of fires" ,
            //rangemode:'tozero',
            autorange: true,
            showgrid: true,
            gridwidth: 2,
            ticks: 'outside',
            showline: true,
  }
  //Plotly.restyle("plot", "x", [x]);
  //Plotly.restyle("plot", "y", [y]);
}
  //Plotly.relayout("plot", data);
  //Plotly.relayout("plot", update);
  Plotly.newPlot("plot", data, update);

}

  
//###################################Month option with All continents######################################################

  //x = months
  //y = north_america_month
  if (dataset === 'Monthly' && dataset1 === 'All') {

      

    //x = years
    //y = north_america_year
  
    var trace1 = {
      x: months,
      y: africa_month,
      type: "line",
      line: {color: 'rgb(111, 0, 255)', width: 3},
      marker: {color: 'rgb(111, 0, 255)',size: 12},
      name: 'Africa'
    };
    
    var trace2 = {
      x: months,
      y: asia_month,
      type: "line",
      line: {color: 'rgb(255, 162, 0)', width: 3},
      marker: {color: 'rgb(255, 162, 0)',size: 12},
      name: 'Asia'
    };
    
    
    var trace3 = {
      x: months,
      y: australia_month,
      type: "line",
      line: {color: 'rgb(242, 255, 0)', width: 3},
      marker: {color: 'rgb(242, 255, 0)',size: 12},
      name: "Australia"
    };
    
    
    var trace4 = {
      x: months,
      y: europe_month,
      type: "line",
      line: {color: 'rgb(38, 255, 0)', width: 3},
      marker: {color: 'rgb(38, 255, 0)',size: 12},
      name: "Europe"
    };
    
    var trace5 = {
      x: months,
      y: north_america_month,
      type: "line",
      line: {color: 'rgb(255, 0, 153)', width: 3},
      marker: {color: 'rgb(255, 0, 153)',size: 12},
      name: 'North America'
    };
    
    
    var trace6 = {
      x: months,
      y: south_america_month,
      type: "line",
      line: {color: 'rgb(255, 0, 0)', width: 3},
      marker: {color: 'rgb(255, 0, 0)',size: 12},
      name: "South America"
    };
    
    
    
    var data = [trace1, trace2, trace3, trace4, trace5, trace6]
    
    var update = {
      title: "World: Monthly occurence of fires",
      xaxis: { title: "Month",
              //range: [2015, 2019],
              showgrid: true,
              gridwidth: 2,
              autotick: false,
              ticks: 'outside',
              showline: true,
              //plot_bgcolor: 'rgba(255, 0, 0)'
              colorway : ['#f3cec9']
    
    },
      yaxis: { title: "# of fires" ,
              //rangemode:'tozero',
              autorange: true,
              showgrid: true,
              gridwidth: 2,
              ticks: 'outside',
              showline: true,
    }
    
  }
    //Plotly.restyle("plot", "x", [x]);
    //Plotly.restyle("plot", "y", [y]);
    //Plotly.relayout("plot", data);
    //Plotly.relayout("plot", update);
    Plotly.newPlot("plot", data, update);
  
  }


}
}
        

init()
