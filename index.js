const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {

  // NEW ROUTE for /about
  // NEW FEATURE (Required for the assignment)
  if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page - This is my new route added for the assignment.\n');
    return;
  }

  // Default response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello! My first Web server is running.');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
