const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "you are not authorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) res.sendStatus(403);

    console.log(token);

    req.user = user;
    // console.log(user);
    // console.log("middleware");

    next();
  });
};

module.exports = { authenticateToken };
