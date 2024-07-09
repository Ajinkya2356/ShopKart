const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleWare/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const jwt = require("jsonwebtoken");
const { activityRegister } = require("./activityController");
// register user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, avatar, mobile_no, address } = req.body;
  const result = await cloudinary.v2.uploader.upload(avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: result.public_id,
      url: result.secure_url,
    },
    mobileNo: mobile_no,
    address,
  });
  sendToken(user, 201, res);
  /* sendEmail({
    email: user.email,
    subject: "E-commerce Password Recovery",
    message: `Welcome to E-commerce. We are happy to have you as our customer.`,
  }); */
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  // checking if user has given email and password both
  if (!email || !password) {
    return next(new ErrorHandler("Please provide an email and password", 400));
  }
  const user = await User.findOne({ email, isActive: true }).select(
    "+password"
  );
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password"), 401);
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password"), 401);
  }

  sendToken(user, 201, res);
});

// logout user
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

// Forgot password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  // get reset password token
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  // create reset URL
  const resetPasswordURL = `http://localhost:5173/reset-password/${resetToken}`;
  const message = `Your password reset token is :- \n\n ${resetPasswordURL} \n\n If you have not requested this email then,please ignore it Thank you.`;
  try {
    await sendEmail({
      email: user.email,
      subject: "E-commerce Password Recovery",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} succesfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

// reset the password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  console.log(req.body);
  if (!user || user.resetPasswordToken !== resetPasswordToken) {
    return next(
      new ErrorHandler("Reset Password Token is invalid or has expired.", 400)
    );
  }
  if (req.body["New Password"] !== req.body["Confirm Password"]) {
    return next(new ErrorHandler("Passwords do not match", 400));
  }
  user.password = req.body["New Password"];
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  sendToken(user, 200, res);
});
// Get user details
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const userId =
    req.user.id || jwt.decode(req.headers, process.env.JWT_SECRET).id;
  const user = await User.findById(userId);
  if (!user) {
    return next(new ErrorHandler("User not found", 401));
  }
  res.status(200).json({
    success: true,
    user,
  });
});

// Update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

// Update User profile/details
exports.updateUserProfile = catchAsyncErrors(async (req, res, next) => {
  try {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      mobileNo: req.body.mobileNo,
    };
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    throw new ErrorHandler("Something went wrong", 404);
  }
});

exports.updateUserAvatar = catchAsyncErrors(async (req, res) => {
  try {
    const image_id = req.user.avatar.public_id;
    await cloudinary.v2.uploader.destroy(image_id);
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });
    const userData = {
      avatar: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    };
    const user = await User.findByIdAndUpdate(req.user.id, userData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    throw new ErrorHandler("Something went wrong while updating avatar", 401);
  }
});

// Get all users (admin)
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});
// Get single user details(admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with id : ${req.params.id}`)
    );
  }
  res.status(200).json({
    success: true,
    user,
  });
});
// Update User roles
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };
  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
  });
});
// Delete User (Admin)
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      isActive: false,
    },
    { new: true }
  );
  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with id : ${request.params.id}`)
    );
  }
  res.status(200).json({
    success: true,
    message: `user deleted Successfully`,
    user,
  });
});

exports.enableUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      isActive: true,
    },
    { new: true }
  );
  res.status(200).json({
    success: true,
    message: "Account Enabled successfully",
    user,
  });
});
