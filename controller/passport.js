var GitHubStrategy = require('passport-github').Strategy;
var passport = require("passport");
var db = require("../models");
var github = "GITHUB";

// authenticate session persistence
passport.serializeUser(function (user, done) {
    done(null, user.id)
});

passport.deserializeUser(function (id, done) {
    db.Auths.findById(id).then(function(user) {
        done(null, user);
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
        function (accessToken, refreshToken, profile, done) {
            console.log(profile);
            db.Auths.findOne({
                where: { authModeID: profile.id }
            }).then(function(existingUser) {
                if (existingUser) {
                    console.log("Logged In User : " + profile.id);
                    console.log("Logged In User : " + existingUser.id);
                    done(null, existingUser);
                } else {
                    db.Auths.create({
                        firstName: profile.displayName,
                        avatar: profile.photos[0].value,
                        authMode: github,
                        authModeID: profile.id
                    }).then(function(user) {
                        console.log(user.id);
                        done(null, user);
                    });
                }
            });
        }
    )
);
