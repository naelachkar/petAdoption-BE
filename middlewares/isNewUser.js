const Users = require("../Schemas/usersSchema");

async function isNewUser(req, res, next) {
  const user = await Users.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("User already exists");
    return;
  }
  next();
}

module.exports = isNewUser;
