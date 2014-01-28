cheerio = require("cheerio")
helpers = require('../helpers')

class Kickstart

  constructor: (fileContent, options = {}, eventEmitter) ->
    $ = cheerio.load(fileContent, {xmlMode: true})
    @id = helpers.filenameToTemplatename(options.filename) if options.filename
    @name = $('html > head > title').text() || @id
    templateString = $.xml('script[type="text/x-livingdocs-template"] > *')
    @markup = helpers.minifyXml(templateString, options)

    if !@markup
      eventEmitter.emit 'warn', "The Kickstart template \"#{@name}\" is empty" if eventEmitter


module.exports = Kickstart
