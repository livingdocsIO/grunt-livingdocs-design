express = require 'express'
path = require 'path'
app = module.exports = express()
root = path.join __dirname, '../'

app.use express.bodyParser()
app.use app.router
app.use express.static(path.join(root, '/public'))


# Errorhandler
app.use (err, req, res, next) ->
	console.log err.stack
	res.send 500, err.message

app.use (req, res, next) ->
	res.send 404, 'Page or file not found'


# Routes
ctrl = require './controller'
app.get '/', ctrl.listDesigns
app.get '/:root', ctrl.listDesigns
app.get '/designs/:design', ctrl.getDesign, ctrl.listDesigns
app.get '/designs/:design/kickstarters', ctrl.listKickstarters, ctrl.listDesigns
app.get '/designs/:design/kickstarters/:kickstarter', ctrl.getKickstarter, ctrl.listKickstarters, ctrl.listDesigns
app.get '/designs/:design/*', ctrl.getDesignAssets, ctrl.getDesign, ctrl.listDesigns
