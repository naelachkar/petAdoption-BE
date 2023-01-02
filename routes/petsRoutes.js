const express = require("express");
const router = express.Router();
const Pets = require("../models/petsModel");

// To retrive pet //TODO must perform the sorting here and not in the front end
router.get("/", async (req, res) => {
  try {
    const allPets = await Pets.find();
    res.json(allPets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// To retrieve a pet by its ID
router.get("/:id", async (req, res) => {
  const id = req.params.id.slice(1);
  try {
    const pet = await Pets.findById(id);
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ message: "Pet not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
