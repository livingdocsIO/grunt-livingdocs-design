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
    @emit('debug', 'initialize config file')

    for prop in ['name', 'version']
      unless @config[prop]
        return callback(new Error "Your configuration does not contain a '#{prop}'.")
    callback()


  initConfigFile: (filePath, callback) ->
    @emit('debug', 'read config file')

    file.readJson filePath, (err, config) =>
      if err
        if err.errno == 34 then err = new Error("The design has no configuration file.")
        callback(err)
      else
        @initConfig(config, callback)


  addTemplate: (templateName, templateString) ->
    @emit('debug', "add template '#{templateName}'")

    template = new Template(templateName, templateString, @options, this)
    @components.push(template)


  addTemplateFile: (filePath, callback) ->
    templateName = helpers.filenameToTemplatename(filePath)
    @emit('debug', "read template '#{templateName}'")
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
        @emit('error', err) if err
        @emit('end')


module.exports = Design
