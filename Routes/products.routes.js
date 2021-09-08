const express = require('express');
const productsControllers = require('../controllers/products.controllers');
const router = express.Router(); 

router.get('/', productsControllers.getAll); 
router.get('/:id', productsControllers.getProductById);
router.put('/:id', productsControllers.updateProduct);
router.post('/', productsControllers.createProduct);
router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;