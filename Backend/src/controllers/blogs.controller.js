//services

const newBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const blog = await "service".new(blogData);
    res.status(201).json({ message: "blogs posted succesfully", blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await "service".remove(blogId);
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
    const blog = await "service".update(blogId);
    res
      .status(201)
      .json({ message: "blog has been updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const fetchALl = await "service".getAll();
    res
      .status(200)
      .json({ message: "blog has been deleted successfully", fetchALl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
