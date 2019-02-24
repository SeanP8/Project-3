require("../../controller/passport");
var passport = require("passport");

module.exports = function(app) {

  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["profile", "email"]
    })
  );
  
  app.get("/github/callback", passport.authenticate("github"), function(
    req,
    res
  ) {
    res.redirect("/home");
  });
  
  app.get("api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });  
}
