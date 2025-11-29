const http = require('http'); // 1. Import the built-in 'http' module

const hostname = '127.0.0.1'; // The loopback address (localhost)
const port = 3000; // The port the server will listen on

// 2. Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Set the response body
  res.end('Hello! My first Web server is running.');
});

// 3. Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});