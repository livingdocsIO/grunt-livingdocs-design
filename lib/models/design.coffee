EventEmitter = require('events').EventEmitter

file = require('../file')
helpers = require('../helpers')
Template = require('./template')


class Design extends EventEmitter

  constructor: (options) ->
    @templates = []
    @config = {}
    super()


  initConfigFile: (filePath, designName) ->
    try
      @config = file.readJson(filePath)
    catch err
      if err.errno == 34
        @emit('warn', "The design \"#{designName}\" has no configuration file.")
      else
        @emit('error', err)
        return @emit('end')


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


  toJson: (minify) ->
    data = @config
    data.components = @templates
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
