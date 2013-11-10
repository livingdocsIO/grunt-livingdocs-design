fs = require 'fs'
path = require 'path'
root = path.join __dirname, '../'

LIVERELOAD_PORT = 35769
livereloadScript = "<script src=\"http://localhost:#{LIVERELOAD_PORT}/livereload.js\"></script>"

module.exports =
  listDesigns: (req, res, next) ->
    designsDir = path.join root, 'designs'
    files = fs.readdirSync designsDir
    list = livereloadScript
    for design in files
      if !/^(_|\.)/.test(design)
        list = "#{list}<li><a href=\"/designs/#{design}\">#{design}</a></li>"

    res.send "<html><body><ul>#{list}</ul></body></html>"


  getDesign: (req, res, next) ->
    previewFile = "designs/#{req.params.design}/preview.html"
    if fs.existsSync previewFile
      return res.sendfile "designs/#{req.params.design}/preview.html"

    next()


  getDesignAssets: (req, res, next) ->
    filePath = "designs/#{req.params.design }/dist/#{req.params[0]}" if req.params[0]
    filePath = "public/index.html" if !filePath
    if fs.existsSync filePath
      return res.sendfile filePath

    next()


  listKickstarters: (req, res, next) ->
    kickstartersDir = path.join root, 'designs', req.params.design, 'kickstarters'
    return next() if !fs.existsSync kickstartersDir

    files = fs.readdirSync kickstartersDir
    list = livereloadScript
    kickstartersUrl = path.join '/designs', req.params.design, 'kickstarters'

    files.forEach (kickstart) ->
      if kickstart.indexOf('.html') != -1
        list =  "#{list}<li><a href=\"#{kickstartersUrl}/#{kickstart}\">#{kickstart}</a></li>"

    res.send "<html><body><ul>#{list}</ul></body></html>"


  getKickstarter: (req, res, next) ->
    kickstarter = req.params.kickstarter
    if kickstarter.indexOf('.html') == -1
      kickstarter = "#{kickstarter}.html"

    filePath = path.join 'designs', req.params.design, 'kickstarters', kickstarter
    if fs.existsSync(filePath)
      return res.sendfile filePath

    next()
