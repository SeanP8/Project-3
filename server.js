require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const routes = require("./routes");
const db = require("./models/");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors())
// cookie sessions middleware
app.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: ["my secret Key"]
    })
  );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

var syncOptions = { force: false };

if(process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log(`Listening on port ${PORT}`);
    });
});
