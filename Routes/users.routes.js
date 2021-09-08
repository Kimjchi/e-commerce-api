const express = require('express');
const userControllers = require('../controllers/users.controllers');
const router = express.Router(); 

router.get('/me', userControllers.getAll); 

module.exports = router;