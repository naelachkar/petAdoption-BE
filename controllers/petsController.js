const Pets = require("../Schemas/petsModel");

exports.getPetById = async (req, res) => {
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
};
