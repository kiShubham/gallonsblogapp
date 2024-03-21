//services
const commentServices = require("../services/comments.service");

const newComment = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const { text } = req.body;
    const userId = req.user.id;

    const commentData = { text: text, blogId: blogId };
    //
    const comment = await commentServices.newDoc(commentData, userId);
    res.status(201).json({
      message: "successfully posted new comment",
      comment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//radhekrishna-radhekrihsna
const getAllComments = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const fetch = await commentServices.getAll(blogId);
    res.status(200).json({
      message: "fetched all comments of the blog",
      fetch,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { newComment, getAllComments };
