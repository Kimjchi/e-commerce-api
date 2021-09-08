const Pool = require('pg').Pool;

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'e-commerce',
    password: '',
    port: 5432,
  });

module.exports = {
    async query(text, params) {
        const start = Date.now()
        const res = await pool.query(text, params)
        const duration = Date.now() - start
        console.log('executed query', { text, duration, rows: res.rowCount })
        return res
    },
};