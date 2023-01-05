const bcrypt = require("bcryptjs");
const Users = require("../Schemas/usersModel");

async function isPasswordCorrect(req, res, next) {
  try {
    const user = await Users.findOne({ email: req.body.email });
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) {
      res.status(400).send("Invalid password");
      return;
    } 
    next();
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = isPasswordCorrect;
