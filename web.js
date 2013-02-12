var express = require('express');
var server = express();
	
server.configure(function(){  
  server.use(express.static(__dirname));
});

var port = process.env.PORT || 1111;
server.listen(port, function() {
	console.log('Listening on port 1111');
});
