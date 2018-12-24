function callback() {
	console.log("Coming from the callback!"); 
}

function higherOrder(fn) {
  console.log("About to call callback"); 
  fn(); 
  console.log("Callback Juice!")
}

higherOrder(callback); 
