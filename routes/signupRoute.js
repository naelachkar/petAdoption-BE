const express = require("express");
const router = express.Router();
const isNewUser = require("../middlewares/isNewUser");
const signup = require("../controllers/signup");

router.post("/", isNewUser, signup);

module.exports = router;
