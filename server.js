require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const routes = require("./routes");
const db = require("./models/");
const _AUTHS = require("./mock-data/auths.json");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var syncOptions = { force: true };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
// db.Projects.belongsTo(db.Auths, { as: "AuthRef", foreignKey: "authId" }); // Adds a foreign key into projects
// db.Projects.hasMany(db.Review, { as: "All_Reviews" });

// db.Auths.belongsToMany(db.Projects, {
//   as: "SeeksFunding",
//   through: "UserProjects"
// });
// db.Projects.belongsToMany(db.Auths, { as: "Workers", through: "UserProjects" });

// db.sequelize
//   .sync()
//   // .then(() => {
//   //   db.Projects.create({
//   //     description: "My first Project"
//   //   }).then(project => {
//   //     project.setWorkers([10, 11]);
//   //   });
//   // })
//   // .then(() => {
//   //   db.Projects.create({
//   //     description: "Second Project"
//   // })
//   .then(function() {
//     app.listen(PORT, function() {
//       console.log(`Listening on port ${PORT}`);
//     });
//   });

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
  });
});
