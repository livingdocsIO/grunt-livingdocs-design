# livingdocs design compile task
#
# this file contains two tasks. lddesigns and lddesign
# the task lddesigns can be used as normal multiTask

# lddesigns
# ---------
# this task only processes the config and templates. the css and assets should be handled in other tasks


# lddesign
# --------
# lddesign is an internal task that is used to process single designs. This task is called from lddesigns.
# It processes the whole design. So first the config and templates are written to a file.
# After that it copies all assets to the public/designs/designname directory and compiles the style.less file
# use it the following way
#
# grunt lddesign --design=designname

"use strict"
path = require("path")
cheerio = require("cheerio")
htmlmin = require("html-minifier")


String::toCamelCase = ->
  @replace /^([A-Z])|[\s-_](\w)/g, (match, p1, p2, offset) ->
    return p2.toUpperCase() if p2
    p1.toLowerCase()


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
      
      
  # write the config and templates to disk
  writeDesignConfig = (design, destination) ->
    templateBegin = '(function() { this.design || (this.design = {}); design.' + design.config.namespace + ' = (function() { return '
    templateEnd = ';})();}).call(this);'
    fileData = templateBegin + JSON.stringify(design, null, 2) + templateEnd
    grunt.file.write destination + '/design.js', fileData,
      encoding: 'utf8'

    grunt.log.writeln('Design "%s" compiled.', destination)
  
  
  # process the config and templates, create design object
  compileDesign = (src, dest, files, options) ->
    designFolder = options.design
  
    #
    # Check existence of all directories and files that are required
    #
    requiredResources = [
      name: ''
      type: 'design'
    ,
      name: options.templatesDirectory
      type: 'directory'
    ,
      name: 'config.json'
      type: 'file'
    ]
    
    requiredResources.forEach (resource) ->
      unless grunt.file.exists(src, resource.name)
        grunt.fail.warn('The ' + resource.type + ' "' + path.join(src, resource.name) + '" does not exist.')


    #
    # create design object for templates, groups and configuration
    #
    design =
      templates: {}
      config: grunt.file.readJSON(path.join(src, 'config.json'),
        encoding: 'utf8'
      )

    design.config.groups = {}

    # a design config file must contain a namespace, cancel grunt task
    unless design.config.namespace
      grunt.fail.fatal('The design ' + designFolder + ' contains a config file which has no namespace.')
    

    # warn if a design contains no templates
    unless files.length
      grunt.fail.warn('The design "' + designFolder + '" has no templates')
      writeDesignConfig(design, dest)
    

    #
    # iterate through file array and process the templates, store them in templates.js file
    #
    compiledTemplates = 0
    files.forEach (snippet) ->

      snippetPath = snippet.replace(src + '/' + options.templatesDirectory + '/', '').split('/')
      snippetName = snippetPath[snippetPath.length - 1].replace('.html', '')
      snippetName = snippetName.toCamelCase()

      if(snippetPath.length > 2)
        grunt.fail.warn('Design "' + designFolder + '", Snippet "' + snippetPath.join('/') + '": Templates can only be only be nested in one directory.')


      addSnippetToGroup = (group, snippet) ->
        groupConfigFile = path.join(src, options.templatesDirectory, group, 'config.json')

        # create group if it doesn't exist
        unless design.config.groups[group]
          if grunt.file.exists(groupConfigFile)
            design.config.groups[group] = grunt.file.readJSON(groupConfigFile, { encoding: 'utf8' })
          else
            design.config.groups[group] = {name: group}
        
        # add snippet to group if templates array already exists 
        if design.config.groups[group]['templates']
          design.config.groups[group]['templates'][design.config.groups[group]['templates'].length] = snippetName

        # create snippet array if it doesn't exist 
        else
          design.config.groups[group]['templates'] = [snippetName]


      if snippetPath.length > 1
        addSnippetToGroup(snippetPath[0], snippetPath[snippetPath.length - 1])
      
      else
        addSnippetToGroup('others', snippetPath[0])
     

      data = grunt.file.read(snippet,
        encoding: 'utf8'
      )
      
      # load file in jQuery object to read json & html
      $ = cheerio.load(data)
      
      # create snippet object using config
      snippetObject = JSON.parse($(options.configurationElement).html()) || {}
      
      # store snippet config in design
      if(design.templates[snippetName])
        grunt.fail.warn('The template "' + snippetName + '" is not unique.')

      design.templates[snippetName] = snippetObject
      
      # push snippet html into snippet object, remove config and minify the html
      $(options.configurationElement).remove()
      design.templates[snippetName]['html'] = processHtml($.html(), options.minify, { design: design.config.namespace, snippet: snippetName })
      
      # Check if everything is compiled, close the templates file and save it;
      compiledTemplates += 1
      if files.length == compiledTemplates

        # write design to file
        writeDesignConfig(design, dest)


  # grunt task to compile all templates
  grunt.registerMultiTask 'lddesigns', 'Compile templates to livingdocs-engine template', ->
    options = @options()
    designs = @files
    
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
        src: [src + '/' + options.templatesDirectory + '/**/*.html']
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
    
    templates = []
    files.forEach (file, i) ->
      templates[i] = file.src[0]
    
    compileDesign(src, dest, templates, options)
