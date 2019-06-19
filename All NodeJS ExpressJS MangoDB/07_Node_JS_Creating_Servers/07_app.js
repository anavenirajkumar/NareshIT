const http = require('http');

let hostname = '127.0.0.1';
let port = 3000;

// Create a Server
let server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(`<h2 style="color: red">Welcome to Node JS </h2>`);
});

server.listen(port,hostname,() => {
    console.log(`server is started at http://${hostname}:${port}`);
});