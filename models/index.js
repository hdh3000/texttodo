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
          resp.send(utils.twimlResp("Added: " + msg.Body));
          db.close();
      });
    });
  });
};
    

var qx = function(msg, resp){
  help.newConn(function(db){
    var collection = db.collection('todos');
    collection.findAndModify(
      {"current":true, "list": msg.To},
      [['_id','asc']],
      { $set: {current: false, complete:true } },  
      {}, // options
      function(err, object) {
        console.dir(object);
        if (err) console.log(err.message);
        collection.findAndModify(
          { "list": msg.To, complete: false},
          [['_id','asc']],
          { $set: {current: true } },  
          {}, // options
          function(err, object) {
            if (err) console.log(err.message);
            collection.findOne( { current: true },
              function(err, data){
                if(err) console.log(err);
                resp.send(utils.twimlResp("next: " + data.text));
                db.close();
              });
        });
    });
  });
};


var qt = function(msg, resp){
  help.newConn(function(db){
  var collection = db.collection('todos');
  collection.findOne( { current: true },
    function(err, data){
      if(err) console.log(err);
      resp.send(utils.twimlResp("current: " + data.text));
      db.close();
    });
  });
};


var qa = function(msg, resp){
  help.newConn(function(db){
    db.collection('todos').find({list:msg.To}).each(function(err, result){
      console.dir(err);
      console.dir(result);
    });

  });
};


exports.qn = qn;
exports.qx = qx;
exports.qt = qt;
exports.qa = qa;


