// SQL queries
const pool = require('../config');

const getAllUsers = () => {
    return pool.query('select * from user_account;');
}

module.exports = { getAllUsers };