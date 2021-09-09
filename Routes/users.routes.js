const express = require('express');
const userControllers = require('../Controllers/users.controllers');
const router = express.Router(); 

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       id:
 *         type: integer
 *       first_name:
 *         type: string
 *       last_name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/', userControllers.getAll); 

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/:id', userControllers.getUserById);

/**
 * @swagger
 * /users/registration:
 *   post:
 *     tags:
 *       - Users
 *     description: Register a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/registration', userControllers.registerNewUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - Users
 *     description: Login an existing user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Successfully created
 */
router.post('/login', userControllers.login);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags: Users
 *     description: Updates a single user
 *     produces: application/json
 *     parameters:
 *       name: user
 *       in: body
 *       description: Fields for the User ressource
 *       schema:
 *         type: array
 *         $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:id', userControllers.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:id', userControllers.deleteUser);

module.exports = router;