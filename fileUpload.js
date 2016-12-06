
// To run (pass in a file to be uploaded):  curl --upload-file <file name> http://localhost:8080

var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){  
    res.writeHead(200);

    var newFile = fs.createWriteStream("readme_copy.md");
    var fileBytes = req.headers['content-length'];
    var uploadedBytes = 0;

    // Output upload progress
 	req.on('readable',function(){
		var chunk = null;
		while (null !== (chunk = req.read())){
			uploadedBytes += chunk.length;
			var progress = (uploadedBytes / fileBytes) * 100;
			res.write("progress: " + parseInt(progress,10) + "%\n");
		}
	});   

 	// Do the upload - 'pipe' the request to the output file
    req.pipe(newFile);

    req.on('end', function() {
        res.end('uploaded');
    });

}).listen(8080);
