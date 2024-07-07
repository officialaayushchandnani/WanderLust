const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapasyc = require("../utils/wrapasyc.js");
const passport = require("passport");
const saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
const userController = require("../controllers/users.js");
router.route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapasyc(userController.signup));
router.route("/login").get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: '/login',
      failureFlash: true
    }),
    userController.login
  );
router.get("/logout", userController.logout)
module.exports = router;