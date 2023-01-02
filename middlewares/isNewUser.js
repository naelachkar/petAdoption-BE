const mongoose = require("mongoose");
const Users = require("../models/usersModels");

async function isNewUser(req, res, next) {
  const user = await Users.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("User already exists");
  } else {
    next();
  }
};


module.exports = isNewUser;