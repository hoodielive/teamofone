let btn = document.querySelector("#btn"); 
let span = document.querySelector("#priceIndex"); 

btn.addEventListener("click", function() {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText).message;
      console.log(data.bpi.GBP); 
    }
      XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json"); 
      XHR.send(); 
  }
}); 

