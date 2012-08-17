var http = require('http');
var port = process.env.PORT || 5000;
http.createServer(function(request,response) {
	var referrer = request.headers['referer'];
	response.writeHead(302, {
		'Location': 'http://twitter.com/intent/tweet?text=Check%20Out%This%20Video&url=' + encodeURIComponent(referrer)
	});
	response.end();
}).listen(port);