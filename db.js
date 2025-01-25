const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'your-rds-endpoint',
    user: 'admin',
    password: 'Password123!',
    database: 'your-database-name',
});

const queryDatabase = async (query) => {
    const [rows] = await pool.execute(query);
    return rows;
};

module.exports = { queryDatabase };
