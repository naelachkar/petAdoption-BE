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
  const petId = req.params.id;
  try {
    const pet = await Pets.findById(petId);
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
    return res.status(400).send(`Pet already ${req.body.isAlreadyOwned}`);
  }
  const { userId, adoptOrFoster } = req.body;
  const petId = req.params.id;
  try {
    if (adoptOrFoster) {
      const newInfoUser = await Users.findOneAndUpdate(
        { _id: userId },
        { $push: { "pets.adoptedPets": petId } },
        { new: true }
      );
      const newInfoPet = await Pets.findOneAndUpdate(
        { _id: petId },
        { adoptionStatus: "Adopted" }
      );
      res.status(201).json({ ok: true });
    } else {
      const newInfoUser = await Users.findOneAndUpdate(
        { _id: userId },
        { $push: { "pets.fosteredPets": petId } },
        { new: true }
      );
      const newInfoPet = await Pets.findOneAndUpdate(
        { _id: petId },
        { adoptionStatus: "Fostered" }
      );
      res.status(201).json({ ok: true });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.returnPet = async (req, res) => {
  if (!req.body.isAlreadyOwned) {
    return res.status(400).send(`You don't own the pet`);
  }
  const { userId, adoptOrFoster } = req.body;
  const petId = req.params.id;
  try {
    if (adoptOrFoster) {
      const newInfoUser = await Users.findOneAndUpdate(
        { _id: userId },
        { $pull: { "pets.adoptedPets": petId } },
        { new: true }
      );
      res.status(201).json({ ok: true });
    } else {
      const newInfoUser = await Users.findOneAndUpdate(
        { _id: userId },
        { $pull: { "pets.fosteredPets": petId } },
        { new: true }
      );
      res.status(201).json({ ok: true });
    }
    const newInfoPet = await Pets.findOneAndUpdate(
      { _id: petId },
      { adoptionStatus: "Available" }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.savePet = async (req, res) => {
  if (req.body.isAlreadySaved) {
    return res.status(400).send("Pet already saved");
  }
  const { userId } = req.body;
  const petId = req.params.id;
  try {
    const newInfoUser = await Users.findOneAndUpdate(
      { _id: userId },
      { $push: { "pets.savedPets": petId } },
      { new: true }
    );
    res.status(201).json({ ok: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSavedPet = async (req, res) => {
  if (!req.body.isAlreadySaved) {
    return res.status(400).send("Pet not already saved");
  }
  const { userId } = req.body;
  const petId = req.params.id;
  try {
    const newInfoUser = await Users.findOneAndUpdate(
      { _id: userId },
      { $pull: { "pets.savedPets": petId } },
      { new: true }
    );
    res.status(201).json({ ok: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPetsOwnedByUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const pets = await Users.findById(userId, "pets")
      .populate("pets.adoptedPets")
      .populate("pets.fosteredPets")
      .populate("pets.savedPets");
    res.status(200).send(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.editPet = async (req, res) => {
  const newInfo = { ...req.body };
  newInfo.picture = req.file.path;
  try {
    const update = await Pets.findOneAndUpdate(
      { _id: req.params.id },
      newInfo,
      { new: true }
    );
    res.status(201).send(update);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
