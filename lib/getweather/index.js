var HTTP = require("http");
var fs = require("fs");
var JSONSaver = require("../jsonsaver");

var weatherDataServer = module.exports = function(filename) {
	//this.weatherData = fs.readFileSync(filename);
}

weatherDataServer.prototype.GetWeather = function(zip, callback) {
	var self = this;
	console.log(wunderapikey)
	var wundergroundURL = 'http://api.wunderground.com/api/' + wunderapikey + '/conditions/q/CA/' + zip + ".json";
	/*HTTP.get(wundergroundURL, function(response){
		var currentWeather = "";
		response.addListener('data', function(chunk) { currentWeather += chunk; });
		response.addListener('end', function() {
			var currConditions = JSON.parse(currentWeather);
			//var results = currentWeather.object.current_observation.display_location.state_name;

			console.log(currConditions.current_observation.temp_f);
		});
	});
	*/
};
	