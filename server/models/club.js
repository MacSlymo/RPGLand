const mongoose = require("mongoose");
const { Schema } = mongoose;

const clubSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    adressLineOne: {
      type: String,
      required: true
    },
    adressLineTwo: String,
    city: {
      type: String,
      required: true
    },
    State: {
      type: String,
      required: true
    },
    Postcode: {
      type: Number,
      required: true
    },
    Country: {
      type: String,
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

clubSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Club", clubSchema);
