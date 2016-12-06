var http = require('http');
var fs = require('fs');
var hello = require('./custom_hello');  // aquiring a custom module 
var gb = require('./custom_goodbye');

hello();		// then calling the custom module
gb.goodbye();   // using alternate method for requiring modules

http.createServer((request,response) => {
    response.writeHead(200, {
    	'Content-Type': 'text/html'
	});
    fs.readFile('index.html', function(error, contents) {
        //response.write(contents);
        response.end(contents);
    });
}).listen(8080);
