const { findUser } = require("../models/usersModel");
const { generateToken } = require("../utils/tokenUtil");
const { addToken } = require("../services/tokenService");

const login = (req, res) => {
    const { username, password } = req.body;

    console.log("Got request:", req.body);
    const user = findUser(username, password);
    if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
    }
    const token = generateToken(user);
    addToken(token);

    return res.json({ token });
};

module.exports = { login };
