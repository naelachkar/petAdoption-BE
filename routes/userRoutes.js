const express = require("express");
const router = express.Router();

// Get a user by their ID
router.get("/:id", () => {});

// Logged-in only
// To edit a user (edit own profile)
router.put("/:id", () => {});

// Admin only
// Get all the users
router.get("/", () => {});

// Get user by their ID full (including pets)
router.get("/:id/full", () => {});

module.exports = router;
