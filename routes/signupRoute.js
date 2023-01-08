const express = require("express");
const router = express.Router();
const isNewUser = require("../middlewares/isNewUser");
const hashingPassword = require("../middlewares/hashingPassword")
const signupController = require("../controllers/signupController");
const validate = require("../middlewares/validate");
const { signupSchema } = require("../Schemas/validationSchemas");
const checkPasswords = require("../middlewares/checkPasswords");

router.post("/", validate(signupSchema, "body"), isNewUser, checkPasswords, hashingPassword, signupController.signup);

module.exports = router;
