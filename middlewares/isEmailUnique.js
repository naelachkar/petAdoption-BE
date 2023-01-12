const Users = require("../Schemas/usersSchema");

async function isEmailUnique(req, res, next) {
  const user = await Users.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("Email already used");
    return;
  }
  next();
}

module.exports = isEmailUnique;
