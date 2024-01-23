const multer = require("multer");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const cloudinary = require("../utils/cloudinary");

// endpoint to send message
const messages = asyncHandler(async (req, res) => {
  try {
    const { senderId, receiverId, messageType, messageText, imageUrl } =
      req.body;
    console.log(req.body);
    let cloudinaryResult = null;
    if (messageType === "image" && imageUrl) {
      cloudinaryResult = await cloudinary.uploader.upload("imageUrl", {
        folder: "message",
      });
    }
    console.log("cloudinaryResult", cloudinaryResult);
    // Create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      messageType,
      message: messageText,
      timeStamp: new Date(),
      imageUrl: messageType==="image"? (cloudinaryResult
        ? {
            public_id: cloudinaryResult.public_id,
            url: cloudinaryResult.secure_url,
          }
        : null):null,
    });
    console.log(newMessage);
    // Save the new message to the database
    await newMessage.save();

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("gygyuh", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const fetchMessage = asyncHandler(async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: senderId, receiverId: receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).populate("senderId", "_id name");

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = { messages, fetchMessage };
