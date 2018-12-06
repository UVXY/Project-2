var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
require("../routes/activitiesApiRoutes");
var expect = chai.expect;

// Setting up the chai http plugin
// Chai middleware Function
chai.use(chaiHttp);

var request;

describe("POST /api/activities", function() {
  // Before each test begins, create a new request server for testing
  beforeEach(function() {
    // simulates our express server (app in server.js)
    request = chai.request(server);
  });

  it("should enter activities", function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
      gym: true,
      basketball: null,
      running: null,
      volleyball: null
    };

    // POST the request body to the server
    request
      .post("/api/activities")
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody).to.be.an("object");
        // The `done` function is used to end any asynchronous tests
      });
    done();
  });
});
