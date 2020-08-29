var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
    
    console.log('request was made' + req.url);
    //changed content type to application/json
    res.writeHead(200, {'Content-Type': 'application/json'});
    //created a json object
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    //res.end expects a string or a buffer (therefore you can't just pass in myObj) - you first need to stringify it
    //we need to turn it into a string so that it works
    // not using streams this time. just using the end method to send it to the response object directly
    res.end(JSON.stringify(myObj));
})

server.listen(2000, '127.0.0.1');
console.log('now listening on port 2000')