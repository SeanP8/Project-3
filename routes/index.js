const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/authRoutes")
const apiRoutes = require("./api/apiRoutes");


// API Routes
router.use(apiRoutes);
router.use(authRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log("hmm")
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
