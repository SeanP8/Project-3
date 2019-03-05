const router = require("express").Router();
const bcrypt = require("bcrypt-nodejs");
const db = require('../../models');

router.route("/api/users")
    .get(function (req, res) {
        db.Auths.findAll().then((dbUsers) => {
            res.send(dbUsers);
        })
    });

router.route("/api/user/:id")
    .get(function (req, res) {
        db.Auths.findOne({
            where: {
                id: req.param.id
            }
        }).then((dbUser) => {
            res.send(dbUser);
        })
    });

router.route("/api/user")
    .get(function (req, res) {
        db.Auths.findOne({
            where: {
                id: req.body.id
            }
        }).then((dbUser) => {   
            res.send(dbUser);
        })
    })
    .post(function(req, res){
        console.log(req.body);
        db.Auths.findOne({
            where: {
                email: req.body.email
            }
        }).then((dbAuth) => {
            if(dbAuth){
                res.send("email is taken");
            }else{
                db.Auths.create({
                    avatar: "https://via.placeholder.com/150",
                    firstName: req.body.firstname,
                    lastName: req.body.lastname,
                    password: bcrypt.hashSync(req.body.password),
                    email: req.body.email,
                    authMode: "local",
                    authModeID: Date.now()
                    
                }).then((dbAuth) => {
                    res.send(dbAuth);
                })
            }
        })
    })

router.route("/api/projects/all")
    .get(function (req, res) {
        db.Projects.findAll()
            .then((dbProjects) => {
                res.send(dbProjects);
            })
    })
router.route("/api/projects/:userID")
    .get(function (req, res) {
        db.Projects.findAll({
            where: {
                authID: req.param.userID
            }
        })
    })

router.route("/api/projects")
    .get(function (req, res) {
        db.Projects.findOne({
            where: {
                id: req.body.id
            }
        }).then((dbProject) => {
            res.send(dbProject)
        })
    })
    .post(function(req, res) {
        db.Projects.create({
            name: req.body.name,
            link: req.body.link,
            image: req.body.image,
            description: req.body.description,
            authID: req.user.id
        }).then((dbProject) => {
            res.send(dbProject);
        })
    })

module.exports = router;
