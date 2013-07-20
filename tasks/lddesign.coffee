# livingdocs design compile task
#
# this file contains two tasks. lddesigns and lddesign
# the task lddesigns can be used as normal multiTask

# lddesigns
# ---------
# this task only processes the config and snippets. the css and assets should be handled in other tasks


# lddesign
# --------
# lddesign is an internal task that is used to process single designs. This task is called from lddesigns.
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

  
  # does jsdoc work in coffeescript?
  # @param {string} html
  # @param {boolean} minify
  # @param {object} info
  processHtml = (html, minify, info) ->
    if minify
      try
        htmlmin.minify html,
          collapseWhitespace: true
      catch err
        grunt.log.writeln('\n>> Design "%s", snippet "%s": HTML minify error\n %s\n'.yellow, info.design, info.snippet, err)
        return '<div class="error minify" style="color: red">Error while minifying: Design "' + info.design + '", Snippet "' + info.snippet + '"</div>'
        
    else
      html
      
      
  # write the config and snippets to disk
  writeDesignConfig = (design, destination) ->
    templateBegin = '(function() { this.design || (this.design = {}); design.' + design.config.namespace + ' = (function() { return '
    templateEnd = ';})();}).call(this);'
    fileData = templateBegin + JSON.stringify(design, null, 2) + templateEnd
    grunt.file.write destination + '/design.js', fileData,
      encoding: 'utf8'

    grunt.log.writeln('Design "%s" compiled.', destination)
  
  
  # process the config and snippets, create design object
  compileDesign = (src, dest, files, options) ->
    designFolder = options.design
  

    # Check existence of all directories and files
    requiredResources = [
      name: ''
      type: 'design'
    ,
      name: options.snippetsDirectory
      type: 'directory'
    ,
      name: 'config.json'
      type: 'file'
    ]
    
    requiredResources.forEach (resource) ->
      unless grunt.file.exists(src, resource.name)
        grunt.fail.warn('The ' + resource.type + ' "' + path.join(src, resource.name) + '" does not exist.')


   
    # Read snippets from directory, and store them in string variable
    design =
      snippets: {}
      groups: {}
      config: grunt.file.readJSON(path.join(src, 'config.json'),
        encoding: 'utf8'
      )

    unless design.config.namespace
      grunt.fail.fatal('The design ' + designFolder + ' contains a config file which has no namespace.')
    
    # warn if a design contains no snippets
    unless files.length
      grunt.fail.warn('The design "' + designFolder + '" has no snippets')
      writeDesignConfig(design, dest)
    


    # iterate through file array and process the snippets, store them in templates.js file
    compiledSnippets = 0
    files.forEach (snippet) ->

      snippetPath = snippet.replace(src + '/' + options.snippetsDirectory + '/', '').split('/')
      snippetFileName = snippetPath[snippetPath.length - 1].replace('.html', '')

      if(snippetPath.length > 2)
        grunt.fail.warn('Design "' + designFolder + '", Snippet "' + snippetPath.join('/') + '": Snippets can only be only be nested in one directory.')


      # Add a snippet to a group if it's in a subdirectory
      addSnippetToGroup = (group, snippet) ->
        groupConfigFile = path.join(src, options.snippetsDirectory, group, 'config.json')
        unless design.groups[group]
          if grunt.file.exists(groupConfigFile)
            design.groups[group] = grunt.file.readJSON(groupConfigFile, { encoding: 'utf8' })
          else
            design.groups[group] = {name: group}
        
        if design.groups[group]['snippets']
          design.groups[group]['snippets'][design.groups[group]['snippets'].length] = snippetFileName
        else
          design.groups[group]['snippets'] = [snippetFileName]


      if snippetPath.length > 1
        addSnippetToGroup(snippetPath[0], snippetPath[1])
     

      data = grunt.file.read(snippet,
        encoding: 'utf8'
      )
      
      # load file in jQuery object to read json & html
      $ = cheerio.load(data)
      
      # create snippet object using config
      snippetObject = JSON.parse($(options.configurationElement).html()) || {}
      
      # Disallow '-' in snippetFileName
      unless snippetFileName.indexOf('-') == -1
        grunt.fail.warn('Snippet "' + snippet + '" in the design "' + designFolder + '" contains the character "-" which is not allowed in a snippet namespace')
      
      # store snippet config in design
      design.snippets[snippetFileName] = snippetObject
      
      # push snippet html into snippet object, remove config and minify the html
      $(options.configurationElement).remove()
      design.snippets[snippetFileName]['html'] = processHtml($.html(), options.minify, { design: design.config.namespace, snippet: snippetFileName })
      
      # Check if everything is compiled, close the templates file and save it;
      compiledSnippets += 1
      if files.length == compiledSnippets       

        # write design to file
        writeDesignConfig(design, dest)


  # grunt task to compile all snippets
  grunt.registerMultiTask 'lddesigns', 'Compile snippets to livingdocs-engine template', ->

    grunt.config.requires('snippetsDirectory', 'configurationElement')

    options = @options()
    designs = @files
    countDesigns = designs.length || 0
    
    designs.forEach (file, i) ->
      src = designs[i].src[0]
      dest = designs[i].dest
      design = src.split('/').pop()

      option = grunt.util._.clone(options)
      option.design = design
      option.src = src
      option.dest = dest

      # create task to process the design
      grunt.config('lddesign.design_' + design + '.files', [
        expand: true
        src: [src + '/' + options.snippetsDirectory + '/**/*.html']
        dest: dest
      ])
      grunt.config('lddesign.design_' + design + '.options', option)
      grunt.log.writeln('Design "' + design + '" prepared for processing.')

      #run task
      grunt.task.run('lddesign:design_' + design)
      


  # grunt task to compile specific design. executable only through console?
  grunt.registerMultiTask 'lddesign', 'Compile a single design', ->
    options = @options()
    src = options.src
    dest = options.dest
    files = @files
    
    snippets = []
    files.forEach (file, i) ->
      snippets[i] = file.src[0]
    
    compileDesign(src, dest, snippets, options)
