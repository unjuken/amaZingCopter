// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var express = require('express');
app = express();

var file = "";

var sockets = [];

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname));
  //app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

fs.readFile( __dirname + '/index.html', function (err, data) {
  if (err) {
    throw err; 
  }
  file = data.toString();
});

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.get("/",  function (request, response) {
   response.writeHead(200, {"Content-Type": "text/html"});
   response.end(file);
});


// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);


app.post("/Cursor",  function (request, response) {
	//console.log(request);
	console.log(request.body);
	var x = request.body.xPosition;
	var y = request.body.yPosition;
	var i = 0;
	for(i=0;i<sockets.length;i++)
	{
		var socket = sockets[i];
		socket.emit("cursorChange", {x:x, y:y});
	}
	response.send("success")
});


// //Web sockets configuration
io.sockets.on('connection', function (socket) {
	console.log("Socket connection created");
	sockets.push(socket);
});

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");