var commands = /^qn|^qt|^qx/i; // regexp which contains all command statements
//Twilio
var twilio = require('twilio');
var client = twilio('AC06255c7484e75adfd67e8f16c75e10b7',
    'ffe28287216b494c5bf75db75c1439aa');

var parseCmd = function(message){
  var cmd = message.match(commands);
  if (cmd){
    return cmd[0].toLowerCase();
  } else return 'qn';
};

var removeCmd = function(string){
  string = string.replace(commands, ''); // removes command text
  //if nothing but a command is sent.
  if(string.length > 0) {
    string = string.replace(/^\s/, ''); //removes leading whitespace
  }
  return string;
};

var parseMessage = function (body){
  body.cmd = parseCmd(body.Body);
  body.Body = removeCmd(body.Body);
  return body;
};


var twimlResp = function(text){
   var resp = new twilio.TwimlResponse();
   resp.message(text);
   return resp.toString();
};


exports.parseMessage = parseMessage;
exports.twimlResp = twimlResp;