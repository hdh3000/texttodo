var qxTest = /^qx/;
var qtTest = /^qt/;
var qnTest = /^qn/;


var read = function(message){
  var Body = message.Body;
  //commands in abc order
  if(qnTest.test(Body)) {
    return "qn";

  } else if(qtTest.test(Body)) {
    return "qt";

  } else if(qxTest.test(Body)) {
    return "qx";
    
  } else {
    //defaults to adding a new to-do if no command is given
    return "qn"; 
  }

};

var removecmd = function(item){
  //TO-DO implement to strip command phrase off...
  return item;
};


exports.read = read;
exports.removecmd = removecmd;