const mongoose = require("mongoose");
const { Schema } = mongoose;

const clubSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    addressLineOne: {
      type: String,
      required: true
    },
    addressLineTwo: String,
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    postcode: {
      type: Number,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  email: {
    type: String,
    required: true
  },
  coordinates: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
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
