const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const otpSchema = new mongoose.Schema(
  {
    otp: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    expiresAt: {
      type: Date,
      required: true,
      default: Date.now() + 5 * 60 * 1000,
    },
  },
  { timestamps: true }
);

otpSchema.methods.compareOTP = async function (otp) {
  return await bcrypt.compare(otp, this.otp);
};

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
module.exports = mongoose.model("OTP", otpSchema);
