// there is no way this is a good way to do this
var pairs = {
  "+16129108918":["+17639511825"]
};

var canPost = function(from, to){
	var index = pairs[from].indexOf(to);
	return index !== -1;
};

exports.canPost = canPost;