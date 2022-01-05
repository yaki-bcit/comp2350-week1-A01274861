var static = require('node-static');
var file = new static.Server();
console.log("starting server");
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
	console.log("page hit: "+request.method + " " + request.url);
  }).resume();
}).listen(process.env.PORT || 3000);