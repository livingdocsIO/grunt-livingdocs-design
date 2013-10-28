path = require("path")
cheerio = require("cheerio")
htmlmin = require("html-minifier")

helpers = require('../helpers')
file = require('../file')
logger = require('../logger')
Style = require('./style')



class Template

  constructor: (templateFile, options) ->
    templateName = helpers.filenameToTemplatename(templateFile)

    # load file into "jQuery object" to read json & html
    data = file.read(templateFile)
    $ = cheerio.load(data)
    config = JSON.parse($(options.configurationElement).html()) || {}
    $(options.configurationElement).remove()

    # check for one root element
    if $.root().children().length > 1
      logger.error('The Design "' + config.namespace + '", Template "' + templateName + '" contains more than one root element')

    @namespace = config.id || config.templateName
    @name = templateName
    @html = $.html()

    @addStyles(config.styles) if config.styles


  addStyles: (styles) ->
    @styles ?= []
    for style in styles
      @styles.push(new Style(style))



module.exports = Template
