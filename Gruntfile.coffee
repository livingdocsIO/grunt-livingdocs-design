grunt = require('grunt')

grunt.initConfig
  recess:
    development:
      options:
        compile: true

      files: [
        expand: true
        cwd: './'
        src:['designs/**/style.less']
        dest: 'public/'
        ext: '.css'
      ]

  lddesigns:
    development:
      options:
        # html-minifier doesn't work on watsons text.html snippet, crashes silently in grunt
        minify: false
      files: [
        expand: true
        cwd: './'
        src: ['designs/*']
        dest: 'public/'
      ]

  lddesign:
    options:
      minify: false
      src: 'designs'
      dest: 'public/designs'
        
  copy:
    assets:
      files: [
        expand: true
        cwd: './'
        src:['designs/**/assets']
        dest: 'public/'
      ]
    


# grunt-contrib-less uses a less.js in version 1.4.1 which has a bug. It's already fixed in v1.5 alpha
# https://github.com/Paratron/SimpLESS/issues/97
# grunt.loadNpmTasks "grunt-contrib-less"
# alternative less compiler which uses recess from twitter
grunt.loadNpmTasks "grunt-recess"


grunt.loadNpmTasks "grunt-contrib-copy"
grunt.loadTasks "tasks"


grunt.registerTask "default", ["lddesigns", "recess", "copy:assets"]