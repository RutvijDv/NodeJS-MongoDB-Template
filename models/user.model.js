const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("user", userSchema);
