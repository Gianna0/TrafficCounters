const TrafficMeasurement = require('../models/trafficMeasurement');

class SpeedometerMeasurementController {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    async getSpeedometerCurrentMeasurement(trafficCounterId) {
        const [rows] = await this.dbConnection.promise().query('SELECT id, traffic_counter_id, vehicles_count, average_speed, average_speed, over_speed_limit_count, created_at FROM traffic_measurements WHERE traffic_counter_id = ? ORDER BY id DESC LIMIT 1', [trafficCounterId]);
        return new TrafficMeasurement(rows[0].id, rows[0].traffic_counter_id, rows[0].vehicles_count, rows[0].average_speed, rows[0].over_speed_limit_count, rows[0].created_at, trafficCounterId);
    }
}

function createSpeedometerMeasurementController(dbConnection) {
    return new SpeedometerMeasurementController(dbConnection);
}

module.exports = {
    SpeedometerMeasurementController,
    createSpeedometerMeasurementController
}