const Users = require("../models/usersModel");

async function doesUserExistById(req, res, next) {
  const user = await Users.findOne({ _id: req.body.userId });
  if (!user) {
    res.status(400).send("User doesn't exist");
    return;
  }
  next();
}

module.exports = doesUserExistById;
