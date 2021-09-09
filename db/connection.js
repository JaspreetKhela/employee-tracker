// Import the MySQL2 module
const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'zFxRKw0azk&m',
  database: 'personnel'
});

// Export the database connection
module.exports = db;