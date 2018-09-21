
function copyArrayAndManipulate(array, instructions) {
  // 1. the above declares a function named copyArrayAndManipulate and stores it in global memory 
  // 4. sets the value of array
  // 5. sets the value of instructions 
  let output = [];  // 6. declares a variable called output 
  for (let i = 0; i < array.length; i++) { // 7. declares a variable called i and assign is a value of 0
    // 8. at the time of i is compared to the length of 1,2,3 -> i is at the 0th index with the value of 1 
    output.push(instructions(array[i])); // 9. index 0 value 1 is pushed into output and this loops til end
  }
  return output; 
}

// 2. declares a function named multiplyBy2
function multiplyBy2(input) {
  return input * 2; 
}

let result = copyArrayAndManipulate([1,2,3], multiplyBy2);
// 3. declares a variable named result and assigns to it the output of copyArrayAndManipulate and multiplyBy2

console.log(result);
