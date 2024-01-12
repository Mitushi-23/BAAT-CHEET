const jwt = require('jsonwebtoken')
const User = require('../models/user')
const asyncHandler = require('express-async-handler');

const protect = asyncHandler( async (req, res, next) => {
  let token;
  console.log(req.headers)
  if(req.headers.authorization && req.headers.authorization)
  try {
      token = req.headers.authorization;
      console.log(token)
      const decode = jwt.verify(token, process.env.JWT_KEY);
      req.user = await User.findById(decode.id).select("-password");
      next()
  } catch (error) {
    res.status(401).send({message: "Not Authorized, Token failed"})
  }
  if(!token)
  {
    res.status(401).send({message: "Not Authorized, Not Token"})
  }
})

module.exports = { protect }