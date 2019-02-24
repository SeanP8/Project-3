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
