const express = require("express");
const router = express.Router();
const isNewUser = require("../middlewares/isNewUser");
const hashingPassword = require("../middlewares/hashingPassword")
const signup = require("../controllers/signup");

router.post("/", isNewUser, hashingPassword, signup);

module.exports = router;
