/**
 * a task that completes in the future
 * take a number and wait to be called
*/ 

let p1 = new Promise(function(resolve, reject) {
  resolve([1,2,3,4,5]);
});

p1.then(function(arr) {
  console.log("Promise p1 resolved with data:", arr)
}); 

// handle errors
let p2 = new Promise(function(resolve, reject) {
  reject('Error'); 
});

p2
  .then(function(data) {
    console.log("Promise p2 resolved with data:", data); 
  })
  .catch(function(data) {
    console.log("Promise p2 was rejected with data: ", data); 
  });

let p3 = new Promise(function(resolve, reject) {
  let num = Math.random();
  if (num < 0.5) {
    resolve(num); 
  }
  else {
    reject(num); 
  }
}); 

p3.then(function(result) {
  console.log("Success:", result); 
}).catch(function(error) {
  console.log("Error:", error)
});
