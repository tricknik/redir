var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(301, {"Location": "http://station.jit.su"});
  res.end();
});
server.listen(3000);
console.log("Redirecting");
