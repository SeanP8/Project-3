require("dotenv").config();
require("./controller/passport");
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const db = require("./models/");
const flash = require("connect-flash");


const PORT = process.env.PORT || 5000;
app.use(express.static("client/build"));
app.use(function(req, res, next) {
  if (req.url != "/favicon.ico") {
    return next();
  } else {
    res.status(200);
    res.header("Content-Type", "image/x-icon");
    res.header("Cache-Control", "max-age=4294880896");
    res.end();
  }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(require("cookie-parser")());

app.use(
  session({
    key: "sid",
    secret: process.env.SESSION_SECRET || "random",
    resave: false,
    saveUnititialized: false,
    cookie: {
      expires: 6000000,
      secure: false
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.static("client/build"));
app.use(routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// if force = true, will drop the db every startup
var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize
  .sync(syncOptions)
  .then(function() {
    app.listen(PORT, function() {
      console.log(`Listening on port ${PORT}`);
    });
  });
module.exports = app.listen(3000);
