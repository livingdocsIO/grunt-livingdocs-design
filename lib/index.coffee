path = require('path')
file = require('./file')
helpers = require './helpers'
exports.model = Design = require('./models/design')

# options
#   src, absolute directory of design
#   dest, absolute directory of destination design.js file
#   templatesDirectory, default: "templates",
#   configurationElement, default: "script[ld-conf]"
#   minify, default: true
#   minifyOptions:
#     collapseWhitespace: true
#     removeComments: true
#     removeCommentsFromCDATA: true
#     removeCDATASectionsFromCDATA: true

exports.compile = (options) ->
    design = new Design(options)

    # Add design configuration file (with global settings)
    configFilePath = path.join(options.src, 'config.json')
    design.initConfigFile(configFilePath, options.src)

    # Find all groups and templates
    templateGroups = []
    templateFiles = []
    templatesPath = path.join(options.src, options.templatesDirectory)
    for resource in file.readdir(templatesPath, design)
      resourcePath = path.join(templatesPath, resource)

      # add root templates
      templateFiles.push resourcePath

      # add group if it's a directory
      if file.isDirectory(resourcePath)
        templateGroups.push(resourcePath)

        # add templates of a group
        templates = file.readdir(resourcePath, design)
        for template in templates
          templatePath = path.join(resourcePath, template)
          templateFiles.push templatePath

    unless templateFiles.length
      design.emit 'warn', "The design \"#{options.design}\" has no templates"

    # Add groups to design
    for group in templateGroups
      design.addGroupFile(group)

    # Add templates to design
    for template in templateFiles
      if /\.html$/.test(template)
        design.addTemplateFile(template, options)

    design.save(options.dest + '/design.js', options.minify)

    design
