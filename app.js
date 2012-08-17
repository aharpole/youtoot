var http = require('http');
var port = process.env.PORT || 5000;
http.createServer(function(request,response) {
	var referrer = request.headers['referer'];
	response.writeHead(302, {
		'Location': 'http://twitter.com/home?status=Check%20Out%This%20Video%3A%20' + referrer
	});
	response.end();
}).listen(port);