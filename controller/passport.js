// Passport //

const GitHubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const bcrypt = require("bcrypt-nodejs");
const db = require("../models");
const github = "GITHUB";
const google = "GOOGLE";
const LocalStrategy = require('passport-local').Strategy;



// config for github 
passport.use("github", new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      db.Auths.findOne({
        where: { authModeID: profile.id }
      }).then(function (existingUser) {
        if (existingUser) {
          console.log("Logged In User : " + profile.id);
          console.log("Logged In User : " + existingUser.id);
          done(null, existingUser)
        } else {
          db.Auths.create({
            firstName: profile.displayName,
            avatar: profile.photos[0].value,
            authMode: github,
            authModeID: profile.id
          }).then(function (user) {
            console.log(user.id);
            done(null, user);
          });
        }
      });
    }
  )
);

//Google//

passport.use('google', new GoogleStrategy({
  // options for google strategy
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
},
  // passport callback function
  function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    db.Auths.findOne({
      where: { authModeId: profile.id }
    }).then(function (existingUser) {
      if (existingUser) {
  
        done(null, existingUser);
      } else {
        db.Auths.create({
          firstName: profile.displayName,
          avatar: profile.photos[0].value,
          authMode: google,
          authModeID: profile.id
        }).then(function (user) {
         done(null, user);
        });
      }

    });
  }
));

passport.use('local', new LocalStrategy(
  function (username, password, done) {
    console.log("HEYA")
    db.Auths.findOne(
      {
        where: {
          email: username
        }
      }).then(function (user) {
        console.log(user);
        if (user) {

          if (bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
           return done(null, false);
          }
        } else {
          return done(null, null);
        }


      }).catch(function (err) {
        console.log(err);
      });
  }
));


// authenticate session persistence
passport.serializeUser(function (user, done) {
  
  done(null, user.id)
});

passport.deserializeUser(function (id, done) {
  console.log("deserial = " + id);
  db.Auths.findOne({
    where: {
      id: id
    }
  }).then(function (user) {
    console.log("deserial")
    done(null, user);
  });
});