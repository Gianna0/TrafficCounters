const TrafficCounter = require('../models/trafficCounter');
const MyError = require('../errors/MyError');

class SpeedometerController {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }
  
  async addTrafficCounter(trafficCounter) {
    await this.dbConnection.promise().query('INSERT INTO traffic_counters SET ?', {
        name: trafficCounter.name,
        limit_speed: trafficCounter.limitSpeed,
        location: trafficCounter.location,
        country: trafficCounter.country,
        city: trafficCounter.city,
        street: trafficCounter.street,
        deleted: false
    });
  }

    async deleteTrafficCounter(id) {
        const [rows] = await this.dbConnection.promise().query('SELECT id, name, limit_speed, location, country, city, street, deleted FROM traffic_counters WHERE id = ?', [id]);
        if (!rows[0]) {
            throw new MyError(`TrafficCounter with id ${id} not found`);
        }
        // oznaczenie jako usunięty (zachowanie w bazie danych)
        await this.dbConnection.promise().query('UPDATE traffic_counters SET deleted = ? WHERE id = ?', [true, id]);
    }

    async updateTrafficCounter(trafficCounter) {
        const rows = await this.dbConnection.promise().query('SELECT id, name, limit_speed, location, country, city, street, deleted FROM traffic_counters WHERE id = ?', [trafficCounter.id])
        if (!rows[0]) {
            throw new MyError(`Traffic counter with id ${id} not found.`);
        }

        const trafficCounterFromDb = rows[0];
        trafficCounterFromDb.name = trafficCounter.name;
        trafficCounterFromDb.limit_speed = trafficCounter.limitSpeed;
        trafficCounterFromDb.location = trafficCounter.location;
        trafficCounterFromDb.country = trafficCounter.country;
        trafficCounterFromDb.city = trafficCounter.city;
        trafficCounterFromDb.street = trafficCounter.street;

        this.dbConnection.promise().query('UPDATE traffic_counters SET name = ?, limit_speed = ?, location = ?, country = ?, city = ?, street = ? WHERE id = ?', [trafficCounterFromDb.name, trafficCounterFromDb.limit_speed, trafficCounterFromDb.location, trafficCounterFromDb.country, trafficCounterFromDb.city, trafficCounterFromDb.street, trafficCounterFromDb.id])
        return trafficCounterFromDb;
    }

    async getTrafficCounter(id) {
        const [rows] = await this.dbConnection.promise().query('SELECT id, name, limit_speed, location, country, city, street, deleted FROM traffic_counters WHERE id = ?', [id]);
        console.log(rows);
        if (!rows[0]) {
            return null
        }
        const traffic = new TrafficCounter(rows[0].id, rows[0].name, rows[0].limit_speed, rows[0].location, rows[0].country, rows[0].city, rows[0].street, rows[0].deleted);
        console.log(traffic);
        return traffic;
    }
}

function createSpeedometerController(dbConnection) {
  return new SpeedometerController(dbConnection);
}

module.exports = {
    SpeedometerController,
    createSpeedometerController
}