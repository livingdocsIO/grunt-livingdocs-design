_ = require('lodash')
file = require('../lib/file')
helpers = require('../lib/helpers')
Design = require('../lib')

module.exports = (grunt) ->
  # grunt task to compile specific design. executable only through console?
  grunt.registerMultiTask 'lddesign', 'Compile a single design', ->

    design = @files[0]
    done = @async()
    options = @options()
    options.src = design.src[0]
    options.dest = design.dest

    error = null

    # Initialize design
    design = Design.compile(options)
    .on 'debug', (debug) ->
      grunt.log.debug(debug)

    .on 'warn', (warning) ->
      grunt.fail.warn(warning)

    .on 'error', (err) ->
      error = err

    .on 'end', ->
      if error
        grunt.log.error(error)
        done(false)
      else
        grunt.log.write("Design compiled...")
        grunt.log.ok()
        done()
