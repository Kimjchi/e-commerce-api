// SQL queries
const db = require('../db');

const getAllUsers = () => {
    return db.query('select * from user_account;');
};

const createNewUser = async ({firstName, lastName, email, password}) => {
    const values = [firstName, lastName, email, password];
    // get last ID + 1 and add it at the beginning of the values array
    const lastId = await db.query('select id from user_account order by id desc limit 1;');
    const newID = Number(lastId.rows[0]['id']) + 1;
    // insert new user
    return db.query('insert into user_account values ($1, $2, $3, $4, $5)', [newID, ...values]);
};

module.exports = { 
    getAllUsers,
    createNewUser
};