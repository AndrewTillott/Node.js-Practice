//allows us to use the events module
var events = require('events');
//allows us to inherit certain things from things that are built into node.js and other objects (also has other purposes)
var util = require('util');

//We can now wire up events to 'myEmitter'
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
})

//to emit the event mannually. We are passing in the message
myEmitter.emit('someEvent', 'the event was emitted');

//generic function
var Person = function(name){
    this.name = name;
}

//allow Person to inherit event emitter
//you only need to have required events, util and declared the person for this to work
util.inherits(Person, events.EventEmitter); //anything created with the person constructor would have the event emmitter

//new instances of Person
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

//loop through the people and add speech
people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');