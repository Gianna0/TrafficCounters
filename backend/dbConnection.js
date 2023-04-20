const mysql = require('mysql2');

const connection = mysql.createPool({
  host: process.env.DATABASE_ADDRESS,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT
});

module.exports = connection;
