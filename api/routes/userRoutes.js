const express = require("express");
const router = express.Router();
const { route } = require("express/lib/router");
const {
  login,
  register,
  fetchUser,
  friendRequest,
  fetchSentFriendRequests,
  fetchFriendRequests,
  acceptRequest,
  fetchFriends,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authModdleware");

router.post("/register", register);
router.post("/login", login);
router.route("/users/:userId").get(protect, fetchUser);
router.post("/friend-request", friendRequest);
router.get("/friend-request/sent/:userId", fetchSentFriendRequests);
router.get("/friend-request/:userId", fetchFriendRequests);
router.post("/friend-request/accept", acceptRequest);
router.get("/friend-request/friends/:userId", fetchFriends);

module.exports = router;
