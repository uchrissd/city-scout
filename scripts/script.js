//API call for currency exchange
var apiKEY = "9434dac94bff4079b3e8ae867f65cdda";
console.log(apiKEY);
var queryURL = "https://openexchangerates.org/api/latest.json?app_id=" + apiKEY;
console.log(queryURL);

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
});

//API call for continents
var teleportAPIkey = "";
var continentQueryURL = "https://api.teleport.org/api/continents/";

$.ajax({
  url: continentQueryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
});

//

// //API call for cities
// var cityQueryURL = "https://wft-geo-db.p.mashape.com/v1/geo/cities";

// $.ajax({
//   url: cityQueryURL,
//   method: "GET"
// }).then(function (response) {
//   console.log(response);
// });
// 6fa73b7e3dmsh2c5c461c7d26929p191785jsne3190cf9f4b1
// //

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://andruxnet-world-cities-v1.p.rapidapi.com/?query=france&searchby=country",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "andruxnet-world-cities-v1.p.rapidapi.com",
    "x-rapidapi-key": "6fa73b7e3dmsh2c5c461c7d26929p191785jsne3190cf9f4b1"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});


var continentsObj = { AF: 'Africa', AN: 'Antarctica', AS: 'Asia', EU: 'Europe', NA: 'North America', OC: 'Australia', SA: 'South America' }
console.log(Object.keys(continentsObj));

function RenderContinenets() {
  var contArray = Object.values(continentsObj)
  console.log(contArray)
  var contKeys = Object.keys(continentsObj)
  console.log(contKeys)
  for (var continentCode in continentsObj) {
    console.log("code", continentCode)
    console.log("continent", continentsObj[continentCode])
    var contList = $('<ul>')
    $("#continent").append(contList);
    var cont = $("<li>" + continentsObj[continentCode] + "</li>").attr('data-contGeoName', continentCode)
    $("#continent").append(cont);
  }
}
RenderContinenets();
$("li").on("click", function (event) {
  console.log($(this).attr('data-GeoName'))
  console.log(event)
})
// function RenderCities() {
//   var cityArray = Object.values(citiesObj)
//   console.log(contArray)
//   var contKeys = Object.keys(citiesObj)
//   console.log(contKeys)
//   for (var continentCode in citiesObj) {
//     console.log("code", continentCode)
//     console.log("continent", citiesObj[continentCode])
//     var contList = $('<ul>')
//     $("#continent").append(contList);
//     var cont = $("<li>" + citiesObj[continentCode] + "</li>").attr('data-contGeoName', continentCode)
//     $("#continent").append(cont);
//   }
// }
// RenderCities();
// $("li").on("click", function (event) {
//   console.log($(this).attr('data-GeoName'))
//   console.log(event)
// })
