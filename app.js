// VARIABLES
var root = __dirname,
    express = require("express"),
    path = require("path"),
    fs = require("fs"),
    serverPort = 3333;

// EXPRESS
var app = module.exports = express();


// Middlewares
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(root, '/public')));


// Errorhandler
app.use(function(err, req, res, next) {
	console.log(err.stack);
	res.send(500, err.message);
})

app.use(function(req, res, next) {
	res.send(404, 'Page or file not found');
})


// Routes
app.get('/', listDesigns);
app.get('/:root', listDesigns);
app.get('/designs/:design', getDesign, listDesigns);
app.get('/designs/:design/kickstarters', listKickstarters);
app.get('/designs/:design/kickstarters/:kickstarter', getKickstarter, listKickstarters);
app.get('/designs/:design/*', getDesignAssets, getDesign, listDesigns);


function listDesigns(req, res, next) {
	var designsDir = path.join(root, 'designs');
	var designsUrl = path.join('/designs');
	var files = fs.readdirSync(designsDir);
	var list = "";
	files.forEach(function(design) {
		if (design[0] != '.')
			list = list + '<li><a href="' + designsUrl + '/' + design + '">' + design + '</a></li>'
	});
	res.send('<html><body><ul>' + list + '</ul></body></html>');
}


function getDesign(req, res, next) {
	var previewFile = 'designs/' + req.params.design + '/preview.html';
	if (fs.existsSync(previewFile)) {
		res.sendfile('designs/' + req.params.design + '/preview.html');
	}
	else {
		next();
	}
}


function getDesignAssets(req, res, next) {
	var path = req.params[0] ? 'designs/' + req.params.design + '/dist/' + req.params[0] : 'public/index.html';
	if(fs.existsSync(path)) {
		res.sendfile(path);
	}
	else {
		next();
	}
}


function listKickstarters(req, res, next) {
	var kickstartersDir = path.join(root, 'designs', req.params.design, 'kickstarters');
	var kickstartersUrl = path.join('/designs', req.params.design, 'kickstarters');
	var files = fs.readdirSync(kickstartersDir);
	var list = "";
	files.forEach(function(kickstart) {
		if (kickstart.indexOf('.html') != -1)
			list = list + '<li><a href="' + kickstartersUrl + '/' + kickstart + '">' + kickstart + '</a></li>'
	});
	res.send('<html><body><ul>' + list + '</ul></body></html>');
}


function getKickstarter(req, res, next) {
	var kickstarter = req.params.kickstarter;
	if (kickstarter.indexOf('.html') == -1)
		kickstarter = kickstarter + '.html';

	var filePath = path.join('designs', req.params.design, 'kickstarters', kickstarter);
	if (fs.existsSync(filePath)) {
		res.sendfile(filePath);
	}
	else {
		next();
	}
}

// Start Server
app.listen(serverPort);
console.log('started server on port %s', serverPort);
