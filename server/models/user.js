const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    unique: true
  },
  gm: {
    type: Boolean,
    default: false
  },
  email: String,
  tel: String,
  characters: []
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
