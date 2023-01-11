const Users = require("../Schemas/usersSchema");

async function isPetAlreadyOwned(req, res, next) {
  const petId = req.params.id;
  try {
    const isAlreadyOwned = await Users.findOne({
      _id: req.body.userId,
      $or: [{ "pets.adoptedPets": petId }, { "pets.fosteredPets": petId }],
    });
    if (isAlreadyOwned) {
      if (isAlreadyOwned.pets.adoptedPets.some((pet) => pet.equals(petId))) {
        req.body.isAlreadyOwned = "adopted";
      } else if (
        isAlreadyOwned.pets.fosteredPets.some((pet) => pet.equals(petId))
      ) {
        req.body.isAlreadyOwned = "fostered";
      }
    } else {
      req.body.isAlreadyOwned = false;
    }
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = isPetAlreadyOwned;
