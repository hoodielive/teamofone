function greet(name, formatter) {
  return console.log("hello, " + formatter(name));
}

function upperCaseName(name) {
  return name.toUpperCase(); 
}

greet("King Sanchez of Miami", upperCaseName); 
