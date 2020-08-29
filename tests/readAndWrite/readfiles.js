//allows us to read and write files
var fs = require('fs');
//sycnronous metho - therefore it will fully read this file before it does any other code
//will find the readMe.txt to read
//the utf8 is necessary for converting the binary data into letters that we understand
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

//notice that this version of frea me doesn't have the sync. the read file is therefore async
//because its async we need to call a function when it is complete (this is the third function)
//data is what gets read
//async's advantage is that it doesn't block the rest of the code from running
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
});
//syncrynous way of writing a file 
//first argument is where you want to write it 
//second argument is the data that you want to write to this file
fs.writeFileSync('writeMe.txt', readMe)

//could write it as such - this may be more effective because it is not blocking but still gets all the data it needs
fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
})