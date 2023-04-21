const TrafficeMeasurementGenerator = require('./randomGenerators/trafficMeasurementGenerator.js')
const trafficCounterStateGenerator = require('./randomGenerators/trafficCounterStateGenerator.js')
const dbConnection = require('./dbConnection.js')

function simulateReceivedMeasurementData() {
    console.log('Received Traffic Counter Measurement Data');
    dbConnection.query('SELECT * FROM traffic_counters', function (error, results, fields) {
        if (error) throw error;
        results.forEach(function (trafficCounter) {
            const trafficMeasurement = TrafficeMeasurementGenerator(trafficCounter.id);
            dbConnection.query('INSERT INTO traffic_measurements SET ?', {
                traffic_counter_id: trafficMeasurement.trafficCounterId,
                vehicles_count: trafficMeasurement.vehiclesCount,
                average_speed: trafficMeasurement.averageSpeed,
                over_speed_limit_count: trafficMeasurement.overSpeedLimitCount
            }, function (error, results, fields) {
                if (error) throw error;
            });
        });
    });
}

function simulateReceivedStateData() {
    console.log('Received Traffic Counter State Data');
    dbConnection.query('SELECT * FROM traffic_counters', function (error, results, fields) {
        if (error) throw error;
        results.forEach(function (trafficCounter) {
            const trafficCounterState = trafficCounterStateGenerator(trafficCounter.id);
            dbConnection.query('INSERT INTO traffic_counter_states SET ?', {
                traffic_counter_id: trafficCounterState.trafficCounterId,
                traffic_jams: trafficCounterState.trafficJams,
                sabotage_alarm: trafficCounterState.sabotageAlarm,
                power_failure_alarm: trafficCounterState.powerFailureAlarm,
                low_battery_alarm: trafficCounterState.lowBatteryAlarm
            }, function (error, results, fields) {
                if (error) throw error;
            });
        });
    });
}

module.exports = {
    simulateReceivedMeasurementData,
    simulateReceivedStateData
}
