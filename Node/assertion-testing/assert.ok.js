// Tests if value is truthy. It is equivalent to assert.equal(!!value, true, message); 

const assert = require('assert');

assert.ok(50 < 70); 

console.log('moving to test boolean true'); 

assert.ok(true); 

console.log('moving to test 1'); 

assert.ok(1); 

console.log('testing boolean false'); 

assert.ok(false); 
// throws "AssertionError: false == true"; 

assert.ok(0); 
// throws "AssertionError: 0 == true";

assert.ok(false, 'it\'s false'); 
// throws "AssertionError: its false"
