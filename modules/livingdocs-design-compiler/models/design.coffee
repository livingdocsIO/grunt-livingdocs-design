path = require("path")
cheerio = require("cheerio")
color = require("color")

file = require('../file')
logger = require('../logger')
helpers = require('../helpers')
toCamelCase = require("../helpers").toCamelCase

Style = require('./style')
Group = require('./group')
Kickstart = require('./kickstart')
Template = require('./template')


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

    if @config.styles
      for style in @config.styles
        @addStyle(style)

    # iterate through files array and process the templates
    files.forEach (template) =>
      @addTemplateFile(template)

    kickstartersPath = options.src + '/kickstarters'
    if file.exists(kickstartersPath)
      kickstarters = file.readdir(options.src + '/kickstarters')
      @addKickstarters(kickstartersPath, kickstarters)


  addGroup: (group) ->
    unless @config.groups[group]
      groupConfigFile = path.join(@options.src, @options.templatesDirectory, group, 'config.json')
      if file.exists(groupConfigFile)
        @config.groups[group] = new Group(groupConfigFile)

      else
        @config.groups[group] = new Group({title: group})

    @config.groups[group]


  addStyle: (style) ->
    @config.styles.push(new Style(style))


  addTemplateToGroup: (template, group) ->
    @addGroup(group).addTemplate(template)


  addTemplate: (template) ->
    template.html = helpers.minifyHtml(template.html, template.id, @options)
    @templates.push(template)


  addTemplateFile: (filePath) ->
    templatePath = @getTemplatePath(filePath, @options.src, @options.templatesDirectory)
    templateName = helpers.filenameToTemplatename(filePath)

    if templatePath.length > 1 then groupId = templatePath[0]
    @addTemplateToGroup(templateName, groupId || 'others')

    @addTemplate(new Template(filePath, @options))


  addKickstarters: (basePath, fileNames) ->
    for kickstart in fileNames
      if kickstart.indexOf('.html') != -1
        @addKickstart(new Kickstart(basePath + '/' + kickstart))


  addKickstart: (template) ->
    @kickstarters.push(template)


  getTemplatePath: (string, design, templatesDirectory) ->
    parts = string.replace(design + '/' + templatesDirectory + '/', '').split('/')
    if parts.length > 2 then warn('Design "' + design + '", Template "' + helpers.filenameToTemplatename(string) + '": Templates can only be only be nested in one directory.')

    output = []
    output.push parts[0]
    output.push parts[parts.length - 1] if parts.length > 1

    output


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


module.exports = Design
