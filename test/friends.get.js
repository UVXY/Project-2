var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
require("../routes/clientsApiRoutes");
require("../routes/activitiesApiRoutes");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/client", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
  });

  it("should find all clients", function(done) {
    // Add some examples to the db to test with
    // Request the route that returns all examples
    request.get("/api/client").end(function(err, res) {
      var responseStatus = res.status;
      var responseBody = res.body;

      // Run assertions on the response

      expect(err).to.be.null;

      expect(responseStatus).to.equal(200);

      expect(responseBody).to.be.an("array");

      // The `done` function is used to end any asynchronous tests
      done();
    });
  });
});

describe("GET /api/activities", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
  });

  it("should find all activities", function(done) {
    // Add some examples to the db to test with
    // Request the route that returns all examples
    request.get("/api/activities").end(function(err, res) {
      var responseStatus = res.status;
      var responseBody = res.body;

      // Run assertions on the response

      expect(err).to.be.null;

      expect(responseStatus).to.equal(200);

      expect(responseBody).to.be.an("array");

      // The `done` function is used to end any asynchronous tests
     
    }); done();
  });
});
