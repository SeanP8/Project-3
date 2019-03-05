require("dotenv").config();
const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
require("./controller/passport");

const session = require("express-session")
const routes = require("./routes");
const db = require("./models/");
const app = express();

const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  session({
    key: "sid",
    secret: process.env.SESSION_SECRET || "random",
    resave: false,
    saveUnititialized: false,
    cookie: {
      expires: 6000000
    }
  })
);// cookie sessions middleware
// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: ["my secret Key"],
//     secure: false
//   })
// );

app.use(passport.initialize());
app.use(passport.session());  

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
  });
});
