const Users = require("../models/usersModel");

exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    const userInfo = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      bio: user.bio,
      admin: user.admin,
    };
    res.json(userInfo);
  } catch (err) {
    res.status(500).send(err);
  }
};
