"use strict"
path = require("path")
cheerio = require("cheerio")
htmlmin = require("html-minifier")
color = require("color")

file = require('./file')
logger = require('./logger')
helpers = require('./helpers')
toCamelCase = require("./helpers").toCamelCase


class Design

  constructor: (files, options) ->
    helpers.requireResources(options.src, options.templatesDirectory)

    @config = file.readJson(path.join(options.src, 'config.json'))
    @config.groups = {}
    @templates = []
    @kickstarters = []
    @options =
      src: options.src,
      dest: options.dest,
      templatesDirectory: options.templatesDirectory ||  "templates",
      configurationElement: options.configurationElement || "script[ld-conf]",
      minify: options.minify || true
      minifyOptions: options.minifyOptions || {}

    unless @config.namespace
      logger.error('The design "' + options.src + '" contains a config file which has no namespace.')

    # warn if a design contains no templates
    unless files.length
      logger.warn('The design "' + @config.namespace + '" has no templates')

    # iterate through files array and process the templates
    files.forEach (template) =>
      @addTemplateFile(template)

    kickstartersPath = options.src + '/kickstarters'
    if file.exists(kickstartersPath)
      kickstarters = file.readdir(options.src + '/kickstarters')
      kickstarters.forEach (kickstart) =>
        if kickstart.indexOf('.html') != -1
          kickstarterPath = kickstartersPath + '/' + kickstart
          @addKickstartFile(kickstarterPath)


  addGroup: (group) ->
    unless @config.groups[group]
      groupConfigFile = path.join(@options.src, @options.templatesDirectory, group, 'config.json')
      if file.exists(groupConfigFile)
        @config.groups[group] = file.readJson(groupConfigFile)

      else
        @config.groups[group] = {title: group}

      @config.groups[group]['templates'] = []


  addToGroup: (template, group) ->
    @addGroup(group)
    @config.groups[group]['templates'].push(template)


  addTemplate: (template) ->
    template.html = @minifyHtml(template.html, template.id)
    @templates.push(template)


  addTemplateFile: (filePath) ->
    templatePath = @getTemplatePath(filePath, @options.src, @options.templatesDirectory)
    templateName = @filenameToTemplatename(filePath)

    groupId = 'others'
    if templatePath.length > 1 then groupId = templatePath[0]
    @addToGroup(templateName, groupId)

    # load file into "jQuery object" to read json & html
    data = file.read(filePath)
    $ = cheerio.load(data)
    config = $(@options.configurationElement).html()
    $(@options.configurationElement).remove()

    # check for one root element
    if $.root().children().length > 1
      logger.error('The Design "' + @config.namespace + '", Template "' + templateName + '" contains more than one root element')

    template = JSON.parse(config) || {}
    template.id = templateName
    template.html = $.html()

    @addTemplate(template)


  addKickstart: (filename, html) ->
    $ = cheerio.load(html)
    template = {}
    template.name = $('html > head > title').text() || @filenameToTemplatename(filename)
    template.markup = $('html > body').html()
    @kickstarters.push(template)


  addKickstartFile: (kickstarterPath) ->
      html = @minifyHtml(file.read(kickstarterPath, {encoding: 'utf8'}), kickstarterPath)
      @addKickstart(kickstarterPath, html)


  getTemplatePath: (string, design, templatesDirectory) ->
    parts = string.replace(design + '/' + templatesDirectory + '/', '').split('/')
    output = []
    output.push parts[0]
    if parts.length > 2
      warn('Design "' + design + '", Template "' + @filenameToTemplatename(string) + '": Templates can only be only be nested in one directory.')

    if parts.length > 1
      output.push parts[parts.length - 1]

    output


  filenameToTemplatename: (string) ->
    strings = toCamelCase(string).replace('.html', '').split('/')
    strings[strings.length - 1]


  # write the config and templates to disk
  save: ->
    templateBegin = "(function() { this.design || (this.design = {}); design.#{ @config.namespace } = (function() { return "
    templateEnd = ";})();}).call(this);"
    design =
      config: @config
      templates: @templates
      kickstarters: @kickstarters
    fileData = templateBegin + JSON.stringify(design, null, 2) + templateEnd
    file.write @options.dest + '/design.js', fileData
    logger.log('Design "%s" compiled.', @options.dest)


  minifyHtml: (html, templateName) ->
    if @options.minify
      try
        htmlmin.minify html, @options.minifyOptions
      catch err
        logger.error('>> Design "%s", template "%s": HTML minify error\n %s\n'.yellow, @config.namespace, templateName, err)
        return '<div class="error minify" style="color: red">Error while minifying: Design "' + @config.namespace + '", Template "' + templateName + '"</div>'

    else
      html



module.exports = Design
