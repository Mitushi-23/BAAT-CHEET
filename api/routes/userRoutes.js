const express = require("express")
const router = express.Router();
const { route } = require('express/lib/router')
const {login,register, fetchUser} = require("../controllers/userController");
const { protect } = require("../middlewares/authModdleware");

router.post("/register", register)
router.post("/login",login)
router.route("/users/:userId").get(protect,fetchUser)

module.exports = router