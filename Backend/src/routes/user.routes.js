const router = require("express").Router();

//import middleware ;
//import controller ;

router.post("/register", "controller");
router.post("/login", "Authmiddleware", "controller");

module.exports = router;
