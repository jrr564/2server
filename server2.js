///creating 2 servers!

//listen to http 

var http = require("http");

var PORT = 7000;
var PORT2 = 7050;

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);
// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});


function handleRequest(request, response) {
  response.end("damn u looking good today" + request.url);
};

server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});

function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("I am very disapointed in you." + request.url);
};
