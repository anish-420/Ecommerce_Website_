const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");
const { send } = require("process");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated } = require("../middleware/auth");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    const filename = req.file.filename;
    const filePath = 'uploads/${ filename }';
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleteing file" });
      } else {
        res.join({ message: "File deleted successfully" });
      }
    });
    return next(new ErrorHandler("User already exists", 400));
  }
  const filename = req.file.filename;
  const fileUrl = path.join(filename);

  const user = {
    name: name,
    email: email,
    password: password,
    avatar: fileUrl,
  };
  const newUser = await User.create(user);
  res.status(201).json({
    success: true,
    newUser,
  });
});


//login user
router.post("/login-user", catchAsyncErrors(async(req,res,next)=> {
  try {
    const {email,password} =req.body;

    if(!email || !password) {
      return next (new ErrorHandler("Please provide the all fields!",400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user) {
      return next (new ErrorHandler("User doesn't exists",400));
    }
    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid){
      return next (new ErrorHandler("Please Provide the Correct Information", 400));
    }
    sendToken(user,201,res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
}))

//load user 
router.get(
  "/getuser",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return next(new ErrorHandler("User doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


module.exports = router;
