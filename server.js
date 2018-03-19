var express = require("express"),
	app = express(),
	http = require("http"),
	server = http.createServer(app),
	assert = require('assert'),
	bodyparser = require('body-parser'),	
	port = process.env.PORT || 3000;


server.listen(port,function(err){
	if(err){
		console.log("could not start server");
	}
	else{
		console.log("server running at localhost:3000 or online port");
	}
});
app.get('/', function(req, res) {
          //console.log(req.url);  actual direction
          res.sendfile(__dirname + '/index.html');
          //res.end("hello world!");

      });
app.use('/src', express.static(__dirname + '/src'));

app.use(bodyparser.json());




