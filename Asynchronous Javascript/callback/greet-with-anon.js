function greet(name, formatter) {
  return console.log("Hello, " + formatter(name));
}

greet("King Spivey of North Pennsylvania", function(name) {
  return console.log(name.toUpperCase()); 
})

greet("King Spivey of North Pennsylvania", function(name) {
  return console.log(name + "!!!!!!");
})
