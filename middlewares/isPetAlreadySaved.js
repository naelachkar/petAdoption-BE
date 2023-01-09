const Users = require("../Schemas/usersSchema");

async function isPetAlreadySaved(req, res, next) {
  const petId = req.params.id.slice(1);
  try {
    const isAlready = await Users.findOne({
      _id: req.body.userId,
      "pets.savedPets": petId,
    });
    if (!isAlready) {
      next();
    } else {
      res.status(400).send("Pet already saved");
    }
  } catch (err) {
    res.send(500).json({ message: err.message });
  }
}

module.exports = isPetAlreadySaved;
