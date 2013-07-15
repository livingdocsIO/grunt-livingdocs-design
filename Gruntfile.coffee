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
        dest: 'public/'
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
        configurationElement: 'script[type=ld-conf]'
        snippetsDirectory: "snippets"
      files: [
        expand: true
        cwd: './'
        src: ['designs/*']
        dest: 'public/'
      ]

  lddesign:
    options:
      minify: true
      src: 'designs'
      dest: 'public/designs'
        
  copy:
    assets:
      files: [
        expand: true
        cwd: './'
        src:['designs/**/assets/**', 'designs/**/img/**', 'designs/**/images/**', 'designs/**/media/**']
        dest: 'public/'
      ]
      
  watch:
    scripts:
      files: ['designs/**/*', 'public/*.html']
      tasks: ['default']
      options:
        nospawn: true
        livereload: true
        
  


# grunt-contrib-less uses a less.js in version 1.4.1 which has a bug. It's already fixed in v1.5 alpha
# https://github.com/Paratron/SimpLESS/issues/97
# grunt.loadNpmTasks "grunt-contrib-less"
# alternative less compiler which uses recess from twitter
grunt.loadNpmTasks "grunt-recess"


grunt.loadNpmTasks "grunt-contrib-copy"
grunt.loadNpmTasks "grunt-contrib-watch"
grunt.loadTasks "tasks"


grunt.registerTask "default", ["lddesigns", "recess", "copy:assets"]
grunt.registerTask "server", ["default", "watch"]
