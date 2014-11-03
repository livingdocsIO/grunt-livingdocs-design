cheerio = require("cheerio")
helpers = require("../helpers")



class Template
  constructor: (templateName, templateString, options, design) ->
    # load file into "jQuery object" to read json & html
    $ = cheerio.load(templateString)
    config = JSON.parse($(options.configurationElement).html()) || {}
    $(options.configurationElement).remove()

    # check for one root element
    if $.root().children().length > 1
      err = new Error "The Design \"#{design.config.name}\", Template \"#{templateName}\" contains more than one root element"
      design.emit 'error', err

    @id = config.namespace || config.id || templateName
    @title = config.name || config.title || templateName
    @html = helpers.minifyHtml($.html(), options, @id, design)


module.exports = Template
