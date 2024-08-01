import http from 'node:http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome to My Server!</h1><p>This is my custom message.</p></body></html>');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});