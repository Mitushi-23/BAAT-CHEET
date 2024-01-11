const User = require("../models/user");

exports.register = async (req, res) => {
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
};
