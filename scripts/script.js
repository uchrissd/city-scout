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

var settings2 = {
  "async": true,
  "crossDomain": true,
  "url": "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&countryIds=us&sort=population",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    "x-rapidapi-key": "6fa73b7e3dmsh2c5c461c7d26929p191785jsne3190cf9f4b1"
  }
}

$.ajax(settings2).done(function (response) {
  console.log(response);
});

var continentsObj = { AF: 'Africa', AN: 'Antarctica', AS: 'Asia', EU: 'Europe', NA: 'North America', OC: 'Australia', SA: 'South America' }
var continentsObj = {
  AF: "Africa",
  AN: "Antarctica",
  AS: "Asia",
  EU: "Europe",
  NA: "North America",
  OC: "Australia",
  SA: "South America"
};
console.log(Object.keys(continentsObj));

function RenderContinents() {
  var contArray = Object.values(continentsObj);
  console.log(contArray);
  var contKeys = Object.keys(continentsObj);
  console.log(contKeys);
  var contList = $("<div>");
  contList.attr("aria-labelledby", "dropdownMenuButton");
  contList.attr("class", "dropdown-menu");
  for (var continentCode in continentsObj) {
    console.log("code", continentCode);
    console.log("continent", continentsObj[continentCode]);
    var cont = $("<a href='#'>" + continentsObj[continentCode] + "</a>");
    cont.attr("class", "dropdown-item continent-drop");
    cont.attr("data-contGeoName", continentCode);
    contList.append(cont);
  }
  $("#continent").append(contList);
}
RenderContinents();
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
RenderContinents();

$("li").on("click", function (event) {
  console.log(event.target.attr("data-geoname"));
  console.log(event);
});

//JQuery get variables
var startContainer = $("#start-container");
var dropDownContainer = $("#dropdown-container");

$(".start-btn").on("click", function () {
  startContainer.attr("style", "display:none");
  dropDownContainer.attr("style", "display:block");
});

var contInstructions = $("<h3>" + "Choose a continent: " + "</h3>");
contInstructions.attr("id", "instruc-1");
contInstructions.attr("style", "display:block");
$("#instructions").append(contInstructions);

// saving continent user selected
var continentChosen;

$(".continent-drop").on("click", function () {
  continentChosen = $(this).attr("data-contgeoname");
  console.log(continentChosen);

  var countryUrl =
    "https://api.teleport.org/api/continents/geonames:" +
    continentChosen +
    "/countries/";

  $.ajax({
    url: countryUrl,
    method: "GET"
  }).then(function (countries) {
    console.log(countries);
    console.log(countries._links["country:items"][1]);
    var countryList = $("<div>");
    countryList.attr("aria-labelledby", "dropdownMenuButton");
    countryList.attr("class", "dropdown-menu");
    for (var i = 0; i < countries.count; i++) {
      console.log(i);
      var country = $(
        "<a href='#'>" + countries._links["country:items"][i].name + "</a>"
      );
      country.attr("class", "dropdown-item country-drop");
      console.log(country);
      countryList.append(country);
    }
    var Countries = "Countries";
    var countryBtn = dropDownBtn(Countries);
    $("#country").append(countryBtn);
    $("#country").append(countryList);
  });
  $("#instruc-1").attr("style", "display:none");
  var countryInstructions = $("<h3>" + "Choose a country: " + "</h3>");
  countryInstructions.attr("id", "instruc-2");
  countryInstructions.attr("style", "display:block");
  $("#instructions").append(countryInstructions);
});

function dropDownBtn(name) {
  var dropBtn = $("<button>");
  dropBtn.attr("class", "btn btn-secondary dropdown-toggle");
  dropBtn.attr("type", "button");
  dropBtn.attr("id", "dropdownMenuButton");
  dropBtn.attr("data-toggle", "dropdown");
  dropBtn.attr("aria-haspopup", "true");
  dropBtn.attr("aria-expanded", "false");
  dropBtn.text(name);
  return dropBtn;
}

//Function for city-facts

function cityFacts() {
  var citySearch = "https://api.teleport.org/api/cities/?search=london";

  $.ajax({
    url: citySearch,
    method: "GET"
  }).then(function (cityResponse) {
    var cityGeoId =
      cityResponse._embedded["city:search-results"][0]._links["city:item"].href;
    console.log("this is the city id link: ", cityGeoId);

    var cityFactsURL = cityGeoId;

    $.ajax({
      url: cityFactsURL,
      method: "GET"
    }).then(function (cityFactsResponse) {
      var cityFacts = cityFactsResponse;
      console.log("this is the city facts: ", cityFacts);
    });
  });
}
cityFacts();
