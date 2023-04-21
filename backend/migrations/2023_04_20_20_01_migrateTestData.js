module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.insert(null, 'traffic_counters', {id: 1, name: 'Test Traffic Counter1', limit_speed: 50, location: 'Test Location1', country: 'Poland', city: 'ZG', street: 'Wrocławska', deleted: false});
        await queryInterface.insert(null, 'traffic_counters', {id: 2, name: 'Test Traffic Counter2', limit_speed: 50, location: 'Test Location2', country: 'Poland', city: 'ZG', street: 'Wrocławska', deleted: false});
        await queryInterface.insert(null, 'traffic_counters', {id: 3, name: 'Test Traffic Counter3', limit_speed: 50, location: 'Test Location3', country: 'Poland', city: 'ZG', street: 'Wrocławska', deleted: false});
        await queryInterface.insert(null, 'traffic_counters', {id: 4, name: 'Test Traffic Counter4', limit_speed: 50, location: 'Test Location4', country: 'Poland', city: 'ZG', street: 'Wrocławska', deleted: false});
        await queryInterface.insert(null, 'traffic_counters', {id: 5, name: 'Test Traffic Counter5', limit_speed: 50, location: 'Test Location5', country: 'Poland', city: 'ZG', street: 'Wrocławska', deleted: false});
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('traffic_counters', {
            id: {
              [Sequelize.Op.between]: [1, 5]
            }
          }, {});
    }
}