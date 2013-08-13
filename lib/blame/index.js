var Utils = require("util");
var File = require("fs");
var JSONSaver = require("../jsonsaver");

var BlameServer = module.exports = function(filename) {
	this.blameReasons = new JSONSaver(filename);
};

BlameServer.prototype.blame = function(text) {
	var reasonsArray = this.blameReasons.object.templates;
	
	var getAReason = reasonsArray[Math.floor(Math.random() * reasonsArray.length)].replace(/%text%/g, text);
	
	return getAReason;
};