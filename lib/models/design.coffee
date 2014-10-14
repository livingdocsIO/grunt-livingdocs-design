EventEmitter = require('events').EventEmitter

file = require('../file')
helpers = require('../helpers')

Style = require('./style')
Group = require('./group')
Template = require('./template')


class Design extends EventEmitter

  constructor: (options) ->
    @templates = []
    @config = {}
    super()


  initConfig: (config = {}) ->
    unless config?.namespace
      @emit('error', new Error "You specified a configuration without a namespace.")
      return @emit('end')

    @config =
      version: config.version || 1
      namespace: config.namespace
      paragraph: config.paragraph
      css: config.css
      js: config.js
      groups: config.groups || {}
      styles: []

    for style in config.styles || []
      @addStyle(new Style(style))


  initConfigFile: (filePath, designName) ->
    try
      config = file.readJson(filePath)
    catch err
      if err.errno == 34
        @emit('warn', "The design \"#{designName}\" has no configuration file.")
      else
        @emit('error', err)
        return @emit('end')

    @initConfig(config)


  addStyle: (style) ->
    @config.styles.push(style)


  addTemplateToGroup: (template, group) ->
    group = @config.groups[group]
    group.addTemplate(template.id || template) if group


  addTemplate: (template, options) ->
    template.html = helpers.minifyHtml(template.html, options, template.id, this)
    @templates.push(template)


  addTemplateFile: (filePath, options) ->
    templateFile = file.readSync(filePath, {}, this)
    options.filename = helpers.filenameToTemplatename(filePath)
    template = new Template(templateFile, options, this)

    # Add template & add to group
    @addTemplate(template, options)
    templatePath = filePath.split("#{options.src}/#{options.templatesDirectory}/")[1].split('/')
    if templatePath.length > 1 then groupId = templatePath[0]
    @addTemplateToGroup(template, groupId || 'others')


  addGroup: (group = {}) ->
    if !group.id
      @emit('error', "Each group requires an id. The group \"#{group.title}\" has none.")
      return @emit('end')

    @config.groups[group.id] = group


  addGroupFile: (filePath) ->
    try
      config = file.readJson(filePath + '/config.json')
    catch err
      if err.errno == 34
        @emit('debug', "The template group \"#{helpers.filenameToTemplatename(filePath)}\" in the design \"#{@config.namespace}\" has no config.json file. We advice you to use one.")
      else
        @emit('error', err)
        return @emit('end')

    config = {} if !config
    config.id = filePath.split('/').pop()
    @addGroup(new Group(config))


  toJson: (minify) ->
    data =
      config: @config
      templates: @templates
    JSON.stringify(data, null, minify||0)


  toJs: (minify) ->
    templateBegin = "(function () { var designJSON = "
    templateEnd = "; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.#{@config.namespace} = designJSON;} }).call(this);"
    fileData = templateBegin + @toJson(minify) + templateEnd


  # write the config and templates to disk
  save: (dest, minify)->
    minify = if minify then 0 else 2
    javascript = @toJs(minify)
    javascript_dest = dest
    json = @toJson(minify)
    json_dest = dest.replace(/\.js/, '.json')

    file.write javascript_dest, javascript, (err) =>
      if err
        @emit('error', err)
        return @emit('end')

      file.write json_dest, json, (err) =>
        @emit('end', err)


module.exports = Design
