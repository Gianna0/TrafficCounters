class TrafficCounter {
  constructor(id, name, limitSpeed, location, country, city, street, deleted) {
    this.id = id;
    this.name = name;
    this.limitSpeed = limitSpeed;
    this.location = location;
    this.country = country;
    this.city = city;
    this.street = street;
    this.deleted = deleted;
  }
} 

module.exports = TrafficCounter;
