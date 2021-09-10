// Import the MySQL2 module
const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  // port: 3306,
  // MySQL username,
  user: 'root',
  // MySQL password
  password: 'zFxRKw0azk&m',
  database: 'personnel'
});

// Export the database connection
module.exports = db;

// Directory to db folder: "/Users/jaspreetkhela/Google Drive/SCS Coding Bootcamp Course Work/Bootcamp/Module 12 - SQL/Weekly Challenge -  SQL Challenge - Employee Tracker/db"