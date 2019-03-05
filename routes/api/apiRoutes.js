const router = require("express").Router();
const bcrypt = require("bcrypt-nodejs");
const db = require('../../models');

// User Routes //
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
    .post(function (req, res) {
        console.log(req.body);
        db.Auths.findOne({
            where: {
                email: req.body.email
            }
        }).then((dbAuth) => {
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

                }).then((dbAuth) => {
                    res.send(dbAuth);
                })
            }
        })
    })

// Project Routes //
router.route("/api/projects/all")
    .get(function (req, res) {
        db.Projects.findAll()
            .then(dbProjects => {
                res.send(dbProjects);
            })
    })

router.route("/api/projects/user")
    .get(function (req, res) {
        let userId = req.user.id
        db.Projects.findAll({
            where: {
                authID: userId
            }
        }).then(dbProjects => {
            res.send(dbProjects)
        })
    })

router.route("/api/projects")
    .get(function (req, res) {
        db.Projects.findOne({
            where: {
                id: req.body.id
            }
        }).then(dbProject => {
            res.send(dbProject)
        })
    })
    .post(function (req, res) {
        db.Projects.create({
            title: req.body.title,
            link: req.body.link,
            image: req.body.image,
            description: req.body.description,
            authID: req.user.id
        }).then(dbProject => {
            res.send(dbProject);
        })
    })

router.route("/api/projects/:id")
    .put(function (req, res) {
        db.Projects.update(req.body, {
            where: {
                id: req.body.id
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