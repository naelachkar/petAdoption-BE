const Pets = require("../Schemas/petsSchema");
const Users = require("../Schemas/usersSchema");

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

exports.searchPets = async (req, res) => {
  const queryParams = req.query.query;
  try {
    const retrievedPets = await Pets.find(queryParams);
    res.json(retrievedPets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.savePet = async (req, res) => {
  const { userId } = req.body;
  const petId = req.params.id.slice(1);
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { _id: userId },
      { $push: { "pets.savedPets": petId } },
      { new: true }
    );
    res.status(201).json({ ok: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.adoptOrFosterPet = async (req, res) => {
  const { userId, adoptOrFoster } = req.body;
  console.log(req.body);
  const petId = req.params.id.slice(1);
  try {
    if (adoptOrFoster) {
      const updatedUser = await Users.findOneAndUpdate(
        { _id: userId },
        { $push: { "pets.adoptedPets": petId } },
        { new: true }
      );
      res.status(201).json({ ok: true });
    } else {
      const updatedUser = await Users.findOneAndUpdate(
        { _id: userId },
        { $push: { "pets.fosteredPets": petId } },
        { new: true }
      );
      res.status(201).json({ ok: true });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
