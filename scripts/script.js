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

var continentsObj = { AF: 'Africa', AN: 'Antarctica', AS: 'Asia', EU: 'Europe', NA: 'North America', OC: 'Australia', SA: 'South America' }
console.log(Object.keys(continentsObj));

function RenderContinenets() {
  var contArray = Object.values(continentsObj)
  console.log(contArray)
  for (var i = 0; i < contArray.length; i++) {
    console.log(i);
    var contList = $('<ul>')
    $("#continent").append(contList);
    var cont = $("<li>" + contArray[i] + "</li>");
    $("#continent").append(cont);
  }
}
RenderContinenets();
