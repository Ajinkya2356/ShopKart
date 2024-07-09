const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateUserProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
  updateUserAvatar,
  enableUser,
} = require("../controllers/userController");
const sendEmail = require("../utils/sendEmail");
const { isAuthenticatedUser, authorizedRoles } = require("../middleWare/auth");
const router = express.Router();
const multer = require("multer");
const { generateOTP, verifyOTP } = require("../controllers/otpController");
const upload = multer();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateUserProfile);
router
  .route("/me/update/avatar")
  .put(upload.single("avatar"), isAuthenticatedUser, updateUserAvatar);
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getAllUsers);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateUserRole);
router.route("/disable").delete(isAuthenticatedUser, deleteUser);
router.route("/enable").get(isAuthenticatedUser, enableUser);
router.route("/otp").get(isAuthenticatedUser, generateOTP);
router.route("/verify").post(isAuthenticatedUser, verifyOTP);
module.exports = router;
