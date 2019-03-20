const router = require("express").Router();
const db = require("../../models");

// // test routes ----------------------------
// this route will find a user and their projects
router.route("/api/getUserProjects").get(function(req, res) {
  let id = req.params.id;
  db.Auths.findById(id, {
    include: [
      {
        model: db.Projects,
        as: "SeeksFunding",
        attributes: ["description"]
      }
    ]
  })
    .then(output => {
      res.json(output);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});
// route to add a user
router.route("/api/addAuth").post(function(req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;

  db.Auths.create({ firstName, lastName, email, password })
    .then(auth => {
      res.json(auth);
      // .header("access-control-expose-headers");
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});
// route to save a user's favorite project
router.route("/api/saveUserFav").put(function(req, res) {
  let favorite = req.body.projectFavorite;
  let AuthId = req.body.authId;

  db.Favorite.create({
    favorite,
    AuthId
  })
    .then(() => {
      res.json({ success: "Success: A favorite project was added to Auth!" });
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});

// this route will find all projects and include associated user
router.route("/api/allProjects").get(function(req, res) {
  db.Projects.findAll({
    include: [
      {
        model: db.Auths,
        as: "AuthRef"
      }
    ]
  })
    .then(post => {
      res.json(post);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});
// this route will add a contributor to a project
router.route("/api/addContributers").put(function(req, res) {
  db.Projects.findById(10)
    .then(project => {
      project.addContributers(10);
    })
    .then(() => {
      res.send("Auth added");
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});
// this route will get a single project with an associated review and auth
router.route("/api/singleProject").get(function(req, res) {
  db.Projects.findById("2", {
    include: [
      {
        model: db.Review,
        as: "All_Reviews",
        attributes: ["the_review"]
      },
      {
        model: db.Auths,
        as: "AuthRef"
      }
    ]
  })
    .then(post => {
      res.json(post);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});

router.route("/api/findOne").get(function(req, res) {
  db.Auths.findById("1")
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});

router.route("/api/update").put(function(req, res) {
  db.Auths.update(
    {
      full_name: "adam's family"
    },
    { where: { id: 1 } }
  ).then(rows => {
    res.json(rows);
  });
});

router.route("/api/remove").delete(function(req, res) {
  db.Auths.destroy({
    where: { id: 1 }
  })
    .then(() => {
      res.send("User has been deleted");
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});
// Above is Sean's testing route's
// end test routes -----------------------
module.exports = router;
