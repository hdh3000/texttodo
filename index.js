//core
var http = require("http");
var fs = require('fs');

//express + middleware
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({ extended: false });
var app = require('express')();

//helpers
var utils = require('./helpers/utils.js');
var auth = require('./helpers/auth.js');
// var comdExec = require('./helpers/cmd-executers');

//database
var db = require('./models');

//routing specific commands
var cmdRoutes= {
  "qn" : db.qn,
  "qt" : db.qt,
  "qx" : db.qx,
  "qa" : db.qa
};

//handling posts
app.post('/', parser, function(req, resp){
    var msg = utils.parseMessage(req.body);
    var cmd = msg.cmd;
    if(auth.canPost(msg.From, msg.To)) {
          cmdRoutes[cmd](msg , resp);
      }
    }
);

//handling gets
app.get('/', function(req, resp){
  resp.write('post till i die');
  resp.end();
});

//running the server
var port = process.env.PORT || 5000;
var ip = process.env.IP || "127.0.0.1";

var server = app.listen(port, function () {
  var host = ip;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});












