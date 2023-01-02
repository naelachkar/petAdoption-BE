const express = require("express");
const router = express.Router();
const doesUserExist = require("../middlewares/doesUserExist");
const isPasswordCorrect = require("../middlewares/isPasswordCorrect");
const loginController = require("../controllers/loginController")

router.post("/", doesUserExist, isPasswordCorrect, loginController);

module.exports = router;
