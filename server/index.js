var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('./'));

app.get('/', function(req, res) {
	res.sendfile('./main.html');
});

app.listen(80, function(){
	console.log("Serve is listening!");
});
