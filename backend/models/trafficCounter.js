class TrafficCounter {
  constructor(id, location, vehicleCount, averageSpeed, overSpeedLimit) {
    this.id = id;
    this.location = location;
    this.vehicleCount = vehicleCount;
    this.averageSpeed = averageSpeed;
    this.overSpeedLimit = overSpeedLimit;
  }
} 

module.exports = TrafficCounter;
  