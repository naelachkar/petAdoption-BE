const Users = require("../models/usersModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    users.forEach(user => user.password = undefined)
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getOwnUserInfo = async (req, res) => {
  try {
    const user = await Users.findOne({ _id: req.body.userId });
    user.password = undefined;
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getUserById = async (req, res) => {
  const id = req.params.id.slice(1);
  try {
    const user = await Users.findOne({ _id: id });
    user.password = undefined;
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
}
