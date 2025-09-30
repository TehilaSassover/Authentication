const { findUser } = require("../models/usersModel");
const { generateToken } = require("../utils/tokenUtil");
const { addToken, findToken, deleteToken } = require("../services/tokenService");

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

const logout = (req, res) => {
    const { token } = req.body;

    console.log("Got request:", req.body);
    const isToken = findToken(token);
    if (!isToken) {
        return res.status(401).json({ message: "Token not Found" });
    }

    deleteToken(token);

    return res.json({ token });
};

module.exports = { login, logout };
