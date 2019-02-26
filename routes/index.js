const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/authRoutes");

// API Routes
<<<<<<< HEAD
router.use(apiRoutes);
=======
router.use("/auth/github", apiRoutes);

router.use("/auth/google", apiRoutes);
>>>>>>> 31cc1b16149283448fa0890c92e326d1d21124ff

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

<<<<<<< HEAD
=======

>>>>>>> 31cc1b16149283448fa0890c92e326d1d21124ff
module.exports = router;
