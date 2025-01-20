// simple backend server, 3001 port

const http = require('http');   
const server= http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server C\n');
    }
);

server.listen(3003, () => {
    console.log('Server C running on http://localhost:3003/');
});