/** 
 * Describe and use foreach func
 * implement foreach func
 * forEach takes the currentElement, currentIndex and array as args 
 * function callback(curElement, currentIndex, array) {
 *     // implemented by the caller
 *}
*/

// THIS CODE DOES NOT WORK - FIXIT 
let strings = ["my", "foreach", "strings"]; 

let results = ""; 

let arr = [1,2,3,4,5,6]; 

function callback(curElement, currentIndex, array) {
  // implemented by the caller
}

function forEach(array, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
};  

forEach(callback); 

forEach(strings, function(str, index, array) { 
  if (array.length - 1 !== index) {
    result += str + " "; 
  }
  else {
    result += str + "!!!"
  }
});
