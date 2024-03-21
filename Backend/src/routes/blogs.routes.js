const router = require("express").Router();

// controller
// import Auth middleware

router.post("/", "middleware", "controller");
router.put("/:id", "middleware", "controller");
router.delete("/:id", "middleware", "controller");
router.get("/", "middleware", "controller");

module.exports = router;
