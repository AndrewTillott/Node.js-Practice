var http = require('http');
//fs is used to read a file. This is very similar, but we are reading through a stream this time
var fs = require('fs');

//create a readable stream
//we need to specify which file we want to read through the stream
//dirname is getting the current directory
//if you add utf8 it will return the data as text rather than some other code
var myReadStream = fs.createReadStream(__dirname + '/latin.txt', 'utf8');

//function to read from the read stream
//we can recognise when we receive one chunk of data
//there is an event called data that allows us to listen for when we have received any form of data from the read stream
//the function is fired when data is received
//the piece of dat (that is passed on) is called a chunk
myReadStream.on('data', function(chunk){
    //when the chunk is received you can see it logs to the console the string and the chunk's data
    console.log('new chunk received:');
    console.log(chunk);
})




/*
Buffers

Buffers are a temporary storage spot for a chunk of data that is being transferred from one place to another. 

The buffer is filled with data, then passed along. 

Transfers small chunks of data at a time.

Visualisation: Imagine you have a huge a huge slab of data. You can then send a chunk of that data to a buffer (where it is stored like a battery, until it is full) and then the buffer is sent to where it needs to go


Stream

Stream is a stream of data that flows from one place to another, over time. 

Streams can be used in node.js to transfer data

Streams can increase the performance of the application, as you don't need to wait for the whole thing to load


- Writable Streams - allow node.js to write data to a stream
- Readable Streams - allow node.js to read data from a stream 
- Duplex - can read and write to a stream 

*/