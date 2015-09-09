//intial package dependencies
var client = require('twilio')('AC06255c7484e75adfd67e8f16c75e10b7', 'ffe28287216b494c5bf75db75c1439aa')
var http = require("http");
var express = require('express');
var app = express()
// var path = require('path');
// var fs = require('fs');

//file dependencies
//var entries = require('./data.js');

//get data on load
//entries.initialize();


//module variables for server config
var port = process.env.PORT || 5000;
var ip = process.env.IP || "127.0.0.1";


app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//adds a new to do
app.post('/newtodo', function(response, request){
  client.sendMessage({
    to:'+16129108918', // Any number Twilio can deliver to
    from: '+17639511825', // A number you bought from Twilio and can use for outbound communication
    body: 'yooooooooo.' // body of the SMS message
    }, function(err, responseData) { //this function is executed when a response is received from Twilio
      if (err) { // "err" is an error received during the request, if any
        console.log(err);
    }
  });

});

//returns a to do
app.get('/tobedone', function(response, request){
  client.sendMessage({
    to:'+16129108918', // Any number Twilio can deliver to
    from: '+17639511825', // A number you bought from Twilio and can use for outbound communication
    body: 'word to your mother.' // body of the SMS message
    }, function(err, responseData) { //this function is executed when a response is received from Twilio
      if (err) { // "err" is an error received during the request, if any
        console.log(err);
    }
  });

  //user requests a to do

  //goes to db and loads latest to-do

  //responswith that todo

});

//removes a done to-do
app.post('/tobedone', function(response, request){
  //users posts a to do is done

  //goes to db and pops to do

  //returns message including done to do


});


//basic server setup for http
var server = app.listen(port, function () {
  var host = ip;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});