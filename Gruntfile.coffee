module.exports = (grunt) ->

  # load all grunt tasks
  require('load-grunt-tasks')(grunt)

  grunt.initConfig

    bump:
      options:
        files: ['package.json']
        commitFiles: ['-a'], # '-a' for all files
        pushTo: 'origin'
        push: true

    shell:
      npm:
        command: 'npm publish'


  # Tasks
  # -----

  # Release a new version
  # Only do this on the `master` branch.
  #
  # options:
  # release:patch
  # release:minor
  # release:major
  grunt.registerTask 'release', (type) ->
    type ?= 'patch'
    grunt.task.run('bump:' + type)
    grunt.task.run('shell:npm')

