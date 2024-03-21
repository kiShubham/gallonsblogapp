const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/Auth", "userRoutes");
app.use("/blogs", "blogsRoutes");
app.use("/comments", "commentsRoutes");

app.listen(PORT, () =>
  console.log(`the backend is listening on port :${PORT}`)
);
