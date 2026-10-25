const assert = require('assert');
const http = require('http');
const server = require('./app');
server.listen(0, () => {
  http.get({ port: server.address().port }, (res) => {
    let d = '';
    res.on('data', c => (d += c));
    res.on('end', () => {
      assert.strictEqual(res.statusCode, 200);
      assert.ok(d.includes('Jenkins'));
      console.log('Test passed');
      server.close();
    });
  });
});
