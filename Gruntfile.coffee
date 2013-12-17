grunt = require('grunt')

# load all grunt tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

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
        # templates do not work unminified. Is there a bug in livingdocs-engine?
        minify: true
        minifyOptions:
          collapseWhitespace: true
          removeComments: true
          removeCommentsFromCDATA: true
          removeCDATASectionsFromCDATA: true
        templatesDirectory: 'templates'
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
        src:[
          'designs/**/assets/**'
          'designs/**/img/**'
          'designs/**/images/**'
          'designs/**/media/**'
          'designs/**/preview.html'
        ]
        dest: '.tmp/'
        # exclude empty directories
        filter: (src) ->
          return src.split('/').pop().indexOf('.') != -1
      ]
    watson:
      files: [
        expand: true,
        cwd: 'designs/watson/dist/',
        src: ['**'],
        dest: '../watson-ui/app/vendor/watson-design/'
      ]
    datablog:
      files: [
        expand: true,
        cwd: 'designs/livingmaps/dist/',
        src: ['**'],
        dest: '../livingmaps/datablog-ui/app/vendor/livingmaps-design/'
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


# load livingdocs task lddesigns
grunt.loadTasks "tasks"


grunt.registerTask "default", [
  "clean:preBuild"
  "lddesigns"
  "recess"
  "copy:assets"
  "copy:cssDirectories"
  "moveToDist"
  "clean:postBuild"
]

grunt.registerTask "server", [
  "default"
  "watch"
]
