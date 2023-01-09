const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
    savedPets: [{ type: mongoose.Types.ObjectId, ref: "Pets" }],
    adoptedPets: [{ type: mongoose.Types.ObjectId, ref: "Pets" }],
    fosteredPets: [{ type: mongoose.Types.ObjectId, ref: "Pets" }],
  },
});

module.exports = mongoose.model("users", userSchema, "users");
