var commands = /^qn|^qt|^qx/i; // regexp which contains all command statements

var parseCmd = function(message){
  var cmd = message.match(commands);
  if (cmd){
    return cmd[0].toLowerCase();
  } else return 'qn';
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


exports.parseMessage = parseMessage;