const http = require('http');
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const MyError = require('./errors/MyError');

// middlewares
app.use(bodyParser.json());

// endpoints
app.get('/', function(req, res) {
    res.send('Hello World');
});
app.get('/api/speedometers/:id', async function(req, res) {
    try {
        const connection = require('./dbConnection');
        const SpeedometerController = require('./controllers/speedometerController');
        const speedometerController = SpeedometerController.createSpeedometerController(connection);
        const speedometer = await speedometerController.getTrafficCounter(req.params.id)
        
        if (speedometer == null) {
            res.status(404).send('Not found');
        } else {
            res.send(speedometer);
        }
    } catch (err) {
        console.error(err);
        if (err instanceof MyError) {
            res.status(400).send(err.message);
        } else {
            res.status(500).send('Wystąpił błąd');
        }
    }
});
app.post('/api/speedometers', async function(req, res) {
    try {
        const connection = require('./dbConnection');
        const SpeedometerController = require('./controllers/speedometerController');
        const speedometerController = SpeedometerController.createSpeedometerController(connection);
        const speedometer = await speedometerController.addTrafficCounter(req.body);
        res.status(201).send();
    } catch (err) {
        console.error(err);
        if (err instanceof MyError) {
            res.status(400).send(err.message);
        } else {
            res.status(500).send('Wystąpił błąd');
        }
    }
});

app.delete('/api/speedometers/:id', async function(req, res) {
    try {
        const connection = require('./dbConnection');
        const SpeedometerController = require('./controllers/speedometerController');
        const speedometerController = SpeedometerController.createSpeedometerController(connection);
        await speedometerController.deleteTrafficCounter(req.params.id);
        res.send(`speedometer deleted with id ${req.params.id}`);
    } catch (err) {
        console.error(err);
        if (err instanceof MyError) {
            res.status(400).send(err.message);
        } else {
            res.status(500).send('Wystąpił błąd');
        }
    }
});

app.put('/api/speedometers/:id', async function(req, res) {
    try {
        const connection = require('./dbConnection');
        const SpeedometerController = require('./controllers/speedometerController');
        const speedometerController = SpeedometerController.createSpeedometerController(connection);
        const trafficCounter = req.body;
        trafficCounter.id = req.params.id;
        const speedometer = await speedometerController.updateTrafficCounter(trafficCounter);
        res.send(speedometer);
    } catch (err) {
        console.error(err);
        if (err instanceof MyError) {
                res.status(400).send(err.message);
        } else {
            res.status(500).send('Wystąpił błąd');
        }
    }
});


const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);

const SimulateReceivedData = require('./simulateReceivedData');
// Wywołanie funkcji generującej dane co 1 sekundę
//setInterval(SimulateReceivedData.simulateReceivedStateData, 1000);

// Wywołanie funkcji generującej dane co 1 minutę
//setInterval(SimulateReceivedData.simulateReceivedMeasurementData, 1000 * 60);