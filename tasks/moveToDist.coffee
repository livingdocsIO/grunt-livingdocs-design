"use strict"
fs = require("fs")
path = require("path")
cheerio = require("cheerio")
htmlmin = require("html-minifier")


module.exports = (grunt) ->
  

  # grunt task to compile all snippets
  grunt.registerMultiTask "moveToDist", "Move files to subdirectory", ->
    #var config = grunt.config(this.name);
    options = @options()
    files = @files
    all = {}
    console.log(all)

    files.forEach (file, i) ->
      unless i == 0
        source = file.src[0]
        destination = file.dest

        sourceFolders = source.split('/')
        destinationFolders = destination.split('/')
        design = sourceFolders[2]

        destination = destination.split('/')
        destination.splice(2,0,'dist')
        destination = destination.join('/')
        all[destination] = source


    grunt.config "copy.moveToDist.files", all
    grunt.task.run "copy:moveToDist"

