logger = require('../logger')

class Style

  constructor: (styles) -> 
    @id = styles.id || styles.name
    @name = styles.name
    @type = styles.type
    @value = styles.value
    @options = styles.options

    if !@name
      logger.error('You specified a "style" object without name or id')


module.exports = Style
