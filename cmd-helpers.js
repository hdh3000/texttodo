var queryString = require('querystring');

var commands = /^qn|^qt|^qx/i; // regexp which contains all command statements

var parseCmd = function(message){
  var cmd = message.match(commands)[0].toLowerCase();
  return cmd || 'qn';
};

var removeCmd = function(string){
  string = string.replace(commands, ''); // removes command text
  string = string.replace(/^\s/, ''); //removes leading whitespace
  return string;
};


var parseMessage = function (body){
  body.cmd = parseCmd(body.Body);
  body.Body = removeCmd(body.Body);
  return body;
};


// exports.parseCmd = parseCmd;
// exports.removeCmd = removeCmd;
exports.parseMessage = parseMessage;