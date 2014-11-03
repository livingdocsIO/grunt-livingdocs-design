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
      err = new Error("The Design '#{design.config.name}', Template '#{templateName}' contains more than one root element")
      design.emit('warn', err)

    @name = config.name || config.namespace || config.id || templateName
    @label = config.label || config.title || config.name || templateName
    @html = helpers.minifyHtml($.html(), options, @id, design)


module.exports = Template
