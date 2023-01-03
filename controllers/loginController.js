const jwt = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY;
const Users = require("../models/usersModel");

exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    const token = jwt.sign({ userId: user._id, admin: user.admin }, TOKEN_KEY);
    return res.status(201).send({ token });
  } catch (err) {
    res.status(500).send(err);
  }
};
