const { hello } = require('../models/usersModel.js');

function sayHello(req, res) {
    res.send(hello());
    
}

module.exports = { sayHello };
