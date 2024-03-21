const Comments = require("../models/comments.model");
const User = require("../models/user.model");

const findUsername = async (id) => {
  const user = await User.findById(id);
  return user.username;
};

const newDoc = async (data, userId) => {
  try {
    const username = await findUsername(userId);
    console.log({ ...data, username });
    const doc = await Comments.create({ ...data, username });
    return doc;
  } catch (error) {
    throw error;
  }
};
const getAll = async (blogId) => {
  try {
    const getComments = await Comments.find({ blogId });
    return getComments;
  } catch (error) {
    throw error;
  }
};

module.exports = { newDoc, getAll };
