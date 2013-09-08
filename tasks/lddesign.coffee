"use strict"
Design = require('../modules/livingdocs-design-compiler').design

module.exports = (grunt) ->
  # grunt task to compile all templates
  grunt.registerMultiTask 'lddesigns', 'Compile templates to livingdocs-engine template', ->
    options = @options()
    designs = @files
    
    designs.forEach (file, i) ->
      src = designs[i].src[0]
      dest = designs[i].dest
      design = src.split('/').pop()

      option = grunt.util._.clone(options)
      option.design = design
      option.src = src
      option.dest = dest

      # create task to process the design
      grunt.config('lddesign.design_' + design + '.files', [
        expand: true
        src: [src + '/' + options.templatesDirectory + '/**/*.html']
        dest: dest
      ])
      grunt.config('lddesign.design_' + design + '.options', option)
      grunt.log.writeln('Design "' + design + '" prepared for processing.')

      #run task
      grunt.task.run('lddesign:design_' + design)


  # grunt task to compile specific design. executable only through console?
  grunt.registerMultiTask 'lddesign', 'Compile a single design', ->
    options = @options()
    src = options.src
    dest = options.dest
    files = @files
    
    templates = []
    files.forEach (file, i) ->
      templates[i] = file.src[0]
    
    design = new Design(templates, options)
    design.save()
