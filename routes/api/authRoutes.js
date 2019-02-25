require("../../controller/passport");
var passport = require("passport");

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

  app.get("/auth/google",
    passport.authenticate("google", { scope: ["https://www.googleapis.com/auth/plus.login", "https://www.googleapis.com/auth/plus.me"] }));

  // app.get("/auth/google",
  //   passport.authenticate("google", {
  //     scope: ["profile", "email"]
  //   })
  // );

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
