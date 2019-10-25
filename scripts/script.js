var apiKEY = "9434dac94bff4079b3e8ae867f65cdda";
var queryURL = "https://openexchangerates.org/api/latest.json?app_id=" + apiKEY;
console.log(queryURL);

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
