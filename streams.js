var fs = require('fs');
var http = require('http');

http.createServer((request,response) => { 
	response.writeHead(200);  
 
	/* All of this done by one line - request.pipe(response);
	request.on('readable',function(){
		var chunk = null;
		while (null !== (chunk = request.read())){
			response.write(chunk);
		}
	}) 
	request.on('end',function(){
		response.end();
	})*/

	request.pipe(response);

	// Streaming a file   
	var file = fs.createReadStream("readme.md");
	var newFile = fs.createWriteStream("readme_copy.md");

	file.pipe(newFile);

}).listen(8080); 