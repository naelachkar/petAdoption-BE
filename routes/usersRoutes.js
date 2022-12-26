const fs = require("fs");
const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  const user = req.body;
  try {
    const users = JSON.parse(fs.readFileSync("./database/UsersDataSet.json"));
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
        res.send(userInfo);
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
