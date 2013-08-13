var Utils = require("util");
var File = require("fs");
var JSONSaver = require("../jsonsaver");

var DevSayServer = module.exports = function(filename) {
	this.devSayFile = new JSONSaver(filename);
};

DevSayServer.prototype.devSay = function() {
	var quotesArray = this.devSayFile.object.quotes;
	
	var getAQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
	
	return getAQuote;
};