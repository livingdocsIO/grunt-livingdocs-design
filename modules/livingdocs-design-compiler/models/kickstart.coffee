path = require("path")
cheerio = require("cheerio")
htmlmin = require("html-minifier")

helpers = require('../helpers')
file = require('../file')
logger = require('../logger')



class Kickstart

  constructor: (templateFile) ->
    html = helpers.minifyHtml(file.read(templateFile), templateFile)
    $ = cheerio.load(html)
    @name = $('html > head > title').text() || helpers.filenameToTemplatename(templateFile)
    @markup = $('script[type="text/x-livingdocs-template"]').html()
    if !@markup
    	logger.error("The Kickstart template '#{@name}' is empty")


module.exports = Kickstart
