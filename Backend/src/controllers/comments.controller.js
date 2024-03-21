//services

const newComment = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const data = req.body;
    const comment = await "services".new(data, blogId);
    res.statu(201).json({
      message: "successfully posted new comment",
      comment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllComments = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const fetch = await "services".getAll();
    res.status(200).json({
      message: "fetched all comments of the blog",
      comments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
