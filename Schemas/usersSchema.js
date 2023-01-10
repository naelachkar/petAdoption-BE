const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: String,
  password: {
    type: String,
    required: true,
  },
  bio: String,
  admin: Boolean,
  pets: {
    savedPets: [{ type: mongoose.Types.ObjectId, ref: "pets" }],
    adoptedPets: [{ type: mongoose.Types.ObjectId, ref: "pets" }],
    fosteredPets: [{ type: mongoose.Types.ObjectId, ref: "pets" }],
  },
});

module.exports = mongoose.model("users", userSchema, "users");
