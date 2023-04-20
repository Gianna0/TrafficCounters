class TrafficMeasurements {
    constructor(id, trafficCounterId, vehiclesCount, averageSpeed, overSpeedLimitCount, createdAt) {
        this.id = id;
        this.trafficCounterId = trafficCounterId;
        this.vehiclesCount = vehiclesCount;
        this.averageSpeed = averageSpeed;
        this.overSpeedLimitCount = overSpeedLimitCount;
        this.createdAt = createdAt;
    }
}

module.exports = TrafficMeasurements;