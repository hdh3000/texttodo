//mongo configs
var mongo = require('mongodb');
var uri = 'mongodb://heroku_j3rmv3fd:cfkmsvas7355h5l3af766qj9ar@ds033828.mongolab.com:33828/heroku_j3rmv3fd';
//helpers
var help = require("./data-helpers.js");
var utils = require("../helpers/utils.js");

// reference for model structure:
// class === "todos";
// { 
//   "num" : "some number"
//   "text"  : "something to complete", 
//   "created-at" : "some-date", 
//   "current" : "true / false"
//   "complete" : "true / false"
// } 


// creates a new to-do
var qn = function(msg, resp){
  help.newConn(function(db){
    var collection = db.collection('todos');
    var todo = help.todoObj(msg);
    //make sure that there is a current to-do
    collection.find({"current":true, "list": msg.To}).count(function(err, count){
      if(err) throw err;
      if(count === 0) todo.current = true;
      collection.insertOne(todo, function(err, result) {
          if(err) console.log(err);
          console.log(result);
          resp.send(utils.twimlResp("Added: " + msg.Body));
          db.close();
      });
    });
  });
};
    

//no idea if this works.... needs testing.
// var qx = function(msg, resp){
//   help.newConn(function(db){
//     var collection = db.collection('todos');
//     collection.updateOne(
//       {"current":true, "list": msg.To},
//       { $set : {'current': false} }, 
//       function(err){
//         if (err) throw err;
//         var nextTd = collection.find({"list": msg.To}).sort({"_id": -1}).limit(1)
//         .updateOne({$set : { "current" : true }}, function(err, result){
//           console.log(err);
//           console.log(result);
//         });
//     });
//   });
// };
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
// exports.qx = qx;


