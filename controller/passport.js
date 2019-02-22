const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../config/keys");

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
// passport.use(
//   new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//        User.findOrCreate({ googleId: profile.id }, function (err, user) {
//          return done(err, user);
//        });
//   }
// ));

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

// passport.use(
//   new GoogleStrategy({
//     // options for google strategy
//     callbackURL: "/auth/google/redirect",
//     clientID: keys.google.clientID,
//     clientSecret: keys.google.clientSecret
//   },
//     function (accessToken, refreshToken, profile, done) {
//       var userData = {
//         email: profile.emails[0].value,
//         name: profile.displayName,
//         token: accessToken
//       };
//       done(null, userData);
//     }
//   )
// );

passport.use(
  new GoogleStrategy({
    // options for google strategy
    callbackURL:"/auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, () => {
    // passport callback function
  })
)

module.exports = passportSetup;