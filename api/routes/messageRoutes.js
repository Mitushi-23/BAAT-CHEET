const express = require("express");
const { messages,fetchMessage } = require("../controllers/messageController");
const multer = require("multer");
const router = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "files/images"); // Specify the desired destination folder
//     },
//     filename: function (req, file, cb) {
//       // Generate a unique filename for the uploaded file
//       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//       cb(null, uniqueSuffix + "-" + file.originalname);
//     },
//   });
// const upload = multer({ storage: storage });

router.post("/messages",messages)
router.get("/messages/:senderId/:receiverId",fetchMessage)

module.exports = router