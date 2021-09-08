const express = require('express');
const userControllers = require('../controllers/users.controllers');
const router = express.Router(); 

router.get('/', userControllers.getAll); 
router.get('/:id', userControllers.getUserById);
router.post('/registration', userControllers.registerNewUser);
router.post('/login', userControllers.login);
router.put('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);

module.exports = router;