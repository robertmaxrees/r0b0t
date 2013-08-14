var Utils = require("util");
var File = require("fs");
var JSONSaver = require("../jsonsaver");

var quoteServer = module.exports = function(filename) {
	this.quotes = new JSONSaver(filename);
};

quoteServer.prototype.getQuote = function(text) {
	var quotesArray = this.quotes.object.collection;

	var getAQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

	if (typeof text !== 'undefined') {
		getAQuote = getAQuote.replace(/%text%/g, text)
	}

	return getAQuote;
};