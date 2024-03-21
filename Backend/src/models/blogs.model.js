const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    username: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("Blogs", blogsSchema);
module.exports = Blogs;

// numberOfComments: {
//       type: Number,
//       default: 0,
//     },
