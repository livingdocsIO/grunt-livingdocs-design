grunt-livingdocs-design
=======================

This project contains the official designs processor for the project Livingdocs found under the following url: [https://github.com/upfrontIO/livingdocs](https://github.com/upfrontIO/livingdocs)
It defines a grunt task for easily creating a design template.

## Technical Setup

  1. Install node.js and npm (http://nodejs.org/)
  2. Install grunt using `npm install -g grunt-cli`
  3. Install this grunt module in your design project `npm install --save grunt-livingdocs-design`
  5. Complement your Gruntfile with the configuration for this module.


## Configuration Options

```coffee
grunt.initConfig

  lddesigns:
    development:
      options:
        minify: true
        minifyOptions:
          collapseWhitespace: true
          removeComments: true
          removeCommentsFromCDATA: true
          removeCDATASectionsFromCDATA: true
        templatesDirectory: 'components'
        configurationElement: 'script[type=ld-conf]'
      files: [
        expand: true
        cwd: './'
        src: ['source']
        dest: '.tmp/'
      ]
```
