const colors = ['red', 'green', 'blue']; 

const items = colors.map(function(color) {
  return '<li>' + color + '</li>'; 

})
console.log(items)

// converted to arrow function 
const items2 = colors.map( color => '<li>' + color + '</li>'); 
console.log(items2)

// cleaner still 
const items3 = colors.map(color => `<li>${color}</li>`); 
console.log(items3)
