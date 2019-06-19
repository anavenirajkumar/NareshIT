const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./router/appRouting');

let hostname = '127.0.0.1';
let port = 3000;

// Create a Server
let server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    let url = request.url;
    // Forward routing to another file
    router.mapRoutes(url,response);
});

server.listen(port,hostname,() => {
    console.log(`server is started at http://${hostname}:${port}`);
});