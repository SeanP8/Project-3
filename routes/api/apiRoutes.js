const router = require("express").Router();
const bcrypt = require("bcrypt-nodejs");
const db = require("../../models");

// // This is a test route
// this route will add a contributor to a project
router.route("/addContributers").put(function(req, res) {
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

// this route will find a user and their projects
router.route("/getUserProjects").get(function(req, res) {
  db.Auths.findAll({
    attributes: ["name"],
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
// this route will find all projects and include associated user
router.route("/allProjects").get(function(req, res) {
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
// this route will get a single project with an associated review and auth
router.route("/singleProject").get(function(req, res) {
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
router.route("/findOne").get(function(req, res) {
  db.Auths.findById("1")
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});
router.route("/update").put(function(req, res) {
  db.Auths.update(
    {
      full_name: "adam's family"
    },
    { where: { id: 1 } }
  ).then(rows => {
    res.json(rows);
  });

  router
    .route("/api/user")
    .get(function(req, res) {
      db.Auths.findOne({
        where: {
          id: req.body.id
        }
      }).then(dbUser => {
        res.send(dbUser);
      });
    })
    .post(function(req, res) {
      console.log(req.body);
      db.Auths.findOne({
        where: {
          email: req.body.email
        }
      }).then(dbAuth => {
        if (dbAuth) {
          res.send("email is taken");
        } else {
          db.Auths.create({
            avatar: "https://via.placeholder.com/150",
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            password: bcrypt.hashSync(req.body.password),
            email: req.body.email,
            authMode: "local",
            authModeID: Date.now()
          }).then(dbAuth => {
            res.send(dbAuth);
          });
        }
      });
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});
router.route("/remove").delete(function(req, res) {
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
//
// router.route("/api/users").get(function(req, res) {
//   db.Auths.findAll().then(dbUsers => {
//     res.send(dbUsers);
//   });
// });

router.route("/api/user/:id").get(function(req, res) {
  db.Auths.findOne({
    where: {
      id: req.param.id
    }
  }).then(dbUser => {
    res.send(dbUser);
  });
});
router.route("/api/user/login").get(function(req, res) {
  db.Auths.findOne({
    where: {
      email: req.params.email
    }
  }).then(dbUser => {
    if (bcrypt.compareSync(req.params.password, dbUser.password)) {
      req.user = dbUser;
    } else {
      res.send(401);
    }
  });
});
router
  .route("/api/user")
  .get(function(req, res) {
    db.Auths.findOne({
      where: {
        id: req.body.id
      }
    }).then(dbUser => {
      res.send(dbUser);
    });
  })
  .post(function(req, res) {
    console.log(req.body);
    db.Auths.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbAuth => {
      if (dbAuth) {
        res.send("email is taken");
      } else {
        db.Auths.create({
          avatar: "https://via.placeholder.com/150",
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          password: bcrypt.hashSync(req.body.password),
          email: req.body.email
        }).then(dbAuth => {
          res.send(dbAuth);
        });
      }
    });
  });

// router.route("/api/projects/all").get(function(req, res) {
//   db.Projects.findAll().then(dbProjects => {
//     res.send(dbProjects);
//   });
// });
// router.route("/api/projects/:userID").get(function(req, res) {
//   db.Projects.findAll({
//     where: {
//       authID: req.param.userID
//     }
//   });
// });

router
  .route("/api/projects")
  .get(function(req, res) {
    db.Projects.findOne({
      where: {
        id: req.body.id
      }
    }).then(dbProject => {
      res.send(dbProject);
    });
  })
  .post(function(req, res) {
    db.Projects.create({
      name: req.body.name,
      description: req.body.description,
      authID: req.user.id
    }).then(dbProject => {
      res.send(dbProject);
    });
  });

// Project Routes //
router.route("/api/projects/all").get(function(req, res) {
  db.Projects.findAll().then(dbProjects => {
    res.send(dbProjects);
  });
});

router.route("/api/projects/user").get(function(req, res) {
  let userId = req.user.id;
  db.Projects.findAll({
    where: {
      authID: userId
    }
  }).then(dbProjects => {
    res.send(dbProjects);
  });
});

router
  .route("/api/projects")
  .get(function(req, res) {
    db.Projects.findOne({
      where: {
        id: req.body.id
      }
    }).then(dbProject => {
      res.send(dbProject);
    });
  })
  .post(function(req, res) {
    db.Projects.create({
      title: req.body.title,
      link: req.body.link,
      image: req.body.image,
      description: req.body.description,
      authID: req.user.id
    }).then(dbProject => {
      res.send(dbProject);
    });
  });


router.route("/api/projects/:id")
    .put(function (req, res) {
        db.Projects.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(dbProject => {
            res.json(dbProject);
        })
    })
    .delete(function (req, res) {
        db.Projects.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbProject => {
            res.json(dbProject)
        })
    })

module.exports = router;
