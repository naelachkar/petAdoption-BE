const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/usersModels");

router.post("/", async (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: await bcrypt.hash(req.body.password, 10),
    bio: "",
    admin: false,
  };
  try {
    const user = await Users.create(newUser);
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
