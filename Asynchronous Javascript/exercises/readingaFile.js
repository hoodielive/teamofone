let fs = require('fs'); 

fs.readFile(__dirname + "/english-words.10", "utf-8", function (error, contents) {
  if (error) {
    console.error(error); 
    return; 
  }

  console.log(contents); 
});
