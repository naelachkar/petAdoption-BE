const express = require("express");
const router = express.Router();
const Pets = require("../models/petsModels");


router.get("/", async (req, res) => {
  try {
    const allPets = await Pets.find();
    res.json(allPets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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

router.post("/", async (req, res) => {
  const myPet = new Pets({
    name: req.body.name
  });
  try {
    const newPet = await myPet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
