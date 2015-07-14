var Design = require('livingdocs-manager')

module.exports = function initializeLivingdocsDesignTasks (grunt) {
  // grunt task to compile a specific design
  grunt.registerMultiTask('lddesign', 'Compile a single design', processLivingdocsDesign)

  function processLivingdocsDesign () {
    var design = this.files[0]
    var done = this.async()
    var options = this.options()
    options.src = design.src[0]
    options.dest = design.dest

    var error = null
    // Initialize design
    Design.build(options)
    .on('debug', function onDebug (debug) { grunt.log.debug(debug) })
    .on('warn', function onWarning (warning) { grunt.fail.warn(warning) })
    .on('error', function onError (err) { error = err })
    .on('end', function onEnd () {
      if (error) {
        grunt.log.error(error)
        done(false)
      } else {
        grunt.log.write('Design compiled...')
        grunt.log.ok()
        done()
      }
    })
  }

}
