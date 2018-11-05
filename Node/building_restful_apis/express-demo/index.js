const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
  res.send('Howdy Aeon!')

}); 

app.get('/api/coures', (req, res) => {
  res.write([1,2,3]);
  res.end();
}); 

port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); 
