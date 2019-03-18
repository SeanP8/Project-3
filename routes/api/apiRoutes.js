const router = require("express").Router();
const bcrypt = require("bcrypt-nodejs");
const db = require("../../models");
const dotenv = require("dotenv");
dotenv.load();
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

// user routes
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
  });

router.route("/api/user/update").put(function(req, res) {
  db.Auths.update(
    { firstName: req.body.name },
    {
      where: {
        id: req.user.id
      }
    }
  ).then(dbAuth => {
    res.send(dbAuth);
  });
});

router.route("/api/users").get(function(req, res) {
  db.Auths.findAll().then(dbUsers => {
    res.send(dbUsers);
  });
});

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
      res.sendStatus(401);
    }
  });
});

// Project Routes //

router.route("/api/projects/all").get(function(req, res) {
  db.Projects.findAll().then(dbProjects => {
    res.json(dbProjects);
  });
});

router.route("/api/projects/favorites").get(function(req, res) {
  console.log(req.query);
  db.Projects.findAll({
    where: {
      id: req.query.ids
    }
  }).then(dbProjects => {
    res.send(dbProjects);
  });
});

router
  .route("/api/projects")
  .get(function(req, res) {
    db.Projects.findAll({
      where: {
        authID: req.user.id
      }
    }).then(dbProject => {
      res.send(dbProject);
    });
  })
  .post(function(req, res) {
    console.log("POSTING " + req.body.image);
    multipartMiddleware(req, res, () => {
      if (req.files && req.files.image && req.files.image.path) {
        var imageFile = req.files.image.path;
        console.log("IMAGE " + imageFile);
        cloudinary.uploader
          .upload(imageFile, { tags: "project_image" })
          .then(image => {
            console.log(image.secure_url);
            db.Projects.create({
              title: req.body.title,
              link: req.body.link,
              fundLink: req.body.fundLink,
              image: image.secure_url,
              description: req.body.description,
              authID: req.user.id
            }).then(dbProject => {
              console.log("SAVED PROJECT");
              res.redirect("/projects");
            });
          })
          .catch(err => console.log(err));
      } else {
        res.redirect("/projects");
      }
    });
  });
router.route("/api/projects/:id/image").post(function(req, res) {
  multipartMiddleware(req, res, () => {
    if (!req.files) {
      console.log("UH OH");
      res.redirect("/home");
      return;
    }

    var imageFile = req.files.image.path;
    // Upload file to Cloudinary
    cloudinary.uploader
      .upload(imageFile, { tags: "express_sample" })
      .then(image => {
        console.log("** file uploaded to Cloudinary service");
        console.dir(image);
        console.log(req.user);
        db.Projects.update(
          { image: image.secure_url },
          {
            where: {
              id: req.params.id,
              authID: req.user.id
            }
          }
        ).then(() => {
          console.log("** photo saved");
          res.redirect("/projects");
        });
      });
  });
});

router
  .route("/api/projects/:id")
  .put(function(req, res) {
    db.Projects.update(req.body, {
      where: {
        id: req.params.id,
        authID: req.user.id
      }
    }).then(dbProject => {
      res.json(dbProject);
    });
  })
  .delete(function(req, res) {
    db.Projects.destroy({
      where: {
        id: req.params.id,
        authID: req.user.id
      }
    }).then(dbProject => {
      db.Favorite.destroy({
        where: {
          projectID: dbProject.id
        }
      });
      res.json(dbProject);
    });
  });

router.route("/api/projects/topfive").get(function(req, res) {
  db.Projects.findAll({
    limit: 5,
    order: [["createdAt", "DESC"]]
  }).then(dbProjects => {
    res.json(dbProjects);
  });
});

router.route("/api/projects/search/:q").get(function(req, res) {
  db.Projects.findAll({
    where: {
      $or: [
     
          {title: {
            like: "%" + req.params.q + "%"
          }},
          {description: {
            like: "%" + req.params.q + "%"
          }}
      ]
    }
  }).then(dbProjects => {
    res.json(dbProjects);
  });
});

router.route("/api/project/:id").get(function(req, res) {
  db.Projects.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbProject => {
    if(dbProject){
      res.json(dbProject);  
    }else{
      res.sendStatus(404)
    }
  });
});

router
  .route("/api/favorites")
  .get(function(req, res) {
    db.Favorite.findAll({
      attributes: ["projectID"],
      where: {
        userID: req.user.id
      }
    }).then(dbFavorite => {
      res.send(dbFavorite);
    });
  })
  .post(function(req, res) {
    console.log(req.body);
    db.Favorite.findOrCreate({
      where: {
        projectID: req.body.projectID,
        userID: req.user.id
      },
      defaults: {
        projectID: req.body.projectID,
        userID: req.user.id
      }
    })
      .then((req, res) => {
        res.sendStatus(200);
      })
      .catch(err => res.send(err));
  });

router.route("/api/favorites/:id").delete(function(req, res) {
  console.log(req.params);
  db.Favorite.destroy({
    where: {
      userID: req.user.id,
      projectID: req.params.id
    }
  })
    .then((req, res) => {
      res.sendStatus(200);
    })
    .catch(err => res.send(err));
});

router.route("/api/comments").post(function(req, res) {
  if(req.body.ProjectId){
    db.Review.create({
      image: req.body.image,
      name: req.body.name,
      comment: req.body.comment,
      ProjectId: req.body.ProjectId
    }).then(dbReview => {
      res.json(dbReview);
    });
  }else{
    res.sendStatus(404)
  }
});

router.route("/api/comments/:id").get(function(req, res) {
  if(req.params.id){
    db.Projects.findOne({
      where: {
        id: req.params.id
      }
    }).then((dbProject) => {
      if(dbProject){
        db.Review.findAll({
          order: [["createdAt", "DESC"]],
          where: { ProjectId: req.params.id }
        }).then(dbReview => res.json(dbReview));
      } else {
        res.json({})
      }
    })
  }else{
    res.json({})
  }
});
module.exports = router;
