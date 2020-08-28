//we required the modules folder so that we could extract functions that were exported from it
//we assigned it to a variable so that we could reference those functions
var counter = require('./modules');
console.log(counter('shaun', 'crystal', 'ryu'));