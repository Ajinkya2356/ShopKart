const express = require("express");
const { isAuthenticatedUser } = require("../middleWare/auth");
const {
  activityRegister,
  getAllActivity,
} = require("../controllers/activityController");
const router = express.Router();
router.route("/activity/register").post(isAuthenticatedUser, activityRegister);
router.route("/activity/all").get(isAuthenticatedUser, getAllActivity);
module.exports = router;