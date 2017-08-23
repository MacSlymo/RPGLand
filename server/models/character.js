// const mongoose = require('mongoose');
// const { Schema } = mongoose;
//
// const characterSchema = new Schema ({
//     userID: { type: Schema.Types.ObjectId, ref: "User" },
//     name: {
//         type: String,
//         required: true
//     },
//     nickname: String,
//     picture: { data: Buffer, contentType: String }, //ask for url of picture
//     concept: String,
//     description: String,
//     attributes: [],
//     skills: [],
//     perks: [],
//     virtues: [],
//     equipment: [],
//     visibility: {
//         type: String,
//         enum: ["public", "friendsonly", "private"],
//         default: "public"
//     }
// });
//
// module.exports = mongoose.model("Character", characterSchema);
