fs = require('fs');
path = require('path');

var tdLists = {
	"+17639511825": {
		"current":null,
		"list" : []
	}
};

filePath = path.join(__dirname, './todolists/');


var addToTDList = function(td, number,resp){
	var path = filePath + number + '.json';
	fs.readFile(path, function(err, content) {
		if (err) throw err;
		else {
			var list = JSON.parse(content);
			list.list.push(td);
			fs.writeFile(path, JSON.stringify(list), function(err){
				if(err) throw err;
				console.log('added to list', number);
			}); 
		}
	});
};


var getToDo = function (list){
	var path = filePath + number + '.json';
	fs.readFile(path, function(err, content) {
		if (err) throw err;
		else {
			var list = JSON.parse(content);
			if(!list.current){
				newCurrent = list.list.pop();
				list.current = newCurrent;
			}
			resp.write(list.current);
			console.log('sent to do back!');
		}
	});
};




exports.addToTDList = addToTDList;




