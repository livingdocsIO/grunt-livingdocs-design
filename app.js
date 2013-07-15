// VARIABLES
var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    serverPort = 3000;

// EXPRESS
var app = module.exports = express();

// Middlewares
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(application_root, "/public")));

// Errorhandler
app.use(function(err, req, res, next) {
	res.sendfile('public/bootstrap.html');
})


// Routes
app.get('/designs/:design', function(req, res, next) {
	res.sendfile('public/' + req.params.design + '.html');
});

app.get('/designs/:design/*', function(req, res, next) {
	var path = req.params[0] ? 'designs/' + req.params.design + '/dist/' + req.params[0] : 'public/index.html';
	res.sendfile(path);
});

app.get('/*', function(req, res, next) {
	var path = req.params[0] ? 'public/' + req.params[0] : 'public/index.html';
	res.sendfile(path);
});


// Start Server
app.listen(serverPort);
console.log("started server on port " + serverPort);