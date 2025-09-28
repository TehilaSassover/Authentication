const express = require('express');
const router = express.Router();
const { sayHello } = require('../controllers/usersController.js');


router.get('/', sayHello);

module.exports = router;