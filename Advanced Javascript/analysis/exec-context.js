// What happens when Javascript executes my code? 

const num = 3; // initialize num to 3 (global) memory 

function multiplyBy2(inputNumber) { // put a function in global memory called multiplyBy2 
  const result = inputNumber * 2; 
  return result; 
} 

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
 * undefined is a waiting value (placeholder) because nothing has been officially assigned yet
 * we keep track of the functions beings called in js with a Call Stack 
 * one global exec context, multiple function contexts 
**/ 


function copyArrayAndMultiplyBy2(array) { // 1. declare function 
  //  4. array will now be set to [1,2,3] so everywhere you see array it will be 1,2,3
  let output = []; // 5. output will now be set  
  for (let i = 0; i < array.length; i++) { // 5[i] the first time we hit the body of the 'for loop' 
    // what is the value of i? don't generalize things i.e. then it loops through for loop! 
    output.push(array[i] * 2);  
  }
  return output; // 6
}

const myArray = [1,2,3] // 2. declare const-var named myArray and assign it an array of values [1,2,3] 
let result = copyArrayAndMultiplyBy2(myArray); // 3. declare var named copyArrayAndMultiplyBy2 and assign it
// the output of invoking that function  - which creates a brand new execution context on the call stack

