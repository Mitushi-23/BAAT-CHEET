const generateToken = require("../generateToken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
  const { name, email, password, image } = req.body;
  const newUser = new User({ name, email, password, image });
  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: "User registered successfully" });
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ message: "Error registering the user" });
    });
});

const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "Email and Password are required" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!await user.matchPassword(password)) {
      return res.status(404).json({ message: "Invalid Password" });
    }
    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in finding the user", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { login, register };
