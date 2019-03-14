//During the test the env variable is set to test
process.env.NODE_ENV = "test";
const dotenv = require("dotenv");
dotenv.load();
const sequelize = require("sequelize");
const db = require("../models");
//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);
describe("Projects", () => {
  describe("/GET all projects", () => {
    beforeEach(function() {
      request = chai.request(server);
      return db.sequelize.sync({ force: true });
    });
    it("it should GET all the projects", done => {
      chai
        .request(server)
        .get("/api/projects/all", {
          req: {
            isAuthenticated: function() {
              return true;
            }
          }
        })
        .end((err, res) => {
          let responseStatus = res.status;
          let responseBody = res.body;
          expect(err).to.be.null;
          expect(responseStatus).to.equal(200);
          expect(responseBody).to.be.an("object");
          done();
        });
    });
  });
  describe("POST /api/projects", () => {
    beforeEach(function() {
      request = chai.request(server);
      return db.sequelize.sync({ force: true });
    });
    it("should save a project", done => {
      let reqBody = {
        title: "Sample Project",
        link: "www.sample.com",
        description: "this is a sample test",
        image: "image.jpg",
        authID: 1
      };
      request
        .post("/api/projects")
        .send(reqBody)
        .end((err, res) => {
          let responseStatus = res.status;
          let responseBody = res.body;
          expect(err).to.be.null;
          expect(responseStatus).to.equal(200);
          expect(responseBody)
            .to.be.an("object")
          done();
        });
    });
  });
});
