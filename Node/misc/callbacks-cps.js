// example of a synchronous continuation-passing style 
function add(a, b) {
  return a + b; 
}

add(4, 5)

// the equivalent continutation-passing style of the preceding function with a callback 

function adder(a, b, callback) {
  callback(a + b);
}

console.log('before'); 
adder(1, 2, result => console.log('Result: ' + result)); 
console.log('after'); 

