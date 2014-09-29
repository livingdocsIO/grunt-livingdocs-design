color = require('color')
path = require('path')
htmlmin = require("html-minifier")
pd = require("pretty-data").pd
file = require('./file')

exports.toCamelCase = toCamelCase = (string) ->
  string.replace /^([A-Z])|[\s-_](\w)/g, (match, p1, p2, offset) ->
    return p2.toUpperCase() if p2
    p1.toLowerCase()


exports.filenameToTemplatename = (string) ->
  strings = toCamelCase(string).replace('.html', '').split('/')
  strings[strings.length - 1]


exports.minifyHtml = (html, options, templateName) ->
  if options?.minify
    try
      htmlmin.minify(html, options.minifyOptions)
    catch err
      console.log(">> Template \"#{templateName}\": HTML minify error\n #{err}\n".yellow)
      return '<div class="error minify" style="color: red">Error while minifying: Template "#{templateName}"</div>'

  else
    html
    # .replace(/\s+/g, ' ')
    .trim()


exports.minifyXml = (str, options) ->
  try
    pd.xmlmin str, options
  catch err
    console.log(">> Template \"#{templateName}\": HTML minify error\n #{err}\n".yellow)
    return '<div class="error minify" style="color: red">Error while minifying: Template "#{templateName}"</div>'
