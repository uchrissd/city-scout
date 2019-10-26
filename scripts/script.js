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
  console.log(event.target.attr('data-geoname'))
  console.log(event)
})

//JQuery get variables
var startContainer = $("#start-container");
var dropDownContainer = $("#dropdown-container");

$(".start-btn").on("click", function () {
  startContainer.attr("style","display:none");
  dropDownContainer.attr("style","display:block");
})