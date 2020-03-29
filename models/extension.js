// create mysql pool for multiple connections
const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host: "192.168.1.201",
  user: "developer",
  password: "ch@ng3itDev",
  database: "asterisk",
  multipleStatements: true
});

module.exports = pool;
