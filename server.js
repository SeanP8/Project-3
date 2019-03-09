require("dotenv").config();
// const cookieSession = require("cookie-session");

const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./controller/passport");

const session = require("express-session")
const routes = require("./routes");
const db = require("./models/");
const _AUTHS = require("./mock-data/auths.json");
const app = express();

const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(express.static("client/build"));
app.use(function(req, res, next) {
  if (req.url != '/favicon.ico') {
    return next();
  } else {
    res.status(200);
    res.header('Content-Type', 'image/x-icon');
    res.header('Cache-Control', 'max-age=4294880896');
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
      secure: false,

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
// app.use(function(req,res, next){
//   res.set({
//     'Access-Control-Allow-Origin': 'http://localhost:3000',
//     'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
//     'Access-Control-Allow-Headers': 'Content-Type,Authorization'
// });
// next();
// })

app.use(routes);

// if (process.env.NODE_ENV === "production") {
// }

var syncOptions = { force: false };

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
