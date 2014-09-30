fs = require('fs')
path = require('path')
root = path.join(__dirname, '../../..')


exports.readSync = (file, options = {}, eventEmitter) ->
  options.encoding ?= 'utf8'
  try
    content = fs.readFileSync(file, options)
  catch err
    eventEmitter.emit 'error', err if eventEmitter else throw err

  content



exports.write = (file, data, callback) ->
  paths = file.split('/')
  paths.pop()

  directory = root
  for i, dir of paths
    directory = directory + '/' + dir
    unless fs.existsSync(directory)
      fs.mkdirSync(directory)

  fs.writeFile(file, data, callback)


exports.readJson = (file, options) ->
  options = {} unless options
  JSON.parse(fs.readFileSync(file, { encoding: options.encoding || 'utf8' }))


exports.exists = fs.existsSync

exports.readdir = (directory, eventEmitter) ->
  try
    files = fs.readdirSync(directory)
  catch err
    if err.errno == 34
      #file does not exist
    else
      eventEmitter.emit 'error', err if eventEmitter else throw err

  files || []

exports.isDirectory = (path) ->
  fs.statSync(path).isDirectory()
