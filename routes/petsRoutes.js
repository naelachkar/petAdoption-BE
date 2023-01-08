const express = require("express");
const router = express.Router();
const petsController = require("../controllers/petsController");
const validate = require("../middlewares/validate");
const { idSchema } = require("../Schemas/validationSchemas");

// To search pets with params
router.get("/", petsController.searchPets);

// To retrieve a pet by its ID
router.get("/:id", validate(idSchema, "params"), petsController.getPetById);

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
