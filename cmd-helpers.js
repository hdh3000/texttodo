var qxTest = /^qx/;
var qtTest = /^qt/;
var qnTest = /^qn/;


var read = function(message){
  var Body = message.Body;
  //commands in abc order
  if(qnTest.test(body)) {
    return "qn";

  } else if(qtTest.Test(body)) {
    return "qt";

  } else if(qxTest.Test(body)) {
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