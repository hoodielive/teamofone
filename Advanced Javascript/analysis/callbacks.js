// create a function addTwo that accepts one input and adds 2 to it 

function addTwo(input) {
  input = input + 2; 
  return console.log(input);
}

addTwo(2)

// create a function addS that accepts one input and adds an "s" to it 

function addS(anInput) {
  return console.log(anInput + "s");
}

addS('larry\'')

/** 
 * create a function called map that takes two inputs:
 * 1. an array of numbers (a list of numbers)
 * 2. a 'callback' function - function that is applied to each element of the array of the array
 * (inside of the function 'map')
 * Have map return a new array filled with numbers that are the result of using the 'callback' function
 * on each element of the input array. 
 *
 */ 

