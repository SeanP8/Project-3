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
router.route("/api/user")
  .get(function (req, res) {
    db.Auths.findOne({
      where: {
        id: req.body.id
      }
    }).then(dbUser => {
      res.send(dbUser);
    });

  })
  .post(function (req, res) {
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

router.route("/api/users")
  .get(function (req, res) {
    db.Auths.findAll().then(dbUsers => {
      res.send(dbUsers);
    });
  });

router.route("/api/user/:id")
  .get(function (req, res) {
    db.Auths.findOne({
      where: {
        id: req.param.id
      }
    }).then(dbUser => {
      res.send(dbUser);
    });
  });

router.route("/api/user/login")
  .get(function (req, res) {
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


// Project Routes //

router.route("/api/projects/all")
  .get(function (req, res) {
    db.Projects.findAll().then(dbProjects => {
      res.send(dbProjects);
    });
  });

router.route("/api/projects/user")
  .get(function (req, res) {
    let userId = req.user.id;
    db.Projects.findAll({
      where: {
        authID: userId
      }
    }).then(dbProjects => {
      res.send(dbProjects);
    });
  });

router.route("/api/projects")
  .get(function (req, res) {
    db.Projects.findOne({
      where: {
        id: req.body.id
      }
    }).then(dbProject => {
      res.send(dbProject);
    });
  })
  .post(function (req, res) {
    console.log("POSTING " + req.body.image)
    multipartMiddleware(req,res, () =>{
      if(req.files){
        var imageFile = req.files.image.path;
        console.log("IMAGE " + imageFile)
        cloudinary.uploader
          .upload(imageFile, {tags: 'project_image'})
          .then((image) => {
            console.log(image.secure_url)
            db.Projects.create({
              title: req.body.title,
              link: req.body.link,
              image: image.secure_url,
              description: req.body.description,
              authID: req.user.id
            }).then(dbProject => {
              console.log("SAVED PROJECT")
              res.redirect("/projects")
            });
          }).catch(err => console.log(err))
      
      }
    })
      
  });

router.route("/api/projects/:id")
  .put(function (req, res) {
    db.Projects.update(req.body, {
      where: {
        id: req.params.id,
        authID: req.user.id
      }
    }).then(dbProject => {
      res.json(dbProject);
    });
  })
  .delete(function (req, res) {
    db.Projects.destroy({
      where: {
        id: req.params.id,
        authID: req.user.id
      }
    }).then(dbProject => {
      res.json(dbProject)
    });
  });

router.route("/api/projects/topfive")
  .get(function (req, res) {
    db.Projects.findAll({
      limit: 5,
      order: [['createdAt', 'DESC']]
    }).then(dbProjects => {
      res.json(dbProjects)
    });
  });

router.route("/api/projects/search/:q")
    .get(function (req, res) {
        db.Projects.findAll({
            where: {
                description: {
                  $like: '%' +  req.params.q + '%'
                }
            }
        }).then(dbProjects => {
            res.json(dbProjects)
        });
    });



module.exports = router;
