const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blogs",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
