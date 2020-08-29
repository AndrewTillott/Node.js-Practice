//allows you to run the latin on the local host!!!

//should be a more efficient way of loading the content 
//as don't have to load the whole page in one go 
//(if there was a lot of content)



var http = require('http');
var fs = require('fs');

//created a server
//the res (response object) is a writable stream (so we can write to it)
var server = http.createServer(function(req, res){
    
    console.log('request was made' + req.url);
    //we are trying to read plain text, so we have made the server aware of that
//    /*because we have changed it to a: text/html file, it knows that it is a html file, and renders it accordingly */
    res.writeHead(200, {'Content-Type': 'text/html'});
    //creates a read stream and then reads the content of /latin.txt. utf8 is specified to make it english text
//  /* we changed the file to /index.html */
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    //allows us to pipe the response from the read files
    //the pipe listens to the data event
    //when we get data streaming it to the user - bit by bit (so they receive data quicker)
    myReadStream.pipe(res);
})

server.listen(2000, '127.0.0.1');
console.log('yo dawgs, now listening on port 2000')