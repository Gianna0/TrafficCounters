const TrafficCounterState = require('../models/trafficCounterState');

function generateTrafficCounterState(trafficCounterId) {
    const trafficJams = Math.floor(Math.random() * 100) > 50 ? true : false;
    const sabotageAlarm = Math.floor(Math.random() * 100) > 95 ? true : false;
    const powerFailureAlarm = Math.floor(Math.random() * 100) > 90 ? true : false;
    const lowBatteryAlarm = Math.floor(Math.random() * 20) > 16 ? true : false;

    return new TrafficCounterState(0, trafficCounterId, trafficJams, sabotageAlarm, powerFailureAlarm, lowBatteryAlarm);
}

module.exports = generateTrafficCounterState;
