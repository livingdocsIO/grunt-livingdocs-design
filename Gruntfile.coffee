
# livereload
path = require('path')
folderMount = (connect, point) ->
  return connect.static(path.resolve(point))

module.exports = (grunt) ->

  # load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig
    livereload:
      port: 35729 # Default livereload listening port.
    watch:
      livereload:
        files: [
          '*.html',
          '.tmp/{,*/}*.js'
        ]
        tasks: ['livereload']
      src:
        files: [
          'designs/*/{,*/}*.coffee'
        ]
        tasks: ['coffee']
    coffee:
      engine:
        options:
          join: true
        files:
          '.tmp/livingdocs_designs.js': [
            'designs/az/*.coffee',
            'designs/bootstrap/*.coffee',
            'designs/watson/*.coffee',
            'designs/upfrontIO/*.coffee',
            'designs/medium/*.coffee'
          ]