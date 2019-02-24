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

//Github//

module.exports = passportSetup;
var GitHubStrategy = require('passport-github').Strategy;
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
