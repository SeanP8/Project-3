const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/authRoutes")
const apiRoutes = require("./api/apiRoutes");
const imageRoutes = require("./api/imageRoutes");

router.use(function (req, res, next) {
  var { path } = req;
  console.log("gatekeeper : " + path)
  switch (path) {
    case "/api/logout":
    break;
    case "/login":
    case "/auth/google":
    case "/auth/github":
    case "/auth/google/callback":
    case "/auth/github/callback":
      if (req.isAuthenticated()) {
        console.log("is already authenticated")
        res.redirect("/home")
      }
      break;
    default:
      if (!req.isAuthenticated()) {
        console.log("Gatekeeper says " + req.isAuthenticated())
        res.redirect("/login");
      }
      break;
  }
  next();
})
// API Routes
router.use(apiRoutes);
router.use(authRoutes);

router.use(imageRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  console.log(req.path)
  if (!res.headersSent) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  }
});

module.exports = router;
