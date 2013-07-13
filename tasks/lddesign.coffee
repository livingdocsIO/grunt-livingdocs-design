# livingdocs design compile task
#
# this file contains two tasks. lddesigns and lddesign
# the task lddesigns can be used as normal multiTask

# lddesigns
# ---------
# this task only processes the config and snippets. the css and assets should be handled in other tasks


# lddesign
# --------
# lddesign can only be used in the command shell.
# It processes the whole design. So first the config and snippets are written to a file.
# After that it copies all assets to the public/designs/designname directory and compiles the style.less file
# use it the following way
#
# grunt lddesign --design=designname


"use strict"
fs = require("fs")
path = require("path")
cheerio = require("cheerio")
htmlmin = require("html-minifier")


module.exports = (grunt) ->
  
  processHtml = (html, minify) ->
    if minify
      htmlmin.minify html,
        collapseWhitespace: true
    else
      html
      
      
  # write the config and snippets to disk
  writeDesignConfig = (design, destination) ->
    templateBegin = "(function() { this.snippetCollections || (this.snippetCollections = {}); snippetCollections." + design.config.namespace + " = (function() { return "
    templateEnd = ";})();}).call(this);"
    fileData = templateBegin + JSON.stringify(design, null, 2) + templateEnd
    grunt.file.write destination + "/design.js", fileData,
      encoding: "utf8"

    grunt.log.writeln "Design \"" + destination + "\" compiled."
  
  
  # process the config and snippets, create design object
  compileDesign = (src, dest, options) ->
    designFolder = src.split("/").pop()
    
    # Check existence of all directories and files
    requiredResources = [
      name: ""
      type: "design"
    ,
      #  name: "css",
      #  type: "directory"
      #,
      name: "snippets"
      type: "directory"
    ,
      name: "config.json"
      type: "file"
    ]
    
    requiredResources.forEach (resource) ->
      unless grunt.file.exists(src, resource.name)
        grunt.fail.warn 'The ' + resource.type + ' "' + path.join(src, resource.name) + '" does not exist.'

    
    # Read snippets from directory, and store them in string variable
    snippetFiles = fs.readdirSync(path.join(src, "snippets"))
    snippetFiles = grunt.util._.filter(snippetFiles, (file) ->
      file.indexOf(".html") != -1
    )
    design = {}
    design.snippets = {}
    design.config = grunt.file.readJSON(path.join(src, "config.json"),
      encoding: "utf8"
    )

    unless design.config.namespace
      grunt.fail.warn 'Error: the design "' + designFolder + '" contains a config file which has no namespace.'
    
    # warn if a design contains no snippets
    unless snippetFiles.length
      grunt.log.warn 'Warning: the design "' + designFolder + '" has no snippets'
      writeDesignConfig design, dest
    
    # iterate through file array and process the snippets, store them in templates.js file
    compiledSnippets = 0
    snippetFiles.forEach (snippet) ->
      data = grunt.file.read(path.join(src, "snippets", snippet),
        encoding: "utf8"
      )
      
      # load file in jQuery object to read json & html
      $ = cheerio.load(data)
      
      # create snippet object using config
      snippetFile = snippet.replace(".html", "")
      snippetObject = JSON.parse($("script[type=ld-conf]").html()) || {}
      snippetNamespace = snippetObject.namespace || snippetFile
      
      # Disallow "-" in snippetNamespace
      unless snippetNamespace.indexOf("-") == -1
        grunt.log.warn 'Warning: snippet "' + snippetNamespace + '" in the design "' + designFolder + '": the character "-" (minus/dash) is not allowed in a snippet namespace'
      
      # store snippet config in design
      design.snippets[snippetNamespace] = snippetObject
      
      # push snippet html into snippet object, remove config and minify the html
      $("script[type=ld-conf]").remove()
      design.snippets[snippetNamespace]["html"] = processHtml($.html(), options.minify)
      
      # Check if everything is compiled, close the templates file and save it;
      compiledSnippets = compiledSnippets + 1
      if snippetFiles.length == compiledSnippets
        writeDesignConfig design, dest


  # grunt task to compile all snippets
  grunt.registerMultiTask "lddesigns", "Compile snippets to livingdocs-engine template", ->
    #var config = grunt.config(this.name);
    options = @options()
    designs = @files
    countDesigns = designs.length
    processedDesigns = 0
    designs.forEach (file, i) ->
      src = designs[i].src[0]
      dest = designs[i].dest
      compileDesign src, dest, options


  # grunt task to compile specific design. executable only through console?
  grunt.registerTask "lddesign", "Compile a single design", ->
    design = grunt.option("design")
    options = grunt.config("lddesign.options")

    if design and design != true
    
      # compile a single 
      src = options.src + "/" + design
      dest = options.dest + "/" + design
      compileDesign src, dest, options
      
      # copy assets
      grunt.config "copy.design.files", [
        expand: true
        src: ["designs/" + design + "/assets/**"]
        dest: "public/"
      ]
      grunt.task.run "copy:design"
      
      # compile less
      grunt.config "recess.design.options.compile", true
      grunt.config "recess.design.files", [
        expand: true
        src: ["designs/" + design + "/css/style.less"]
        dest: "public/"
      ]
      grunt.task.run "recess:design"
      
    else
      grunt.fail.warn @name + " needs a designname as argument. e.g. grunt lddesign --design=watson\n"
