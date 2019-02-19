require("dotenv").config();
const express = require("express");
const passport = require("passport");

const db = require("./models");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("tech-startup/build"));
}

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`Listening on port ${PORT}`);
    });
});
