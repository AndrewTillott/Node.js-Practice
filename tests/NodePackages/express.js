var express = require('express');

//What is returned to us is a function
//therefore on this variable we have access to all the different methods on express e.g. things like routing or setting up template engines
var app = express();

//using express to set up the server to a port
app.listen(4000);

//HTTP Methods
//All of these are different http methods (the kind of requests we may make)
//These methods tell the server to respond to the request in a particular way 
//Then its up to the server to respond as it see's fit 



//Get 
//The kind of request we make when we type a url into an address bar
//This is how we respond to a get request: 
// app.get('route', fn)

app.get('/', function(req, res){
    //this is an express method
    //express identified that it was a string, so we didn't have to express the content type
    res.send('this is the home page');
})

app.get('/contact', function(req, res){
    res.send('this is the contact page');
})

//Post
//Generally made when we send data to a server (from say a web form)
//This is how we respond to a post request: 
// app.post('route', fn)

//Delete
// app.delete('route', fn)


//Put