// alternative to building module then using module.exports = <module name> 
// - see custom_hello.js & hello.js
// - can set multiple functions in this module example ..
exports.goodbye = function() {
	console.log("bye");
};

exports.goodbyeAgain = function() {
	console.log("bye again");
};