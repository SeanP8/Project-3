const router = require("express").Router();
const passport = require("passport");

router
  .route("/auth/github")
  .get(passport.authenticate("github", { scope: ["profile"] }));

router
  .route("/auth/github/callback")
  .get(passport.authenticate("github"), function(req, res) {
    res.redirect("/home");
  });

router
  .route("/auth/google")
  .get(passport.authenticate("google", { scope: ["profile"] }));

router
  .route("/auth/google/callback")
  .get(passport.authenticate("google"), function(req, res) {
    res.redirect("/home");
  });

router
  .route("/api/login")
  .post(passport.authenticate("local"), function(req, res) {
    res.redirect("/home");
  });

router.route("/api/current_user").get(function(req, res) {
  if (req.user) {
    console.log("current_user " + Object.keys(req.user));
  }
  res.send(req.user);
});

router.route("/api/logout").get(function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
