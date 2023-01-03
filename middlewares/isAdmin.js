const jwt = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY;

async function isAdmin(req, res, next) {
  if (!req.body.admin) {
    res.status(401).send("The user is not an admin");
    return;
  }
  next();
}

module.exports = isAdmin;
