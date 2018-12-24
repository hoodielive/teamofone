let XHR = new XMLHttpRequest(); 
let url = "https://api.github.com/zen"
XHR.onreadystatechange = function() 
{
  if(XHR.readyState == 4)
    {
      console.log(XHR.responseText); 
    }
}

XHR.open("GET", url);
XHR.send(); 
