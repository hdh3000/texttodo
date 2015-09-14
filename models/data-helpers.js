var mongo = require('mongodb');
var uri = 'mongodb://heroku_j3rmv3fd:cfkmsvas7355h5l3af766qj9ar@ds033828.mongolab.com:33828/heroku_j3rmv3fd';

//wrapper for opening a db connection
var newConn = function(callback){
	mongo.MongoClient.connect(uri, function(err, db) {
		if (err) {
			console.log(err);
			throw (err);
		}
		callback(db);;
	});
};


var todoObj = function(msg) {
	var todo = {};
	todo.list = msg.To;
	todo.text = msg.Body;
	todo.createdAt = new Date();
	todo.complete = false;
	todo.current = false;
	return todo;
};

//for provisioning a new list...
var listObj = function(number){
	var obj = {
	  "num": number,
	  "current to-do" : null,
	  "items":[]
	};
	return obj;
};

exports.newConn = newConn;
exports.todoObj = todoObj;
exports.listObj = listObj;