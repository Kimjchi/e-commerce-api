const db = require('../db');

const getAllProducts = () => {
    return db.query('select * from product;');
};

const getProductById = (id) => {
    return db.query('select * from product where id=$1;', [id]);
};

const updateProduct = ({name, description, price}, id) => {
    const values = [name, description, price, id]
    return db.query(`update product set name=$1, description=$2, price=$3 where id=$4;`, values);
};

const createProduct = ({name, description, price}) => {
    const values = [name, description, price];
    // insert new user
    return db.query('insert into product (name, description, price) values ($1, $2, $3)', values);
};

const deleteProductById = (id) => {
    return db.query('delete from product where id=$1;', [id]);
}

module.exports = {
    getAllProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProductById
}