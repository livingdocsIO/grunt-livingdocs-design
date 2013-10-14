path = require('path')
file = require('./file')
logger = require('./logger')

exports.requireResources = (src, templatesDirectory) ->
  # Check existence of all directories and files that are required
  requiredResources = [
    name: ''
    type: 'design'
  ,
    name: templatesDirectory
    type: 'directory'
  ,
    name: 'config.json'
    type: 'file'
  ]

  requiredResources.forEach (resource) ->
    unless file.exists(path.join(src, resource.name))
      logger.error('The ' + resource.type + ' "' + path.join(src, resource.name) + '" does not exist.')


exports.toCamelCase = (string) ->
  string.replace /^([A-Z])|[\s-_](\w)/g, (match, p1, p2, offset) ->
    return p2.toUpperCase() if p2
    p1.toLowerCase()
