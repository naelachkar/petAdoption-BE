const fs = require("fs");
const express = require("express");
const Users = require("../models/usersModels")

const router = express.Router();

router.post("/", async (req, res) => {
  const user = req.body;
  try {
    const users = await Users.find();
    const foundUser = users.find((item) => item.email === user.email);
    console.log(foundUser);
    if (foundUser) {
      if (user.password === foundUser.password) {
        const userInfo = {
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          phoneNumber: foundUser.phoneNumber,
          email: foundUser.email,
          bio: foundUser.bio,
        };
        res.json(userInfo);
      } else {
        res.status(500).send(false);
      }
    } else {
      res.status(500).send(false);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
