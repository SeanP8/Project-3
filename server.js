require("dotenv").config();
require("./controller/passport");
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");
// const cors = require("cors");
const app = express();
const routes = require("./routes");
const db = require("./models/");
const seed = require("./models/seed/seed-db");

const PORT = process.env.PORT || 5000;
const cors = require("cors");
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
); // cookie sessions middleware
// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: ["my secret Key"],
//     secure: false
//   })
// );

app.use(passport.initialize());
app.use(passport.session());
// app.use(function(req,res, next){
//   res.set({
//     'Access-Control-Allow-Origin': 'http://localhost:3000',
//     'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
//     'Access-Control-Allow-Headers': 'Content-Type,Authorization'
// });
// next();
// })

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("client/build"));
app.use(routes);

// if force = true, will drop the db every startup
var syncOptions = { force: true };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize
  .sync(syncOptions)
  // .then(() => {
  //   seed.insert();
  // })
  .then(function() {
    app.listen(PORT, function() {
      console.log(`Listening on port ${PORT}`);
    });
  });
