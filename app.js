const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.ulr === '/about') {
    res.end('Here is our short history');
  }
  res.end(`
    <h1>oops!</>
    <p>We can't seem to find the page</p>
  `);
  console.log(req);
  res.write('welcome to our home page');
  res.end();
});

server.listen(5000);
