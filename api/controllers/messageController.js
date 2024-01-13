const multer = require("multer");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");

// endpoint to send message
const messages = asyncHandler(async (req, res) => {
  try {
    const { senderId, receiverId, messageType, messageText } = req.body;

    const newMessage = new Message({
      senderId,
      receiverId,
      messageType,
      messageText,
      timeStamp: new Date(),
      imageUrl: messageType === "image" ? req.file.path : null,
    });
    await newMessage.save();
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = { messages };
