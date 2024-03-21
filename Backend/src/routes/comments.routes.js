const router = require("express").Router();

//import controller ;
// import Auth middleware

router.post("/:blogId", "middleware", "controller");
router.get("/:blogId", "controller");

module.exports = router;
