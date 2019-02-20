const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");

// // API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../tech-startup/public/index.html"));
});

//Auth login
router.get('/login', (req, res) => {
  res.render('login');
});

// Auth logout
router.get('/logout', (req, res) => {
  //handle with passport here
  res.send('logging out');
})

//Auth login with google
router.get('/google', (req, res) => {
  //handle with passport here
  res.send('logging in with google');
});

module.exports = router;