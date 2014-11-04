path = require('path')
htmlmin = require('html-minifier')
file = require('./file')

exports.toCamelCase = toCamelCase = (string) ->
  string.replace /^([A-Z])|[\s-_](\w)/g, (match, p1, p2, offset) ->
    return p2.toUpperCase() if p2
    p1.toLowerCase()


exports.filenameToTemplatename = (string) ->
  strings = toCamelCase(string).replace('.html', '').split('/')
  strings[strings.length - 1]


exports.minifyHtml = (html, options, templateName, ee) ->
  if options?.minify
    try
      htmlmin.minify(html, options.minify)
    catch err
      warning = ">> Template \"#{templateName}\": HTML minify error\n #{err}\n"
      if ee
        ee.emit('warn', warning)
      else
        console.warn(warning)

      return '<div class="error minify" style="color: red">Error while minifying: Template "#{templateName}"</div>'

  else
    html.trim()
