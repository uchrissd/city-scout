//API call for currency exchange
var apiKEY = "9434dac94bff4079b3e8ae867f65cdda";
console.log(apiKEY);
var queryURL = "https://openexchangerates.org/api/latest.json?app_id=" + apiKEY;
console.log(queryURL);

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

//API call for continents
var teleportAPIkey = "";
var continentQueryURL = "https://api.teleport.org/api/continents/";

$.ajax({
  url: continentQueryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

//

function RenderContinenets() {
  var contArray = [
    "Africa",
    "Asia",
    "Antartica",
    "Australia",
    "Europe",
    "North America",
    "South America"
  ];
  for (var i = 0; i < contArray.length; i++) {
    console.log(i);
    var cont = $("<p>" + contArray[i] + "</p>");
    $("#cont-div").append(cont);
  }
}
RenderContinenets();
