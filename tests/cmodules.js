//allows us to get all functions that were exported
var allFunctions = require('./bmodules');
//select the specific function that you want from the ones that were imported
console.log(allFunctions.counter(['shaun', 'crystal', 'ryu']));
console.log(allFunctions.adder(5, 6));
console.log(allFunctions.adder(allFunctions.pi, 5));
console.log(allFunctions.counter2(['shaun', 'crystal', 'ryu']));
console.log(allFunctions.adder2(5, 6));
console.log(allFunctions.adder2(allFunctions.pi2, 5));