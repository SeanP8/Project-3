require("../../controller/passport");
const router = require("express").Router();
const passport = require("passport");

<<<<<<< HEAD
router.route("/auth/github")
  .get(passport.authenticate("github", { scope: ["profile"] }));

router.route("/auth/github/callback")
  .get(passport.authenticate("github"), function (req, res) {
    res.redirect("http://localhost:3000/home");
  })

router.route("/api/current_user")
  .get(function (req, res) {
    res.send(req.user)
  });

router.route("/api/logout")
  .get(function(req, res) {
    req.logout();
    res.redirect("http://localhost:3000/")
  })
module.exports = router;
=======
module.exports = function (app) {

  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["profile", "email"]
    })
  );

  app.get("/github/callback", passport.authenticate("github"), function (
    req,
    res
  ) {
    res.redirect("/home");
  });

  app.get("api/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Google //

  // app.get("/auth/google",
  //   passport.authenticate("google", { scope: ["https://www.googleapis.com/auth/plus.login", "https://www.googleapis.com/auth/plus.me"] }));

  app.get("/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/google/redirect",
    passport.authenticate("google"),
    function (req, res) {
      res.redirect("/home");
    });

  app.get("api/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

}
>>>>>>> 31cc1b16149283448fa0890c92e326d1d21124ff
