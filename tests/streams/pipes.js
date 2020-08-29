//pipes mean that you don't need to manually listen for data
//they also take care of the writing of the stream more efficiently
//pipes take data from a read stream and pipe it to a write stream

var http = require('http');
var fs = require('fs');

//we are reading this file, by creating a read stream
var myReadStream = fs.createReadStream(__dirname + '/latin.txt', 'utf8');
//create a writable stream
//write this data that we received to that write stream, and send it to somewhere else
//__dirname will be to identify this specific folder
//this creates a write stream, that would allow us to send data to this new file!
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')


//OLD WAY OF DOING IT!!!!
/*
myReadStream.on('data', function(chunk){
    //when we receive some data, we log it to the console
    console.log('new chunk received')
    //allows us to write the data that we have received to the new file
    //we previously opened up the write stream that made this possible
    //chunk is written to writeMe.txt
    myWriteStream.write(chunk);
})
*/

//PIPES WAY OF DOING IT
//we can't pipe from a writable stream, because we can't read from that
myReadStream.pipe(myWriteStream);
