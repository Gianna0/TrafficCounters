const TrafficCounterState = require('../models/trafficCounterState');

class SpeedometerStateController {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    async getSpeedometerCurrentState(trafficCounterId) {
        const [rows] = await this.dbConnection.promise().query('SELECT id, traffic_counter_id, traffic_jams, sabotage_alarm, power_failure_alarm, low_battery_alarm FROM traffic_counter_states WHERE traffic_counter_id = ? ORDER BY id DESC LIMIT 1', [trafficCounterId]);
        return new TrafficCounterState(rows[0].id, rows[0].traffic_counter_id, rows[0].traffic_jams, rows[0].sabotage_alarm, rows[0].power_failure_alarm, rows[0].low_battery_alarm);
    }
}

function createSpeedometerStateController(dbConnection) {
    return new SpeedometerStateController(dbConnection);
}

module.exports = {
    SpeedometerStateController,
    createSpeedometerStateController
}