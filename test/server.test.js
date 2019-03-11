//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
let dotenv = require('dotenv');
dotenv.load();
let sequelize = require("sequelize");
let db = require("../models");
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);
describe('Projects', () => {

    describe('/GET all projects', () => {
        it('it should GET all the projects', (done) => {
            chai.request(server)
                .get('/api/projects/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

});