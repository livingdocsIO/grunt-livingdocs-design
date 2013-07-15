"use strict"

module.exports = (grunt) ->
  
  grunt.registerMultiTask "moveToDist", "Move files to subdirectory", ->
    #var config = grunt.config(this.name);
    options = @options()
    files = @files
    all = {}

    count = 0
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
        count = i


    grunt.log.writeln('Prepared ' + count.toString().cyan + ' files and directories to copy to dist directory')
    grunt.config "copy.moveToDist.files", all
    grunt.task.run "copy:moveToDist"

