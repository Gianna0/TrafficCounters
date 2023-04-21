const http = require('http');
const express = require('express');
const app = express();
require('dotenv').config();
//const connection = require('./dbConnection');

app.get('/', function(req, res) {
    res.send('Hello World');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);

const SimulateReceivedData = require('./simulateReceivedData')
// Wywołanie funkcji generującej dane co 1 sekundę
setInterval(SimulateReceivedData.simulateReceivedStateData, 1000);

// Wywołanie funkcji generującej dane co 1 minutę
setInterval(SimulateReceivedData.simulateReceivedMeasurementData, 1000 * 60);