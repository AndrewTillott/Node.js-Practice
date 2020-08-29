//we needed to give it a variable so that we could export a specific function
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}

//exports the counter function so that it can be used in other files
module.exports = counter; 
