//services
const blogService = require("../services/blogs.service");

const newBlog = async (req, res) => {
  try {
    const { text } = req.body;
    const Id = req.user.id;

    const blogData = { text: text, userId: Id };

    const blog = await blogService.newBlog(blogData);
    //
    res.status(201).json({ message: "blogs posted succesfully", blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await blogService.remove(blogId);
    res
      .status(201)
      .json({ message: "blog has been deleted successfully", blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const updateData = req.body;

    const blog = await blogService.update(blogId, updateData);
    res
      .status(201)
      .json({ message: "blog has been updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogData = await blogService.getAll();
    res
      .status(200)
      .json({ message: "blog has been fetched successfully", blogData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllBlogs, updateBlog, deleteBlog, newBlog };
