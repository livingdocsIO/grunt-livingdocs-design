path = require('path')
async = require('async')
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
    design.initConfigFile configFilePath, (err) ->
      if err
        design.emit('error', err)
        design.emit('end')

      else
        templatesPath = path.join(options.src, options.templatesDirectory)
        new Glob '**/*.html', cwd: templatesPath, (err, files) ->
          if err
            design.emit('error', err)
            design.emit('end')

          else if files?.length
            async.each files, (filepath, done) ->
              design.addTemplateFile(path.join(templatesPath, filepath), done)
            , (err) =>
              if err
                design.emit('error', err)
                design.emit('end')
              else
                design.save(options.dest + '/design.js', options.minify)

          else
            design.emit('warn', "The design '#{options.design}' has no templates")
            design.emit('end')

    design
