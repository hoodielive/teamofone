const http = require('http'); 

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Howdy!'); 
    res.end();
  }
});

server.listen(3000);

port = 3000; 

console.log(`Listening on port ${port}...`); 
