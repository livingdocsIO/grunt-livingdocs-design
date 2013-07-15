// VARIABLES
var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    serverPort = 3000;

// EXPRESS
var app = module.exports = express();

app.use(express.bodyParser());
app.use(app.router);

// views
app.use(express.static(path.join(application_root, "/public")));
app.use(express.directory(__dirname + '/public', 
  {
    filter: function(file) {
      return file.indexOf('.html') != -1 || file.indexOf('watson') != -1; 
    }
  }
));

app.listen(serverPort);
console.log("started server on port " + serverPort);