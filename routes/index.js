const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/authRoutes")
const apiRoutes = require("./api/apiRoutes");
const imageRoutes = require("./api/imageRoutes");


// API Routes
router.use(apiRoutes);
router.use(authRoutes);

router.use(imageRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
