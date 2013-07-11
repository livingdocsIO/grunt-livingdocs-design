// VARIABLES
var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    serverPort = 3000;

// EXPRESS
var app = express();
app.configure(function () {  
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
  
  // views
  app.use(express.static(path.join(application_root, "/public")));
});

/* R O U T E S */
app.get('/', function(req,res,next) {
  res.redirect('bootstrap_atomic.html');
});


app.listen(serverPort);
console.log("started server on port " + serverPort);

// EXPORT
module.exports = app;