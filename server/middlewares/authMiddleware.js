const { getTokens } = require("../services/tokenService");

// Middleware to protect routes
const isLoggedIn = (req, res, next) => {
  // Token מגיע מה־headers: Authorization: Bearer <token>
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1]; // "Bearer <token>"

  const activeTokens = getTokens();
  if (!activeTokens.includes(token)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

module.exports = { isLoggedIn };
