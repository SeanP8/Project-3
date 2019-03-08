require("dotenv").config();
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./controller/passport");
const session = require("express-session")
const routes = require("./routes");
const db = require("./models/");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

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
      secure: false,

    }
  })
);

app.use(passport.initialize());
app.use(passport.session());  
app.use(express.static("client/build"));

app.use(routes);

// if force = true, will drop the db every startup
var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
  });
});
