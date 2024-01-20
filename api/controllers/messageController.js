const multer = require("multer");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");

// endpoint to send message
const messages = asyncHandler(async (req, res) => {
  try {
    const { senderId, receiverId, messageType, messageText,imageUrl } = req.body;
    const newMessage = new Message({
      senderId,
      receiverId,
      messageType,
      message:messageText,
      timeStamp: new Date(),
      imageUrl: messageType === "image" ? req.file.path : null,
    });
    await newMessage.save();
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const fetchMessage = asyncHandler(async(req,res)=>{
  try {
    const {senderId, receiverId} = req.params;

    const messages = await Message.find({
      $or:[
        {senderId:senderId, receiverId:receiverId},
        {senderId:receiverId, receiverId:senderId}
      ]
    }).populate("senderId", "_id name");

    res.json(messages)
  } catch (error) {
    res.status(500).json({message : "Internal Server Error"})
  }
})

module.exports = { messages, fetchMessage };
