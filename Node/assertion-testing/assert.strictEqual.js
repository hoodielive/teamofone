const assert = require('assert'); 

assert.strictEqual(1, 2); 

// AssertionError: 1 === 2

assert.strictEqual(1, 1); 
// Ok

assert.strictEqual(1, '1'); 
// AssertionError: 1 === '1'

