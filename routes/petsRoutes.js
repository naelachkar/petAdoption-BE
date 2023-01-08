const express = require("express");
const router = express.Router();
const petsController = require("../controllers/petsController")

//! to be removed (used only in the controller and possible in the middlewares)
const Pets = require("../Schemas/petsSchema");

// To retrive pet //TODO must perform the sorting here and not in the front end
router.get("/", petsController.searchPets);

// To retrieve a pet by its ID
router.get("/:id", petsController.getPetById);

// Logged-in only
// To adopt or foster a pet (logged-in only)
router.post("/:id/adopt", () => {});

// To return a pet (logged-in only)
router.post("/:id/return", () => {});

// To save a pet (logged-in only)
router.post("/:id/save", () => {});

// To delete a save pet (logged-in only)
router.delete("/:id/save", () => {});

// Admin only
// To add a pet (admin only)
router.post("/", () => {});

// To edit a pet (admin only)
router.put("/:id", () => {});

// To get the pets owned or saved by a user
router.get("/user/:id", () => {});

module.exports = router;
