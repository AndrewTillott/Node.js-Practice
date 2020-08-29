//you have a client and a server
//the client makes requests to a server, the server gives a response
//the channel over which they communicate tends to be a socket
//they can communicate using a specific protocol (an agreed method of communication e.g. htp or ftp)
//The information can then be sent down a socket via a protocol called TCP
//TCP splits up the data into smaller 'packets' to be sent down the socket 
//Node.js gives us this functionality, to open up a connection between two computers and send information between them

//Ports 
//Programmes listen to a particular port number so that the computer knows which requests to listen for
//e.g. 172.24.76:3000 (IP address followed by port)

//Response Headers
//Request often followed by a request header --> request + request headers
//Response often followed by a response header --> response + response headers
//extra information about the request or the response. Tells the browser a bit more about the request or the response.
//One thing the browser may want to know is the content type e.g. is is html or json etc
//We may need to put a status in it, e.g. 200 if everything was ok. Or 400 if there was an error


//allows us to set up a server
var http = require('http');
//creates a server
//req object comes loaded with details of the request that has been made
//res object something we can use to send a response back to the client
var server = http.createServer(function(req, res){
    //req.url is the url of the request
    console.log('request was made: ' + req.url)
    //a header is provided that tells the browser it is dealing with plain text
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hey ninjas!');
});

//necessary for the server to have somewhere to listen too
//server refereces the aforementioned variable
//the ip adress is the second number (this one is for a local host)
server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000')