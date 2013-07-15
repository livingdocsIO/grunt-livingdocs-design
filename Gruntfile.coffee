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
        configurationElement: "script[type=ld-conf]"
        snippetsDirectory: "snippets"
      files: [
        expand: true
        cwd: './'
        src: ['designs/*']
        dest: '.tmp/'
      ]

  lddesign:
    options:
      minify: true
      src: 'designs'
      dest: '.tmp/designs'
      snippetsDirectory: "snippets"
      configurationElement: "script[type=ld-conf]"
        
  copy:
    assets:
      files: [
        expand: true
        cwd: './'
        src:['designs/**/assets/**', 'designs/**/img/**', 'designs/**/images/**', 'designs/**/media/**']
        dest: '.tmp/'
        # leere verzeichnisse ausschliessen
        filter: (src) ->
          return src.split('/').pop().indexOf('.') != -1
      ]
    cssDirectories:
      files: [
        expand: true
        cwd: './'
        src:['designs/**/css/**']
        dest: '.tmp/'
        # leere verzeichnisse ausschliessen
        # css zu kopieren, schadet nicht. deshalb wird nur less und Verzeichnisse ausgeschlossen
        filter: (src) ->
          return src.indexOf('.less') == -1 && src.split('/').pop().indexOf('.') != -1
      ]
      
  watch:
    scripts:
      files: ['designs/**/*', 'public/*.html']
      tasks: ['default']
      options:
        nospawn: true
        livereload: true

  moveToDist:
    designs:
      files: [
        expand: true
        cwd: '.tmp/'
        src:['designs/**']
        dest: ''
      ]    

  clean:
    preBuild: ["designs/*/dist", ".tmp/"]
    postBuild: [".tmp/"]
    


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
