class Style

  constructor: (styles) ->
    @id = styles.id || styles.name
    @name = styles.name
    @type = styles.type
    @value = styles.value
    @options = styles.options

    console.error("You specified a \"style\" object without name or id") if !@name


module.exports = Style
