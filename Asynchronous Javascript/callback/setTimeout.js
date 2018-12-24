/** 
 * SetTimeout is a function that asynchronously invokes a callback after a delay in milleseconds 
*/ 

function callback()
{
  console.log("callback function"); 
}

let delay = 1000; 
setTimeout(callback, delay); 

setTimeout(function() {
  console.log("Runs in approx. 2000ms")
}, 2000); 

let timerId = setTimeout(function() { 
  console.log("This function runs in 30 seconds")  
}, 30000); 

setTimeout(function() {
  console.log("Canceling the first setTimeout", timerId);
  clearTimeout(timerId); 
}, 2000); 
