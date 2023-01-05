const express = require("express");
const router = express.Router();
const doesUserExist = require("../middlewares/doesUserExist");
const isPasswordCorrect = require("../middlewares/isPasswordCorrect");
const loginController = require("../controllers/loginController");
const validateBody = require("../middlewares/validateBody");
const { loginSchema } = require("../Schemas/validationSchemas");

router.post("/", validateBody(loginSchema), doesUserExist, isPasswordCorrect, loginController.login);

module.exports = router;
