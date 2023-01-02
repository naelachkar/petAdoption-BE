const Users = require("../models/usersModel");

exports.getUserById = async (req, res) => {
  try {
    const user = await Users.findOne({ _id: req.body.userId });
    const userInfo = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      bio: user.bio,
      admin: user.admin,
    };
    res.status(200).send(userInfo);
  } catch (err) {
    res.status(500).send(err);
  }
};
