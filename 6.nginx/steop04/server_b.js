// simple backend server, 3001 port

const http = require('http');   
const server= http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server B\n');
    }
);

server.listen(3002, () => {
    console.log('Server B running on http://localhost:3002/');
});