const path = require("path");
const router = require("express").Router();
const passport = require("passport");
// const apiRoutes = require("./api");

// // API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../tech-startup/build/index.html"));
});

// /* GET Google Authentication API. */
// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );
// router.get(
//   "/google/redirect",
//   passport.authenticate("google", { failureRedirect: "/", session: false }),
//   function(req, res) {
//       var token = req.user.token;
//       res.redirect("http://localhost:3000?token=" + token);
//   }
// );

// //Auth login
// router.get("/login", (req, res) => {
//   res.render("login");
// });

// // Auth logout
// router.get("/logout", (req, res) => {
//   //handle with passport here
//   res.send("logging out");
// })

//Auth login with google
router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email", "openid"]
}));

router.get("/google/redirect", (req,res) => {
  res.send("you reached the callback URI");
})

module.exports = router;