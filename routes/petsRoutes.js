const express = require("express");
const { getAllPets } = require("../models/petsModels");

const router = express.Router();

router.get("/pets", (req, res) => {
  try {
    const allPets = getAllPets();
    res.send(allPets);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
