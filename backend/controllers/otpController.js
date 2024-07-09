const catchAsyncErrors = require("../middleWare/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const otpGenerator = require("otp-generator");
const OTP = require("../models/otpModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/userModel");
exports.generateOTP = catchAsyncErrors(async (req, res) => {
  try {
    const generatedOTP = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });
    const message = `Your OTP for Email Verification is : ${generatedOTP}`;
    await sendEmail({
      email: req.user.email,
      subject: "Email Verification",
      message,
    });
    const saltRounds = 10;
    const otpAndUserId = `${generatedOTP}${req.user._id}`;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(otpAndUserId, salt);
    await OTP.create({
      otp: hash,
      userID: req.user._id,
    });
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    throw new ErrorHandler("Something went wrong!", 500);
  }
});
exports.verifyOTP = catchAsyncErrors(async (req, res) => {
  try {
    const { otp } = req.body;

    const userOTP = await OTP.findOne({ userID: req.user._id });
    if (!userOTP) {
      throw new ErrorHandler("User Not Found", 400);
    }
    if (new Date() > userOTP.expiresAt) {
      throw new ErrorHandler("OTP is expired", 400);
    }
    const otpAndUserId = `${otp}${req.user._id}`;
    const isMatch = await bcrypt.compare(otpAndUserId, userOTP.otp);
    if (!isMatch) {
      throw new ErrorHandler("Invalid OTP", 400);
    }
    await OTP.deleteMany({ userID: req.user._id });
    await User.findByIdAndUpdate(req.user._id, {
      verifyEmail: true,
    });
    res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.log(error);
    throw new ErrorHandler("Something went wrong!", 500);
  }
});
