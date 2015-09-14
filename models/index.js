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


var newList = function(number) {
  help.newConn(function(db){
    var todos = db.collection('todos');
    var list = help.listObj(number);
    todos.insert(list, function (err, result){
      if(err) throw err;
      console.log(result);
    });
  });
};

var qn = function(msg, resp){
  help.newConn(function(db){
    var todo = help.todoObj(msg);
    db.collection('todos').insertOne(todo, 
      function(err, result){
        if(err) console.log(err);
        console.log(result);
        //some twimil resp writter
        // resp.send();
        db.close();
    });
  });
};

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



//function to see all results in the list
// newList("+17639511825");
//querying a list
// help.newConn(function(db){
//   var cursor = db.collection('todos').find();
//   cursor.rewind();
//   cursor.each(function(err, doc) {
//       if (doc !== null) {
//          console.dir(doc);
//       }
//   });
// });

