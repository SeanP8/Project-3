const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/authRoutes");

// API Routes

router.use(apiRoutes);

router.use("/auth/github", apiRoutes);

router.use("/auth/google", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
