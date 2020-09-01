var express = require('express');
//the req object can handle parsing data from a query string, but it can't do it for post data. Hence why we need body parser
//parses incoming request bodies in a middleare before your handlers. Available under the req.body property
//Data parsing is a method where one string of data is converted into a different type of data 
//https://www.npmjs.com/package/body-parser
//npm install body-paser
var bodyParser = require('body-parser');
var app = express();

//middleware that parse our post data for us (stored in urlencodedParser)
var urlencodedParser = bodyParser.urlencoded({extended: false});

//tell express that we want to use ejs as our view engine
//by default (when we request some views or template its going to look in the/views template folder for them) it will look in the /views folder for the ejs page
app.set('view engine', 'ejs');
//app.use to allow us to use some middleware
//we can add a certain path. If we do not then it will be ran on every request that is made (in the browser or in the document)
//in this case we are using the route of assets
//next is the third parameter. It means "we have come to the end of this set of middleware, now go onto the next set of middleware"
//imagine if the route below was '/' then the middleware would always fire because that / would always be there, whether it is /home /contact etc
//therefore we need to make sure that when the middleware is done it goes to the next one. Therefore we always need to say next() at the end
/*
app.use('/assets', function(req, res, next){
    console.log(req.url)
    next();
}) */

//express comes with middleware already installed that we use to serve static files
//this means your styles.css will now run
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
    //knows automatically to look to views folder
    res.render('index')
})

app.get('/contact', function(req, res){
    //all the code between the req and the res is middleware
    //in built in express - tells us what data is in the query string
    console.log(req.query);
    //we can pass in data to our ejs by simply adding data as the second parameter in the render method, we can therefore easily pass the query string to the view
    /*up to this point = middleware presumably*/res.render('contact', {queryString: req.query});
})


//wheras we get the data from query strings for get requests, when it comes to post requests we take it from the body itself
//urlencodedParser will fire whenever that post request is made

app.post('/contact', urlencodedParser, function(req, res){
    //we got access to the body object from urlencodedParser
    //the body will contain all of the data that we requested (after it has been parsed)
    console.log(req.body)
    res.render('contact-success', {queryString: req.body});
})

//we don't need to specify to look to the 'views' folder, that's the default behaviour
app.get('/profile/:name', function(req, res){
    // we are just creating a variable with some data
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    //NOTE we are using render rather than set because we are rendering a view rather than a static page. We don't need to give it a path - it knows to look in the views folder
    //this runs the ejs file of profile.ejs
    //we are passing in some json (a person and their name (which is taken from the parameters, you can then reference the person in the ejs))
    //a second key has been added with more 'data in it'
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(4000);
