EventEmitter = require('events').EventEmitter

file = require('../file')
helpers = require('../helpers')
Template = require('./template')


class Design extends EventEmitter

  constructor: (@options) ->
    @components = []
    @config = {}
    super


  initConfig: (@config={}) ->
    for prop in ['name', 'version']
      unless @config[prop]
        @emit('error', new Error "You specified design configuration without a '#{prop}'.")
        return @emit('end')


  initConfigFile: (filePath, callback) ->
    file.readJson filePath, (err, config) =>
      if err
        if err.errno == 34 then err = new Error("The design has no configuration file.")
        @emit('error', err)
        @emit('end')
      else
        @initConfig(config)


  addTemplate: (templateName, templateString, options) ->
    template = new Template(templateName, templateString, options, this)
    @components.push(template)


  addTemplateFile: (filePath, options) ->
    templateString = file.readSync(filePath, {}, this)
    templateName = helpers.filenameToTemplatename(filePath)
    @addTemplate(templateName, templateString, options)


  toJson: (minify) ->
    data = @config
    data.components = @components
    JSON.stringify(data, null, minify||0)


  toJs: (minify) ->
    templateBegin = "(function () { var designJSON = "
    templateEnd = "; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.#{@config.design.name} = designJSON;} }).call(this);"
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
