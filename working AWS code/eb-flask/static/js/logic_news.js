// condition for dropdown menu
var continents = [
  {"Name": "Africa", "Location": [7.026601, 17.517169], "Zoom": 5},
  {"Name": "Asia", "Location": [24.704768, 92.144528], "Zoom": 5},
  {"Name": "Australia", "Location": [-25.985928, 133.881768], "Zoom": 5},
  {"Name": "Europe", "Location": [46.860477, 17.705424], "Zoom": 5},
  {"Name": "North America", "Location": [33.584754, -91.103957], "Zoom": 5},
  {"Name": "South America", "Location": [3.376254, -61.164163], "Zoom": 5}
];

url = "http://127.0.0.1:5000/api3"



d3.json(url, function(data) {
  tweets=[]

  for (i = 0; i < data.url[0].url.length; i++) {
    var sliced=data.url[0].url[i].split("status/")
    var sliced2=sliced[1].split('?ref')[0]
    tweets.push(sliced2)
    // console.log(sliced2)
    
      // console.log(tweets[0])
  };

    function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  };

  var unique = tweets.filter(onlyUnique);

  for (i = 0; i < unique.length; i++) {

  twttr.widgets.createTweet(
    unique[i],
    document.getElementById('twitter-feed'),
    {theme: 'dark'}
    
  
  )};

   console.log(unique)

});

