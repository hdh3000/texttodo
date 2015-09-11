fs = require('fs');
path = require('path');

// var tdLists = {
// 	"+17639511825": []
// };

filePath = path.join(__dirname, './todolists/');

var addToTDList = function(td, number){
	var path = filePath + number + '.json';
	fs.readFile(path, function(err, content) {
		if (err) throw err;
		else {
			var list = JSON.parse(content);
			list.push(td);
			fs.writeFile(path, JSON.stringify(list), function(err){
				if(err) throw err;
				console.log('added to list', number);
			}); 
		}
	});
};

exports.addToTDList = addToTDList;




