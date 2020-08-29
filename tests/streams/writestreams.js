var http = require('http');
var fs = require('fs');

//we are reading this file, by creating a read stream
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//create a writable stream
//write this data that we received to that write stream, and send it to somewhere else
//__dirname will be to identify this specific folder
//this creates a write stream, that would allow us to send data to this new file!
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

mrReadStream.on('data', function(chunk){
    //when we receive some data, we log it to the console
    console.log('new chunk received')
    //allows us to write the data that we have received to the new file
    //we previously opened up the write stream that made this possible
    //chunk is written to writeMe.txt
    myWriteStream.write(chunk);
})

//the advantages of using this method
// as opposed to the methods used in the readWrites section
//is that we can process the data a bit at a time, as opposed to processing a lot of data at once


