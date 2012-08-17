var http = require('http');
var port = process.env.PORT || 5000;
http.createServer(function(request,response) {
	response.writeHead(200);
	response.write("Hello, this is dog.");
	response.end();
}).listen(port);