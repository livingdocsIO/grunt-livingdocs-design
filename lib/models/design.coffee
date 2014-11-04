EventEmitter = require('events').EventEmitter

file = require('../file')
helpers = require('../helpers')
Template = require('./template')


class Design extends EventEmitter

  constructor: (@options) ->
    @components = []
    @config = {}
    super


  initConfig: (@config={}, callback) ->
    @debug('initialize config file')

    for prop in ['name', 'version']
      unless @config[prop]
        return callback(new Error "Your configuration does not contain a '#{prop}'.")
    callback()


  initConfigFile: (filePath, callback) ->
    @debug('read config file')

    file.readJson filePath, (err, config) =>
      if err
        if err.errno == 34 then err = new Error("The design has no configuration file.")
        callback(err)
      else
        @initConfig(config, callback)


  addTemplate: (templateName, templateString) ->
    @debug("add template '#{templateName}'")

    template = Template.parse(templateName, templateString, @options, this)
    @components.push(template)


  addTemplateFile: (filePath, callback) ->
    templateName = helpers.filenameToTemplatename(filePath)
    @debug("read template '#{templateName}'")
    file.readFile filePath, encoding:'utf8', (err, templateString) =>
      return callback(err) if err
      @addTemplate(templateName, templateString)
      callback()


  toJson: (minify) ->
    data = @config
    data.components = @components
    JSON.stringify(data, null, minify||0)


  toJs: (minify) ->
    templateBegin = "(function () { var designJSON = "
    templateEnd = "; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.#{@config.name} = designJSON;} }).call(this);"
    fileData = templateBegin + @toJson(minify) + templateEnd


  # write the config and templates to disk
  save: (dest, minify) ->
    @debug('save design files')

    minify = if minify then 0 else 2
    javascript = @toJs(minify)
    javascript_dest = dest
    json = @toJson(minify)
    json_dest = dest.replace(/\.js/, '.json')

    @debug('save design.js file')
    file.write javascript_dest, javascript, (err) =>
      if err
        @emit('error', err)
        return @emit('end')

      @debug('saved design.js file')
      @debug('save design.json file')
      file.write json_dest, json, (err) =>
        @emit('error', err) if err
        @debug('saved design.json file') unless err
        @emit('end')


  debug: (string) ->
    @emit('debug', string)


  warn: (err) ->
    @emit('warn', err)


module.exports = Design
