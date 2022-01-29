const Pool = require("pg").Pool;
const pool = new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: "mydb"
});

module.exports = pool;