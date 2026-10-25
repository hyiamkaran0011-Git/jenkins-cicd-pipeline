const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Jenkins CI/CD Pipeline!v2');
});
if (require.main === module) {
  server.listen(3000, () => console.log('Running on port 3000'));
}
module.exports = server;
