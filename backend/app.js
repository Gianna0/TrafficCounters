const http = require('http');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);