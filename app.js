var http = require('http');

var makeRequest = function(message) {
    var options = {
        host: 'localhost',
        port: 8080,
        path: '/',
        method: 'POST'
    };

    var request = http.request(options, function(response) {
        response.out('data', function(data) {
            console.log(data);
        });
    });

    request.write(message); // begins request
    request.end(); // finish request
};

makeRequest("Here's looking at you, kid");
