var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}

var adder = function(a, b){
    return `The sum of the 2 numbers is ${a + b}`;
}

var pi = 3.142;


//export multiple properties
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

//an alternative way of doing it
module.exports.counter2 = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}
module.exports.adder2 = function(a, b){
    return `The sum of the 2 numbers is ${a + b}`;
}
module.exports.pi2 = 3.142;



var counter3 = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}

var adder3 = function(a, b){
    return `The sum of the 2 numbers is ${a + b}`;
}

var pi3 = 3.142;

//the other way to export things
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};