//unless you specifically specify all extensions of the url will return the response of the base url

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    //this logs to the console what url the user was requesting from
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //all extensions of the port 3000 will return this
    res.end('feed me popcorn');
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 1000');