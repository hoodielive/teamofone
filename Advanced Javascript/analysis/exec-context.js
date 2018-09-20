// What happens when Javascript executes my code? 

const num = 3; // initialize num to 3 (global) memory 

function multiplyBy2(inputNumber) { // put a function in global memory called multiplyBy2 
  const result = inputNumber * 2; 
  return result; 
} 
?
const name = 'mordrid'; // then stores the string modrid in global memory which skips over the body of the func:

/** 
 * because the function was never called 
 * single threaded (one thing at a time) and synchronous execution (for now) 
 * it executes it line by line but in chrome it does JITc - Just in time compilation 
 * the thread execution never weaves its self into the body of a function unless called
 * the execution context is then simplified 
 * its all about where the function was called 
 *
**/ 


// Running/Calling/Invoking a function 
const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);

/** 
 * when you invoke a function, you create a new execution context comprising:
 * the thread of execution (we go through the code in the function line by line
 * a local memory ('Variable Environment') where anything defined in the function is stored
 * when you call a function, you create a local execution context | local memory - because its 
 * inside the body of the function going line by line 
**/ 

// undefined is a waiting value (placeholder) because nothing has been officially assigned yet
