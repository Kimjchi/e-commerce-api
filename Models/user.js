// SQL queries
const db = require('../db');

const getAllUsers = () => {
    return db.query('select * from user_account;');
}

module.exports = { getAllUsers };