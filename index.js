//intial package dependencies
var http = require("http");
var fs = require('fs');
var bodyParser = require('body-parser');
var client = require('twilio')(
    'AC06255c7484e75adfd67e8f16c75e10b7',
    'ffe28287216b494c5bf75db75c1439aa');
var app = require('express')();
var utils = require('./utils.js');
var auth = require('./auth.js');
var listHelpers = require('./list-helpers.js');

var port = process.env.PORT || 5000;
var ip = process.env.IP || "127.0.0.1";
var parser = bodyParser.urlencoded({ extended: false });

var cmdResponses = {
  "qn": 'func',
  "qt": 'func',
  "qx": 'func'
};



// //dealing with cors
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//handling get
app.get('/', function(req, resp){
  resp.write('working on it');
  resp.end();
});

//handling posts
app.post('/', parser, function(req, resp){
    var msg = utils.parseMessage(req.body);
    if(auth.canPost(msg.From, msg.To)) {
      cmdResponses[msg.cmd](req, resp);
      }
    }
);

//basic server setup for http
var server = app.listen(port, function () {
  var host = ip;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});










// 2015-09-10T05:16:40.055691+00:00 app[web.1]:   ToState: 'MN',
// 2015-09-10T05:16:40.055688+00:00 app[web.1]: { ToCountry: 'US',
// 2015-09-10T05:16:40.055692+00:00 app[web.1]:   SmsMessageSid: 'SM5a7a6b279cba1542558ed3e0dcd67365',
// 2015-09-10T05:16:40.055695+00:00 app[web.1]:   ToCity: 'MINNEAPOLIS',
// 2015-09-10T05:16:40.055694+00:00 app[web.1]:   NumMedia: '0',
// 2015-09-10T05:16:40.055697+00:00 app[web.1]:   FromZip: '55343',
// 2015-09-10T05:16:40.055698+00:00 app[web.1]:   SmsSid: 'SM5a7a6b279cba1542558ed3e0dcd67365',
// 2015-09-10T05:16:40.055700+00:00 app[web.1]:   FromState: 'MN',
// 2015-09-10T05:16:40.055701+00:00 app[web.1]:   SmsStatus: 'received',
// 2015-09-10T05:16:40.055703+00:00 app[web.1]:   FromCity: 'MINNEAPOLIS',
// 2015-09-10T05:16:40.055704+00:00 app[web.1]:   Body: 'Yooo',
// 2015-09-10T05:16:40.055705+00:00 app[web.1]:   FromCountry: 'US',
// 2015-09-10T05:16:40.055707+00:00 app[web.1]:   To: '+17639511825',
// 2015-09-10T05:16:40.055708+00:00 app[web.1]:   ToZip: '55401',
// 2015-09-10T05:16:40.055709+00:00 app[web.1]:   NumSegments: '1',
// 2015-09-10T05:16:40.055711+00:00 app[web.1]:   MessageSid: 'SM5a7a6b279cba1542558ed3e0dcd67365',
// 2015-09-10T05:16:40.055712+00:00 app[web.1]:   AccountSid: 'AC06255c7484e75adfd67e8f16c75e10b7',
// 2015-09-10T05:16:40.055713+00:00 app[web.1]:   From: '+16129108918',
// 2015-09-10T05:16:40.055714+00:00 app[web.1]:   ApiVersion: '2010-04-01' }







  // buffer = "";
  
  // req.on('data', function(data){
  //   buffer = buffer + data.toString();
  // });

  // req.on('end', function(){













