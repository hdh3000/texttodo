//intial package dependencies
var client = require('twilio')('AC06255c7484e75adfd67e8f16c75e10b7', 'ffe28287216b494c5bf75db75c1439aa');
var http = require("http");
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var urlParser = require('url');

//file dependencies
//var entries = require('./data.js');

//get data on load
//entries.initialize();


//module variables for server config
var port = process.env.PORT || 5000;
var ip = process.env.IP || "127.0.0.1";

//dealing with cors
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/newtodo', function(req, res){
  // send back twimil
     // Create a TwiML response
    res.send('thanks!');

    console.log('---------------------------------');
    console.log(req.body);
    // console.log(req.body.Body);
    // console.log(req.body.body);
    // console.log(req.body.params);
    console.log('---------------------------------');
    console.log(urlParser.parse(req.url));

    
      
  //   res = new twilio.TwimlResponse();

  //   res.say({voice:'woman'}, 'ahoy hoy! Testing Twilio and node.js');
    
  //   //write a status header
  //   res.writeHead(200, {
  //       'Content-Type':'text/xml'
  //   });

  //   //Render the TwiML document using "toString"
  //   res.end(res.toString());

  // //

});




//returns a to do
app.get('/tobedone', function(request, response){
  client.sendMessage({
    to:'+16129108918',
    from: '+17639511825', 
    body: 'word to your mother.' 
    }, function(err, responseData) { 
      if (err) {
        console.log(err);
    }

  });
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