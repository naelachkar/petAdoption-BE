const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: "Dog",
  },
  adoptionStatus: {
    type: String,
    required: true,
    default: "Available",
  },
  picture: String,
  height: Number,
  weight: Number,
  color: String,
  bio: String,
  hypoallergenic: Boolean,
  breed: String,
});

module.exports = mongoose.model("pets", petSchema, "pets");
