const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// functions
const register = async (data) => {
  try {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) throw new Error("already exist");

    const user = new User(data);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);

    user.password = hashPassword;

    await user.save();
    return user;
    //
  } catch (error) {
    throw error;
  }
};

const login = async (data) => {
  try {
    const user = await User.findOne({ email: data.email });
    if (!user) throw new Error("user dont exist");

    const checkPassword = await user.comparePassword(data.password);
    if (!checkPassword) throw new Error("invalid password");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return { token, userId: user._id };
  } catch (error) {
    throw error;
  }
};

module.exports = { register, login };
