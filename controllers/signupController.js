const Users = require("../Schemas/usersSchema");

exports.signup = async (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    bio: "",
    admin: false,
    pets: {
      adoptedPets: [],
      fosteredPets: [],
      savedPets: [],
    }
  };
  try {
    const user = await Users.create(newUser);
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
