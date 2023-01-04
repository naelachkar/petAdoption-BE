const bcrypt = require("bcryptjs");

async function hashingPassword(req, res, next) {
  if (req.body.password) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
  }
  next();
}

module.exports = hashingPassword;
