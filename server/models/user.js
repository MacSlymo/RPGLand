const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  name: {
    type: String
    // required: true,
    // unique: true
  }
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  // tel: Number,
  // gm: {
  //   type: Boolean,
  //   default: false
  // },
  // picture: { data: Buffer, contentType: String }, //ask for url of picture
  // characters: []
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
