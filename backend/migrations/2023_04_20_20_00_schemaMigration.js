module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('traffic_counters', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                length: 200
            },
            limit_speed: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            location: {
                type: Sequelize.STRING,
                allowNull: false,
                length: 255
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false,
                length: 255
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
                length: 500
            },
            street: {
                type: Sequelize.STRING,
                allowNull: false,
                length: 500
            },
            deleted: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        });
        await queryInterface.addIndex('traffic_counters', ['name'], { indexName: 'idx__traffic_counters__name' });
        await queryInterface.addIndex('traffic_counters', ['location'], { indexName: 'idx__traffic_counters__location' });
        await queryInterface.addIndex('traffic_counters', ['country'], { indexName: 'idx__traffic_counters__country' });
        await queryInterface.addIndex('traffic_counters', ['city'], { indexName: 'idx__traffic_counters__city' });
        await queryInterface.addIndex('traffic_counters', ['street'], { indexName: 'idx__traffic_counters__street' });
        await queryInterface.createTable('traffic_measurements', {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
            traffic_counter_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'traffic_counters',
                    key: 'id',
                    onDelete: 'NO ACTION'
                }
            },
          vehicles_count: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          average_speed: {
            type: Sequelize.FLOAT,
            allowNull: true
          },
          over_speed_limit_count: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          }
        });
        await queryInterface.createTable('traffic_counter_states', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            traffic_counter_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'traffic_counters',
                    key: 'id',
                    onDelete: 'NO ACTION'
                }
            },
            traffic_jams: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            sabotage_alarm :{
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            power_failure_alarm :{
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            low_battery_alarm :{
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeIndex('traffic_counters', 'idx__traffic_counters__street');
        await queryInterface.removeIndex('traffic_counters', 'idx__traffic_counters__city');
        await queryInterface.removeIndex('traffic_counters', 'idx__traffic_counters__country');
        await queryInterface.removeIndex('traffic_counters', 'idx__traffic_counters__location');
        await queryInterface.removeIndex('traffic_counters', 'idx__traffic_counters__name');
        await queryInterface.dropTable('traffic_measurements');
        await queryInterface.dropTable('traffic_counter_states');
        await queryInterface.dropTable('traffic_counters');
    }
}