const express = require("express");
const router = express.Router();
const doesUserExist = require("../middlewares/doesUserExist");
const isPasswordCorrect = require("../middlewares/isPasswordCorrect");
const login = require("../controllers/login")

router.post("/", doesUserExist, isPasswordCorrect, login);

module.exports = router;
