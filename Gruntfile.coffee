grunt = require('grunt')


grunt.initConfig
 

  recess:
    development:
      options:
        compile: true
      files: [
        expand: true
        cwd: './'
        src:['designs/*/css/*']
        dest: '.tmp/'
        ext: '.css'
        filter: (src) ->
          return src.split('/').pop()[0] != '_' && (src.indexOf('.css') != -1 || src.indexOf('.less') != -1)
      ]


  lddesigns:
    development:
      options:
        # html-minifier doesn't work on watsons text.html snippet
        # snippets do not work unminified. Is there a bug in livingdocs-engine?
        minify: true
        snippetsDirectory: 'snippets'
        configurationElement: 'script[type=ld-conf]'
      files: [
        expand: true
        cwd: './'
        src: ['designs/*']
        dest: '.tmp/'
      ]

  copy:
    assets:
      files: [
        expand: true
        cwd: './'
        src:['designs/**/assets/**', 'designs/**/img/**', 'designs/**/images/**', 'designs/**/media/**', 'designs/**/preview.html']
        dest: '.tmp/'
        # exclude empty directories
        filter: (src) ->
          return src.split('/').pop().indexOf('.') != -1
      ]


    cssDirectories:
      files: [
        expand: true
        cwd: './'
        src:['designs/**/css/**']
        dest: '.tmp/'
        # exclude empty directories
        # to copy css doesn't matter. we exclude only .less files and empty directories
        filter: (src) ->
          return src.indexOf('.less') == -1 && src.split('/').pop().indexOf('.') != -1
      ]

      
  watch:
    scripts:
      files: ['designs/**/*', 'public/*.html']
      tasks: ['default']
      options:
        nospawn: true
        livereload: 35739


  moveToDist:
    designs:
      files: [
        expand: true
        cwd: '.tmp/'
        src:['designs/**']
        dest: ''
      ]    


  clean:
    preBuild: ['designs/*/dist', '.tmp/']
    postBuild: ['.tmp/']
    


# grunt-contrib-less uses a less.js in version 1.4.1 which has a bug. It's already fixed in v1.5 alpha
# https://github.com/Paratron/SimpLESS/issues/97
# grunt.loadNpmTasks "grunt-contrib-less"
# alternative less compiler which uses recess from twitter
grunt.loadNpmTasks "grunt-recess"


grunt.loadNpmTasks "grunt-contrib-copy"
grunt.loadNpmTasks "grunt-contrib-watch"
grunt.loadNpmTasks "grunt-contrib-clean"
grunt.loadTasks "tasks"


grunt.registerTask "default", ["clean:preBuild", "lddesigns", "recess", "copy:assets", "copy:cssDirectories", "moveToDist", "clean:postBuild"]
grunt.registerTask "server", ["default", "watch"]
