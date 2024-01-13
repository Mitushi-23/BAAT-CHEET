const express = require("express")
const router = express.Router();
const { route } = require('express/lib/router')
const {login,register, fetchUser, friendRequest, fetchFriendRequests} = require("../controllers/userController");
const { protect } = require("../middlewares/authModdleware");

router.post("/register", register)
router.post("/login",login)
router.route("/users/:userId").get(protect,fetchUser)
router.post("/friend-request",friendRequest)
router.get("/friend-request/sent/:userId",fetchFriendRequests)

module.exports = router