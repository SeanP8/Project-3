"use strict";

const models = require("../index");
const _AUTHS = require("../seed/auths.json");
const _PROJECTS = require("../seed/projects.json");

module.exports = {
  insert: () => {
    models.Auths.bulkCreate(_AUTHS)
      .then(() => {
        models.Projects.bulkCreate(_PROJECTS).then(res => {
          console.log("Success adding Auth and projects");
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
