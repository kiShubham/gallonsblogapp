const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (enteredPassword) {
  const isMatch = bcrypt.compare(enteredPassword, this.password);
  return isMatch;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
