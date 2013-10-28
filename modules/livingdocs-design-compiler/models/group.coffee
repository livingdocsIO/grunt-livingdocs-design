path = require('path')
file = require('../file')
logger = require('../logger')
Style = require('./style')

class Group

  constructor: (group) ->
    group = file.readJson(group) if typeof group is "string"
    
    @title = group.title
    @templates = group.templates || []
    @addStyles(group.styles) if group.styles


  addTemplate: (template) ->
    @templates.push(template)


  addStyles: (styles) ->
    @styles ?= []
    for style in styles
      @styles.push(new Style(style))


module.exports = Group
