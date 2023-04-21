const TrafficMeasurement = require('../models/trafficMeasurement.js');

function generateTrafficMeasurement(trafficCounterId) {
    const vehiclesCount = Math.floor(Math.random() * 100);
    if (vehiclesCount === 0) {
        vehiclesCount = null;
    }
    const averageSpeed = Math.floor(Math.random() * 100 + 1);
    const overSpeedLimitCount = Math.floor(Math.random() * 50);

    return new TrafficMeasurement(0, trafficCounterId, vehiclesCount, averageSpeed, overSpeedLimitCount);
}

module.exports = generateTrafficMeasurement;
