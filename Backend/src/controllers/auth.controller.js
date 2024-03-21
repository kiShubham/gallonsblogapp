//services

const register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await "service".new(userData);
    res
      .status(200)
      .json({ message: "User registered successfully", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const credentials = req.body;
    const check = await "service".login(credentials);
    res.status(200).json({
      message: "user login successfully",
      token: check.token,
      user: check.getUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
