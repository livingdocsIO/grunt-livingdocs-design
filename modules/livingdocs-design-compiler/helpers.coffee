color = require('color')
path = require('path')
htmlmin = require("html-minifier")
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


exports.toCamelCase = toCamelCase = (string) ->
  string.replace /^([A-Z])|[\s-_](\w)/g, (match, p1, p2, offset) ->
    return p2.toUpperCase() if p2
    p1.toLowerCase()


exports.filenameToTemplatename = (string) ->
  strings = toCamelCase(string).replace('.html', '').split('/')
  strings[strings.length - 1]


exports.minifyHtml = (html, templateName, options) ->
  if options && options.minify
    try
      htmlmin.minify html, options.minifyOptions
    catch err
      logger.error('>> Template "%s": HTML minify error\n %s\n'.yellow, templateName, err)
      return '<div class="error minify" style="color: red">Error while minifying: Template "#{templateName}"</div>'

  else
    html
