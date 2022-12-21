const express = require('express');
const app = express();
const port = 3001

app.get('/', (req, res)=> {
  res.send('La suma de "3 + 2" es "' + (3+2).toString() + '"')
})

app.listen(port, () =>{
  console.log(`El servidor se está ejecutando en http://localhost:${port}/`);
});


