const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/usersModels");
const doesUserExist = require("../middlewares/doesUserExist");
const isPasswordCorrect = require("../middlewares/isPasswordCorrect");

router.post("/", doesUserExist, isPasswordCorrect, async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    const userInfo = {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      bio: user.bio,
    };
    res.json(userInfo);
  } catch (error) {
    res.status(500).send(err);
  }
});

module.exports = router;
