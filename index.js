var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!!!vinod shalgar and shalgar");

});

//new changes
var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

//this is my change in master
//again m y changes

