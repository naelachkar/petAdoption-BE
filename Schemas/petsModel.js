const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  adoptionStatus: {
    type: String,
    required: true,
  },
  picture: String,
  height: Number,
  weight: Number,
  color: String,
  bio: String,
  hypoallergenic: Boolean,
  dietery: Array,
  breed: String,
});

module.exports = mongoose.model("pets", petSchema, "pets");
