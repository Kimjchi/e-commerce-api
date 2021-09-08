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

const createProduct = async ({name, description, price}) => {
    const values = [name, description, price];
    // get last ID + 1 and add it at the beginning of the values array
    const lastId = await db.query('select id from product order by id desc limit 1;');
    const newID = Number(lastId.rows[0]['id']) + 1;
    // insert new user
    return db.query('insert into product values ($1, $2, $3, $4)', [newID, ...values]);
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