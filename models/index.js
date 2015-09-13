//mongo configs
var mongo = require('mongodb');
var uri = 'mongodb://heroku_j3rmv3fd:cfkmsvas7355h5l3af766qj9ar@ds033828.mongolab.com:33828/heroku_j3rmv3fd';

//helpers
var help = require("./data-helpers.js");

// reference for model structure:
// class === "todos";

// {
//   "_id": "twilio number",
//   "current to-do" : "{todo object}",
//   "items": 
//     [ 
//       { 
//         "text"  : "something to complete", 
//         "created-at" : "some-date", 
//         "complete" : "true / false"
//       } 
//     ]
//  }

// add a new to do
var qn = function(msg, callBack){
  help.newConn(function(db){
   //code breaks here
    var todo = help.todoObj(msg);
    db.collection.update(
      { "_id": msg.To },
      { $push : {'items': todo } },
      function(err, result) {
        if(err) { throw err ;}
        console.log("result");
      }
    );
  });
};



  //put new to-do in list
  // if current to do is empty, set to current to-do
  // call callback on new msg obj

var qx = function(callBack){};
// complete current to do
    // retrieve current to do from list
      // mark complete
      // insert at end of list
    // set new current to do
    // call callback current-to-do obj

var qt = function(callBack){};
// get current to do
  //retrive current to do
  // call callback on current to do


var qa = function(callBack){};
// get full list


exports.qn = qn;




