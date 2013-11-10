sys = require('sys')
events = require('events')

file = require('../file')
helpers = require('../helpers')

Style = require('./style')
Group = require('./group')
Kickstart = require('./kickstart')
Template = require('./template')


class Design

  constructor: (options) ->
    @templates = []
    @kickstarters = []
    @config = {}

    events.EventEmitter.call(@)

  sys.inherits(Design, events.EventEmitter)


  initConfig: (config = {}) ->
    unless config?.namespace
      @emit 'error', new Error "You specified a configuration without a namespace."

    @config =
      version: config.version || 1
      namespace: config.namespace
      css: config.css
      js: config.js
      groups: config.groups || {}
      styles: []


    if config.styles
      for style in config.styles
        @addStyle(new Style(style))


  initConfigFile: (filePath, designName) ->
    try
      config = file.readJson(filePath)
    catch err
      if err.errno == 34
        @emit 'warn', "The design \"#{designName}\" has no configuration file."
      else
        @emit 'err', err

    @initConfig(config)


  addStyle: (style) ->
    @config.styles.push(style)


  addTemplateToGroup: (template, group) ->
    group = @config.groups[group]
    group.addTemplate(template.id || template) if group


  addTemplate: (template, options) ->
    template.html = helpers.minifyHtml(template.html, options, template.id)
    @templates.push(template)


  addTemplateFile: (filePath, options) ->
    templateFile = file.readSync(filePath, {}, @)
    options.filename = helpers.filenameToTemplatename(filePath)
    template = new Template(templateFile, options, @)

    @addTemplate(template, options)

    # Add template to group
    templatePath = filePath.split("#{options.src}/#{options.templatesDirectory}/")[1].split('/')
    if templatePath.length > 1 then groupId = templatePath[0]
    @addTemplateToGroup(template, groupId || 'others')


  addGroup: (group = {}) ->
    if !group.id
      @emit 'error', "Each group requires an id. The group \"#{group.title}\" has none."
      return

    @config.groups[group.id] = group


  addGroupFile: (filePath) ->
    try
      config = file.readJson(filePath + '/config.json')
    catch err
      if err.errno == 34
        @emit 'debug', "The template group \"#{helpers.filenameToTemplatename(filePath)}\" in the design \"#{@config.namespace}\" has no config.json file. We advice you to use one."
      else
        @emit 'error', err

    config = {} if !config
    config.id = filePath.split('/').pop()
    @addGroup(new Group(config))


  addKickstart: (kickstart) ->
    @kickstarters.push(kickstart)


  addKickstartFile: (filePath, options) ->
    try
      fileContent = file.readSync(filePath)
    catch err
      @emit 'warn', err
    options.filename = helpers.filenameToTemplatename(filePath)
    @addKickstart(new Kickstart(fileContent, options, @))


  toJson: ->
    design =
      config: @config
      templates: @templates
      kickstarters: @kickstarters


  toJs: (minifiyJSON) ->
    templateBegin = "(function() { this.design || (this.design = {}); design.#{ @config.namespace } = (function() { return "
    templateEnd = ";})();}).call(this);"
    minify = if minifiyJSON then 0 else 2
    fileData = templateBegin + JSON.stringify(@toJson(), null, minify) + templateEnd


  # write the config and templates to disk
  save: (dest, minify)->
    file.write dest, @toJs(minify), (err) =>
      if err
        @emit 'end', err

      else
        @emit 'end'


module.exports = Design
