const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
// Request = Requerimiento del frontEnd.
// Response = La respuesta que nuestro servidor va a dar a este request.
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end('Kenyi Wilson Zuñiga Teran');
}); 

server.listen(port, hostname, () =>{
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});