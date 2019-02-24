require("../controller/passport");
const path = require("path");
const router = require("express").Router();
const passport = require("passport");
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.get(
  "/auth/github",
  passport.authenticate("github", {
    scope: ["profile", "email"]
  })
);

router.get("/auth/github/callback", passport.authenticate("github"), function(
  req,
  res
) {
  res.redirect("/home");
});

router.get("api/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../tech-startup/build/index.html"));
});

module.exports = router;