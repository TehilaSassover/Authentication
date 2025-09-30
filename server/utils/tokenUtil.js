const jwt = require("jsonwebtoken");

const SECRET_KEY = "mySuperSecretKey"; // In production, use environment variables

function generateToken(user) {
  return jwt.sign(
    { username: user.username },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}

module.exports = { generateToken, SECRET_KEY };
