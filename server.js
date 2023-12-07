const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('Hello World');
});

server.listen(3000, '127.0.0.1', () => {
    console.log(`Serveur demarré sur http://127.0.0.1:3000`);
});

server.listen(port, hostname, () => {
	console.log(`Serveur demarré sur http://${hostname}:${port}`);
});