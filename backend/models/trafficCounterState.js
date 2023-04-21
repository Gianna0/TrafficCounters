class TrafficCounterState {
    constructor(id, trafficCounterId, trafficJams, sabotageAlarm, powerFailureAlarm, lowBatteryAlarm, createdAt) {
        this.id = id;
        this.trafficCounterId = trafficCounterId;
        this.trafficJams = trafficJams;
        this.sabotageAlarm = sabotageAlarm;
        this.powerFailureAlarm = powerFailureAlarm;
        this.lowBatteryAlarm = lowBatteryAlarm;
        this.createdAt = createdAt;
    }
}

module.exports = TrafficCounterState;
