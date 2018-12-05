var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.engine(
    "handlebars",
    exphbs({
      default: "index"
    })
  );
  app.set("view engine", "handlebars");
  app.use(express.static(__dirname + '/public'));
  
  //Sample GET request
  app.get('/', function(req, res) {
    
  });
  
  //Sample POST request
  app.post('/', function(req, res) {
    
  });
  
  // Routes
  require("./routes/htmlRoutes")(app);

  app.listen(PORT, function() {
      console.log("listening at PORT: " + PORT)
  })

  module.exports = app;