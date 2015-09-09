//intial dependecies
var twilio = require('twilio')
var http = require("http");
var express = require('express');
var app = express()

//module variables for server config
var port = process.env.PORT || 5000;
var ip = process.env.IP || "127.0.0.1";




//basic server setup for http
var server = app.listen(port, function () {
  var host = ip;
  var port = server.address().port;
  
  console.log('Example app listening at http://%s:%s', host, port);
});