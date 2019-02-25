//Github//

module.exports = passportSetup;
var GitHubStrategy = require('passport-github').Strategy;
//const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var passport = require("passport");
var db = require("../models");
var github = "GITHUB";

// authenticate session persistence
passport.serializeUser(function (user, cb) {
  cb(null, user.id)
});

passport.deserializeUser(function (id, cb) {
  db.Auths.findById(id).then(function (user) {
    cb(null, user);
  });
});

// config for github 
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    function (accessToken, refreshToken, profile, cb) {
      db.Auths.findOne({
        where: { authModeID: profile.id }
      }).then(function (existingUser) {
        if (existingUser) {
          cb(null, existingUser);
        } else {
          db.Auths.create({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            authMode: github,
            authModeID: profile.id
          }).then(function (user) {
            console.log(user.id);
            cb(null, user);
          });
        }
      });
    }
  )
);

// //Google//

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   db.googleAuths.findById(id).then(function (user) {
//     done(null, user);
//   });
// });

// passport.use(new GoogleStrategy({
//   // options for google strategy
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: process.env.GOOGLE_CALLBACK_URL
// },
//   // passport callback function
//   function (accessToken, refreshToken, profile, done) {
//     db.googleAuths.findOne({
//       where: { googleId: profile.id }
//     }).then(function (existingUser) {
//       if (existingUser) {
//         done(null, existingUser);
//       } else {
//         db.googleAuths.create({
//           firstName: profile.name.givenName,
//           lastName: profile.name.familyName,
//           email: profile.emails[0].value,
//           avatar: profile.photos[0].value,
//           googleAuthMode: google,
//           googleAuthModeID: profile.id
//         }).then(function (user) {
//           console.log(user.id);
//           return done(null, user);
//         });
//       }

//     });
//   }
// ));