express = require('express')
path = require('path')
root = path.join(__dirname, '../')
app = module.exports = express()

app.use express.static(path.join(root, '/public'))


# Routes
ctrl = require('./controller')
app
  .get('/', ctrl.listDesigns)
  .get('/:root', ctrl.listDesigns)
  .get('/designs/:design', ctrl.getDesign, ctrl.listDesigns)
  .get('/designs/:design/kickstarters', ctrl.listKickstarters, ctrl.listDesigns)
  .get('/designs/:design/kickstarters/:kickstarter', ctrl.getKickstarter, ctrl.listKickstarters, ctrl.listDesigns)
  .get('/designs/:design/*', ctrl.getDesignAssets, ctrl.getDesign, ctrl.listDesigns)


# Errorhandler
app.use (err, req, res, next) ->
        console.log(err.stack)
        res.send(500, err.message)

app.use (req, res, next) ->
        res.send(404, 'Page or file not found')

