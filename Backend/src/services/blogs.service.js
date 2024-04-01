const Blogs = require("../models/blogs.model");
const User = require("../models/user.model");

const findUsername = async (id) => {
  const user = await User.findById(id);
  return user.username;
};

const newBlog = async (data) => {
  try {
    const username = await findUsername(data.userId);

    const blog = await Blogs.create({ ...data, username });
    return blog;
  } catch (error) {
    throw error;
  }
};
const remove = async (id) => {
  try {
    const blog = await Blogs.findByIdAndDelete(id);
    return blog;
  } catch (error) {
    throw error;
  }
};
const update = async (id, updateData) => {
  try {
    const filter = { _id: id };
    const update = { $set: updateData };
    const options = { new: true };

    const blog = await Blogs.findOneAndUpdate(filter, update, options);
    return blog;
  } catch (error) {
    throw error;
  }
};
const getAll = async () => {
  try {
    const allBlogs = await Blogs.find();
    return allBlogs;
  } catch (error) {
    throw error;
  }
};

module.exports = { newBlog, remove, update, getAll };
