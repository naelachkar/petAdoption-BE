const Pets = require("../Schemas/petsSchema");
const Users = require("../Schemas/usersSchema");

exports.searchPets = async (req, res) => {
  const queryParams = req.query.query;
  try {
    const retrievedPets = await Pets.find(queryParams);
    res.json(retrievedPets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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

exports.adoptOrFosterPet = async (req, res) => {
  if (req.body.isAlreadyOwned) {
    res.status(400).send(`Pet already ${req.body.isAlreadyOwned}`);
    return;
  }
  const { userId, adoptOrFoster } = req.body;
  const petId = req.params.id.slice(1);
  try {
    if (adoptOrFoster) {
      const updatedUser = await Users.findOneAndUpdate(
        { _id: userId },
        { $push: { "pets.adoptedPets": petId } },
        { new: true }
      );
      //TODO update the pet
      res.status(201).json({ ok: true });
    } else {
      const updatedUser = await Users.findOneAndUpdate(
        { _id: userId },
        { $push: { "pets.fosteredPets": petId } },
        { new: true }
      );
      //TODO update the pet
      res.status(201).json({ ok: true });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.savePet = async (req, res) => {
  if (req.body.isAlreadySaved) {
    res.status(400).send("Pet already saved");
  }
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

exports.getPetsOwnedByUser = async (req, res) => {
  try {
    const pets = await Users.findById(req.body.userId, "pets")
      .populate("pets.adoptedPets")
      .populate("pets.fosteredPets")
      .populate("pets.savedPets");
    res.status(200).send(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}