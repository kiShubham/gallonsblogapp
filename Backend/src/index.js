require("dotenv").config({ path: "src/.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

const blogRoutes = require("./routes/blogs.routes");
const commentRoutes = require("./routes/comments.routes");
const userRoutes = require("./routes/user.routes");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to Database 🙂"))
  .catch((error) => console.log("facing error in connecting database", error));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/auth", userRoutes);
app.use("/blogs", blogRoutes);
app.use("/comments", commentRoutes);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () =>
  console.log(`the backend is listening on port :${PORT}`)
);
