
//this is a simple variable that keeps track of which number--the key-- is allowed to post to which lists --the value
//its not terribly effcient, but its not terribly expensive either and it keeps my friends from trolling me
var pairs = {
  "+16129108918":["+17639511825"]
};

var canPost = function(from, to){
	var index = pairs[from].indexOf(to);
	return indexOf !== -1;
};

exports.canPost = canPost;