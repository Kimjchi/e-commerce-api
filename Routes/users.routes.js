const express = require('express');
const userControllers = require('../controllers/users.controllers');
const router = express.Router(); 

router.get('/', userControllers.getAll); 
router.post('/registration', userControllers.registerNewUser);
router.post('/login', userControllers.login);

module.exports = router;