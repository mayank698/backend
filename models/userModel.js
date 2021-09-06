const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("User", userSchema);
