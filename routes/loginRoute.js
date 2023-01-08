const express = require("express");
const router = express.Router();
const doesUserExist = require("../middlewares/doesUserExist");
const isPasswordCorrect = require("../middlewares/isPasswordCorrect");
const loginController = require("../controllers/loginController");
const validate = require("../middlewares/validate");
const { loginSchema } = require("../Schemas/validationSchemas");

router.post("/", validate("body", loginSchema), doesUserExist, isPasswordCorrect, loginController.login);

module.exports = router;
