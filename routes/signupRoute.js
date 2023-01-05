const express = require("express");
const router = express.Router();
const isNewUser = require("../middlewares/isNewUser");
const hashingPassword = require("../middlewares/hashingPassword")
const signupController = require("../controllers/signupController");
const validateBody = require("../middlewares/validateBody");
const { signupSchema } = require("../Schemas/validationSchemas");
const checkPasswords = require("../middlewares/checkPasswords");

router.post("/", validateBody(signupSchema), isNewUser, checkPasswords, hashingPassword, signupController.signup);

module.exports = router;
