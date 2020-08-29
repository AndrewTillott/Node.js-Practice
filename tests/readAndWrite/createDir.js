//when you use async methods you should use a call back function to do something once completed

//fs is also used for creating / removing dir's
var fs = require('fs');

//delete files
fs.unlink('writeMe.txt', function(){
    console.log('this got read')
});

//mkdir sync
fs.mkdirSync('stuff')

//mkdir async
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        //writes the file with the data that was read
        fs.writeFile('./stuff/writeMe.txt', data);
    })
})

//remove dir sync
//you can't remove a directory without it being empty
fs.rmdirSync('stuff');

fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');
})