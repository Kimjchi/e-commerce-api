const db = require('../db');

const getAllUsers = () => {
    return db.query('select * from user_account;');
};

const createNewUser = ({firstName, lastName, email, password}) => {
    const values = [firstName, lastName, email, password];
    // insert new user
    return db.query('insert into user_account (first_name, last_name, email, password) values ($1, $2, $3, $4)', values);
};

const findUser = ({email}) => {
    return db.query(`select password from user_account where email=$1`, [email]);
};

const getUserById = (id) => {
    return db.query('select * from user_account where id=$1;', [id]);
};

const updateUser = ({firstName, lastName, email, password}, id) => {
    const values = [firstName, lastName, email, password, id];
    return db.query(`update user_account set first_name=$1, last_name=$2, email=$3, password=$4 where id=$5;`, values);
};

const deleteUserById = (id) => {
    return db.query('delete from user_account where id=$1;', [id]);
}


module.exports = { 
    getAllUsers,
    createNewUser,
    findUser,
    getUserById,
    updateUser,
    deleteUserById
};