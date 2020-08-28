
//find out what file you are in
console.log(__dirname);

//find out what file you are in
console.log(__filename);

//Set Timeout available on the window object

setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000)




var time = 0;

//Set Interval available on the window object
setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
}, 2000)



//clear the interval after 5s
var time = 0;
var timer = setInterval(function(){
    time +=2;
    console.log(time + ' seconds have passed');
    if(time > 5){
        clearInterval(timer);  
      }
}, 2000)
