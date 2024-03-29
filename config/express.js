var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

//app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
	.include('properties')
	.then('helpers')
	.then('request')
	.then('services')
	.then('facade')
	.then('controller')
	.into(app);

module.exports = app;
