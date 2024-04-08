const JWT_SECRET = require("../Secret");
const jwt = require("jsonwebtoken");
function authentication(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Access Denied");
  }
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}

module.exports = authentication;
