const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const doesUserExistById = require("../middlewares/doesUserExistById");
const isAdmin = require("../middlewares/isAdmin");
const userController = require("../controllers/userController");
const hashingPassword = require("../middlewares/hashingPassword");

// Get a user by their ID
router.get("/:id", verifyToken, doesUserExistById, userController.getOwnUserInfo);

// Logged-in only
// To edit a user (edit own profile)
router.put("/:id", verifyToken, doesUserExistById, hashingPassword, userController.updateUserInfo);

// Admin only
// Get all the users
router.get("/", verifyToken, isAdmin, userController.getAllUsers);

// Get user by their ID full (including pets)
router.get("/:id/full", verifyToken, isAdmin, userController.getUserById);

module.exports = router;
