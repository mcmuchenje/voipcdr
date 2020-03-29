// create mysql pool for multiple connections
const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host: "192.168.1.201",
  user: "admin",
  password: "somepassword",
  database: "asteriskcdrdb",
  multipleStatements: true
});

module.exports = pool;
