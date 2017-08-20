const mongoose = require("mongoose");
const { Schema } = mongoose;

const clubSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  address: String,
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
