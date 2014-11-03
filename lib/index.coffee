path = require('path')
Glob = require('glob').Glob

file = require('./file')
helpers = require './helpers'
exports.model = Design = require('./models/design')

# options
#   src, absolute directory of design
#   dest, absolute directory of destination design.js file
#   templatesDirectory, default: "templates",
#   configurationElement, default: "script[ld-conf]"
#   minify:
#     collapseWhitespace: true
#     removeComments: true
#     removeCommentsFromCDATA: true
#     removeCDATASectionsFromCDATA: true

exports.compile = (options) ->
    design = new Design(options)

    # Add design configuration file (with global settings)
    configFilePath = path.join(options.src, 'config.json')
    design.initConfigFile(configFilePath, options.src)

    templatesPath = path.join(options.src, options.templatesDirectory)
    new Glob '**/*.html', cwd: templatesPath, (err, files) ->
      if err
        design.emit('error', err)
        design.emit('end')

      else if files?.length
        design.addTemplateFiles files, (err) ->
          return design.emit('error', err) if err
          design.save(options.dest + '/design.js', options.minify)

      else
        design.emit 'warn', "The design \"#{options.design}\" has no templates"
        design.emit('end')

    design
