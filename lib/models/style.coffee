class Style

  constructor: (styles, ee) ->
    @id = styles.id || styles.name
    @name = styles.name
    @type = styles.type
    @value = styles.value
    @options = styles.options

    if !@name
      warning = "You specified a \"style\" object without name or id"
      if ee
        ee.emit('warn', warning)
      else
        console.warn(warning)


module.exports = Style
