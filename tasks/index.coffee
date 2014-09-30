_ = require('lodash')
file = require('../lib/file')
helpers = require('../lib/helpers')
Design = require('../lib')

module.exports = (grunt) ->
  # grunt task to compile all templates
  grunt.registerMultiTask 'lddesigns', 'Compile templates to livingdocs-engine template', ->

    for design in @files

      option = _.clone(@options())
      option.src = design.src[0]
      option.dest = design.dest
      option.design = option.src.split('/').pop()

      # create task to process the design
      taskName = 'lddesign.design_' + option.design
      grunt.config(taskName + '.options', option)
      grunt.log.write("Design \"#{option.design}\" prepared for processing...")
      grunt.log.ok()

      grunt.task.run(taskName.replace('.', ':'))


  # grunt task to compile specific design. executable only through console?
  grunt.registerMultiTask 'lddesign', 'Compile a single design', ->

    done = @async()
    options = @options()

    # Initialize design
    design = Design.compile(options)
    .on 'debug', (debug) ->
      grunt.log.debug(debug)

    .on 'warn', (warning) ->
      grunt.fail.warn(warning)

    .on 'error', (err) ->
      grunt.log.error(err)
      done(false)

    .on 'end', (err)->
      if err
        grunt.log.error(err)
        done(false)
      else
        grunt.log.write("Design '#{options.design}' compiled...")
        grunt.log.ok()
        done()
