const mongoose = require("mongoose");
const { Schema } = mongoose;

const clubSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    zip: {
      type: Number,
      required: true
    }
  },
  email: {
    type: String,
    required: true
  },
  googlePlaceId: String,
  location: {
    type: { type: String },
    coordinates: [Number]
  },
  tel: {
    type: Number,
    required: true
  },
  gamemasters: [],
  members: []
});

module.exports = mongoose.model("Club", clubSchema);
