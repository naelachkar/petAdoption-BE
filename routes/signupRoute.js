const express = require("express");
const router = express.Router();
const isNewUser = require("../middlewares/isNewUser");
const hashingPassword = require("../middlewares/hashingPassword")
const signupController = require("../controllers/signupController");

router.post("/", isNewUser, hashingPassword, signupController);

module.exports = router;
