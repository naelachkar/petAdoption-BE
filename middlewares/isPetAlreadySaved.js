const Users = require("../Schemas/usersSchema");

async function isPetAlreadySaved(req, res, next) {
  const petId = req.params.id;
  try {
    const isAlready = await Users.findOne({
      _id: req.body.userId,
      "pets.savedPets": petId,
    });
    if (isAlready) {
      req.body.isAlreadySaved = true;
    } else {
      req.body.isAlreadySaved = false;
    }
    next();
  } catch (err) {
    res.send(500).json({ message: err.message });
  }
}

module.exports = isPetAlreadySaved;
