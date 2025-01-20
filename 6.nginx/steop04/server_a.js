// simple backend server, 3001 port

const http = require('http');   
const server= http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server A\n');
    }
);

server.listen(3001, () => {
    console.log('Server A running on http://localhost:3001/');
});