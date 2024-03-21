const router = require("express").Router();

const commentController = require("../controllers/comments.controller");
const { authenticateToken } = require("../middleware/authenticateToken");

router.post("/:blogId", authenticateToken, commentController.newComment);
router.get("/:blogId", commentController.getAllComments);

module.exports = router;
