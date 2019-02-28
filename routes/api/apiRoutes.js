const router = require("express").Router();
const db = require('../../models');

router.route("/api/users")
    .get(function (req, res) {
        db.findAll().then((dbUsers) => {
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

router.route("/api/projects")
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

module.exports = router;
