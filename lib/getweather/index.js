var HTTP = require("http");

var GetWeather = module.exports = function(zip, callback) {
	var self = this;

	var wundergroundURL = 'http://www.wunderground.com/cgi-bin/findweather/getForecast?query=' + encodeURIComponent(zip) + "&MR=1";
	HTTP.get(wundergroundURL, function(response){
		var body = "";
		response.addListener('data', function(chunk) { body += chunk; });
		response.addListener('end', function() {
			var searchResults = JSON.parse(body);
			var results = searchResults.responseData.results;

			console.log(results);
		});
	});
};
