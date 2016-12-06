var hello = function() {
	console.log("hello");
}

// expose our module for use (see hello.js) 
// can only set one function using this method 
module.exports = hello;		