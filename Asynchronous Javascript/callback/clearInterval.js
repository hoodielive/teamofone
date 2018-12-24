var num = 0 
let intervalId = setInterval(function() {
  num++; 
  console.log("num: ", num);
  if (num === 20) {
    clearInterval(intervalId); 
  }
}, 1000);

console.log(intervalId);
