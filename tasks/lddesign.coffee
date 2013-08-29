# livingdocs design compile task
#
# this file contains two tasks. lddesigns and lddesign
# the task lddesigns can be used as normal multiTask

# lddesigns
# ---------
# this task only processes the config and templates. the css and assets should be handled in other tasks


# lddesign
# --------
# lddesign is an internal task that is used to process single designs. This task is called from lddesigns.
# It processes the whole design. So first the config and templates are written to a file.
# After that it copies all assets to the public/designs/designname directory and compiles the style.less file
# use it the following way
#
# grunt lddesign --design=designname

"use strict"
path = require("path")
cheerio = require("cheerio")
htmlmin = require("html-minifier")
grunt = require("grunt")


class Design
  constructor: (design, options) ->
    @config = grunt.file.readJSON(path.join(design, 'config.json'), encoding: 'utf8')
    @config.groups = {}
    @templates = []
    @options = options

    unless @config.namespace
      grunt.fail.fatal('The design "' + design + '" contains a config file which has no namespace.')


  addGroup: (group) ->
    unless @config.groups[group]
      groupConfigFile = path.join(@options.src, @options.templatesDirectory, group, 'config.json')
      if grunt.file.exists(groupConfigFile)
        @config.groups[group] = grunt.file.readJSON(groupConfigFile, { encoding: 'utf8' })

      else
        @config.groups[group] = {title: group}

      @config.groups[group]['templates'] = []


  addToGroup: (template, group) ->
    @addGroup(group)
    @config.groups[group]['templates'].push(template)


  addTemplate: (template) ->
    @templates.push(template)


  # write the config and templates to disk
  save: ->
    templateBegin = '(function() { this.design || (this.design = {}); design.' + @config.namespace + ' = (function() { return '
    templateEnd = ';})();}).call(this);'
    design =
      config: @config
      templates: @templates
    fileData = templateBegin + JSON.stringify(design, null, 2) + templateEnd
    grunt.file.write @options.dest + '/design.js', fileData, encoding: 'utf8'
    grunt.log.writeln('Design "%s" compiled.', @options.dest)



String::toCamelCase = ->
  @replace /^([A-Z])|[\s-_](\w)/g, (match, p1, p2, offset) ->
    return p2.toUpperCase() if p2
    p1.toLowerCase()


requireResources = (options) ->
  # Check existence of all directories and files that are required
  requiredResources = [
    name: ''
    type: 'design'
  ,
    name: options.templatesDirectory
    type: 'directory'
  ,
    name: 'config.json'
    type: 'file'
  ]

  requiredResources.forEach (resource) ->
    unless grunt.file.exists(options.src, resource.name)
      grunt.fail.warn('The ' + resource.type + ' "' + path.join(options.src, resource.name) + '" does not exist.')


filenameToTemplatename = (string) ->
  strings = string.replace('.html', '').toCamelCase().split('/')
  strings[strings.length - 1]


splitPath = (string, design, templatesDirectory) ->
  parts = string.replace(design + '/' + templatesDirectory + '/', '').split('/')
  output = []
  output.push parts[0]

  if parts.length > 2
    grunt.log.warn('Design "' + design + '", Template "' + filenameToTemplatename(string) + '": Templates can only be only be nested in one directory.')

  else if parts.length > 1
    output.push parts[parts.length - 1]

  output


minifyHtml = (html, options, info) ->
  if options.minify
    try
      htmlmin.minify html, options.minifyOptions
    catch err
      grunt.log.writeln('\n>> Design "%s", template "%s": HTML minify error\n %s\n'.yellow, info.design, info.template, err)
      return '<div class="error minify" style="color: red">Error while minifying: Design "' + info.design + '", Template "' + info.template + '"</div>'
      
  else
    html


# process the config and templates, create design object
compileDesign = (files, options) ->
  requireResources(options)

  # create design object for templates, groups and configuration
  design = new Design(options.src, options)

  # warn if a design contains no templates
  unless files.length
    grunt.fail.warn('The design "' + options.design + '" has no templates')
    design.save()

  # iterate through file array and process the templates, store them in templates.js file
  files.forEach (template) ->

    #template is designs/watson/templates/insert_side.html
    templatePath = splitPath(template, options.src, options.templatesDirectory)
    templateName = filenameToTemplatename(template)

    groupId = 'others'
    if templatePath.length > 1
      groupId = templatePath[0]

    design.addToGroup(templateName, groupId)

    # load file in jQuery object to read json & html
    data = grunt.file.read(template, encoding: 'utf8')
    $ = cheerio.load(data)
    config = $(options.configurationElement).html()
    $(options.configurationElement).remove()

    # create template object using config
    templateObject = JSON.parse(config) || {}
    templateObject.id = templateName
    templateObject.html = minifyHtml($.html(), options, { design: design.config.namespace, template: templateName })

    design.addTemplate(templateObject)

  design.save()



module.exports = (grunt) ->
  # grunt task to compile all templates
  grunt.registerMultiTask 'lddesigns', 'Compile templates to livingdocs-engine template', ->
    options = @options()
    designs = @files
    
    designs.forEach (file, i) ->
      src = designs[i].src[0]
      dest = designs[i].dest
      design = src.split('/').pop()

      option = grunt.util._.clone(options)
      option.design = design
      option.src = src
      option.dest = dest

      # create task to process the design
      grunt.config('lddesign.design_' + design + '.files', [
        expand: true
        src: [src + '/' + options.templatesDirectory + '/**/*.html']
        dest: dest
      ])
      grunt.config('lddesign.design_' + design + '.options', option)
      grunt.log.writeln('Design "' + design + '" prepared for processing.')

      #run task
      grunt.task.run('lddesign:design_' + design)


  # grunt task to compile specific design. executable only through console?
  grunt.registerMultiTask 'lddesign', 'Compile a single design', ->
    options = @options()
    src = options.src
    dest = options.dest
    files = @files
    
    templates = []
    files.forEach (file, i) ->
      templates[i] = file.src[0]
    
    compileDesign(templates, options)
