function countDown(seconds) {
  let num = 0 
  let intervalId = setInterval(function() {  
    num++;
    console.log("num: ", num)
  }, 1000); 
}

countDown(); 

