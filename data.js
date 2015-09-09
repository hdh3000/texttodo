var path = require('path');
var fs = require('fs');


entriesPath = path.join(__dirname,'./data.txt')
var entries = [];
var entryID = null;

//pull down data from text file at launch
var initialize = function() {
    var results = JSON.parse(fs.readFileSync(entriesPath));
    entryID = results.length + 1;
    entries = results;
}


var addEntry = function(entry){
  //add metadata to new entries
  entry['createdAt'] = new Date();
  entry['entryID'] = entryID;
  entries.push(entryID);
  entryID++;

  //save to text file
  fs.writeFileSync(entriesPath, JSON.stringify(entries),'utf8')
}

//returns last entry in entries
var returnEntry = function(){
  return entries[entries.length];
}

//remove the last entry in the stack and return it
var removeEntry = function(){
  return entries.pop();
}


//export functionality
exports.initialize = initialize;
exports.addEntry = addEntry;
exports.returnEntry = returnEntry;
exports.removeEntry = removeEntry;