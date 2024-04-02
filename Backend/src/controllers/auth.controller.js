//services
const authServices = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await authServices.register(userData);
    res
      .status(201)
      .json({ message: "User registered successfully", userId: user._id }); // change it accordingly
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    console.log("in the controller");
    const credentials = req.body;
    const check = await authServices.login(credentials);
    // console.log(check);
    res.status(201).json({
      message: "user login successfully",
      token: check.token,
      userId: check.userId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
