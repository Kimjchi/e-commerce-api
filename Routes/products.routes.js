const express = require('express');
const productsControllers = require('../Controllers/products.controllers');
const router = express.Router(); 

/**
 * @swagger
 * definitions:
 *   Product:
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       price:
 *         type: number
 */

/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns all products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of products
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.get('/', productsControllers.getAll); 

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Product's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single product
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.get('/:id', productsControllers.getProductById);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     tags: Products
 *     description: Updates a single product
 *     produces: application/json
 *     parameters:
 *       name: product
 *       in: body
 *       description: Fields for the Product ressource
 *       schema:
 *         type: array
 *         $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:id', productsControllers.updateProduct);

/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     description: Create a new product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: product
 *         description: Product object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/', productsControllers.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     tags:
 *       - Products
 *     description: Deletes a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Product's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;