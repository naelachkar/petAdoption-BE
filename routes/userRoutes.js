const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const doesUserExistById = require("../middlewares/doesUserExistById");
const isAdmin = require("../middlewares/isAdmin");
const userController = require("../controllers/userController")

// Get a user by their ID
router.get("/:id", verifyToken, doesUserExistById, userController.getUserById);

// Logged-in only
// To edit a user (edit own profile)
router.put("/:id", () => {});

// Admin only
// Get all the users
router.get("/", verifyToken, isAdmin, userController.getAllUsers);

// Get user by their ID full (including pets)
router.get("/:id/full", () => {});

module.exports = router;
