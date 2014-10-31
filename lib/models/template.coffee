cheerio = require("cheerio")
helpers = require("../helpers")



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
    @title = config.name || config.title || options.filename
    @html = helpers.minifyHtml($.html(), options, @id, design)
    @styles = config.styles if config.styles


module.exports = Template
