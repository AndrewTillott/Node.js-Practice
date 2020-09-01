var express = require('express');
var app = express();

//tell express that we want to use ejs as our view engine
//by default (when we request some views or template its going to look in the/views template folder for them) it will look in the /views folder for the ejs page
app.set('view engine', 'ejs')

app.get('/', function(req,res){
    //renders a html page
    res.sendFile(__dirname + '/index.html')
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