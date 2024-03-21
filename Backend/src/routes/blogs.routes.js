const router = require("express").Router();

const blogController = require("../controllers/blogs.controller");
const { authenticateToken } = require("../middleware/authenticateToken");

//:id is blogid

router.post("/", authenticateToken, blogController.newBlog);
router.put("/:id", authenticateToken, blogController.updateBlog);
router.delete("/:id", authenticateToken, blogController.deleteBlog);
router.get("/", authenticateToken, blogController.getAllBlogs);

module.exports = router;
