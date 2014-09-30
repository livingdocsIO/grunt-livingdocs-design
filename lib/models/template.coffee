cheerio = require("cheerio")
helpers = require("../helpers")
Style = require('./style')



class Template
  constructor: (data, options, design) ->
    # load file into "jQuery object" to read json & html
    $ = cheerio.load(data)
    config = JSON.parse($(options.configurationElement).html()) || {}
    $(options.configurationElement).remove()

    # check for one root element
    if $.root().children().length > 1
      err = new Error "The Design \"#{design.config.namespace}\", Template \"#{options.filename}\" contains more than one root element"
      design.emit 'error', err

    @id = config.namespace || config.id || options.filename
    @weight = weight if weight = parseInt(config.weight)
    @title = config.name || config.title || options.filename
    @html = helpers.minifyHtml($.html(), options)
    @addStyles(config.styles) if config.styles


  addStyles: (styles) ->
    @styles ?= []
    for style in styles
      @styles.push(new Style(style))


module.exports = Template
