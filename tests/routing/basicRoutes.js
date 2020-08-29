//unless you specifically specify all extensions of the url will return the response of the base url

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    //this logs to the console what url the user was requesting from
    console.log('request was made: ' + req.url);
    //check what they are requesting and send them something on that request
    //if they make a request from one of these url's they get a html page
    //but now if you add an alernative extension it will keep timing out as it cannot find an alternative extension
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 35}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else{
        /*
        you may want to provide a 404 page alternatively, because otherwise 
        the browser will keep searching until it eventually just times out
        */
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');