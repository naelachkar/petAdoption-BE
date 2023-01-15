const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const doesUserExistById = require("../middlewares/doesUserExistById");
const isAdmin = require("../middlewares/isAdmin");
const hashingPassword = require("../middlewares/hashingPassword");
const validate = require("../middlewares/validate");
const checkPasswords = require("../middlewares/checkPasswords");
const isEmailUnique = require("../middlewares/isEmailUnique");
const { editUserSchema, idSchema } = require("../Schemas/validationSchemas");

// Logged-in only
// Get a user by their ID (to retrieve own info)
router.get(
  "/:id",
  validate("params", idSchema),
  verifyToken,
  doesUserExistById,
  userController.getUserById
);

// To edit a user (edit own profile)
router.put(
  "/:id",
  validate("body", editUserSchema),
  validate("params", idSchema),
  verifyToken,
  doesUserExistById,
  isEmailUnique,
  checkPasswords,
  hashingPassword,
  userController.updateUserInfo
);

// Admin only
// Get all the users
router.get("/", verifyToken, isAdmin, userController.getAllUsers);

// Get user by their ID full (including pets)
router.get(
  "/:id/full",
  validate("params", idSchema),
  verifyToken,
  isAdmin,
  userController.getUserByIdFull
);

module.exports = router;
