fs = require('fs');

var tdLists = {
	"+17639511825": []
};

dataFile = 'some-path';

var loadTdList = function(callback){
	fs.readFile(filepath, function(err, content){
		if (err) throw err;
		callback(content);
	});
};



