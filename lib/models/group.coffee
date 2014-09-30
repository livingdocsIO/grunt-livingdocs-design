path = require('path')
file = require('../file')
Style = require('./style')

class Group

  constructor: (config) ->
    @id = config.id
    @title = config.title || config.id
    @weight = weight if weight = parseInt(config.weight)
    @templates = config.templates || []
    @addStyles(config.styles) if config.styles


  addTemplate: (template) ->
    @templates.push(template)


  addStyles: (styles) ->
    @styles ?= []
    for style in styles
      @styles.push(new Style(style))


module.exports = Group
