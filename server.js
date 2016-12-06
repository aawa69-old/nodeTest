var http = require('http');

//http.createServer(function(request.response){ });

//Alternatively
var newServer = http.createServer();
newServer.on('request',function(req,res) { }); 
newServer.on('close',function(){ });