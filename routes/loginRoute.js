const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/usersModels");
const doesUserExist = require("../middlewares/doesUserExist")

router.post("/", doesUserExist, async (req, res) => {
  const user = req.body;
  try {
    const users = await Users.find();
    const foundUser = users.find((item) => item.email === user.email);
    if (foundUser) {
      const isPasswordCorrect = await bcrypt.compare(user.password, foundUser.password)
      if (isPasswordCorrect) {
        const userInfo = {
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          phoneNumber: foundUser.phoneNumber,
          email: foundUser.email,
          bio: foundUser.bio,
        };
        res.json(userInfo);
      } else {
        res.status(400).send("Invalid email or password");
      }
    } else {
      res.status(500).send(false);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
