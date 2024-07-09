const catchAsyncErrors = require("../middleWare/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const Activity = require("../models/activityModel");
exports.activityRegister = catchAsyncErrors(async (req, res) => {
  try {
    const alreadyExist = await Activity.findOne({ user: req.user._id });
    if (!alreadyExist) {
      await Activity.create({
        user: req.user._id,
        activity: req.body.activity,
      });
    } else {
      await alreadyExist.updateOne({ activity: req.body.activity });
    }
  } catch (error) {
    throw new ErrorHandler(error.message, 500);
  }
});
exports.getAllActivity = catchAsyncErrors(async (req, res) => {
  const activity = await Activity.find({ user: req.user._id });
  res.status(200).json({
    success: true,
    activity,
  });
});
