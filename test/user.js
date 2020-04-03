var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/users", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all users", function(done) {
    // Add some examples to the db to test with
    db.User.bulkCreate([
      {
        userName: "Trevor",
        streetAddress: "111 Main St",
        city: "St. Augustine",
        state: "Florida",
        email: "trevor@test.com",
        userPassword: "password"
      },
      {
        userName: "Rob",
        streetAddress: "120 Main St",
        city: "Orlando",
        state: "Florida",
        email: "rob@test.com",
        userPassword: "password"
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/users").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            name: "Trevor",
            streetAddress: "111 Main St",
            city: "St. Augustine",
            state: "Florida",
            email: "trevor@test.com",
            userPassword: "password"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            name: "Rob",
            streetAddress: "120 Main St",
            city: "Orlando",
            state: "Florida",
            email: "rob@test.com",
            userPassword: "password"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});

describe("POST /api/users", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should create a user", function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
        userName: "Jonathan",
        streetAddress: "10 Main St",
        city: "Miami",
        state: "Florida",
        email: "jonathan@test.com",
        userPassword: "password"
    };

    // POST the request body to the server
    request
      .post("/api/users")
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("object")
          .that.includes(reqBody);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
