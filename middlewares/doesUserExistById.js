const Users = require("../Schemas/usersSchema");

async function doesUserExistById(req, res, next) {
  try {
    const user = await Users.findOne({ _id: req.body.userId });
    if (!user) {
      res.status(400).send("User doesn't exist");
      return;
    }
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = doesUserExistById;
