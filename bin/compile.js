#!/usr/bin/env node
var argv = require('optimist')
    .usage('Compile a design which consists of html and less files.\nUsage: $0 --options')
    .demand('d')
    .alias('d', 'design')
    .describe('d', 'Compile a design')
    //.demand('p')
    .alias('p', 'path')
    .describe('p', 'Output path of template file with filename')
    .argv;


/*
* Node modules Requirements
*/
var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var htmlmin = require('html-minifier');
var designName = argv.design;

// Check existence of all directories and files
var designDirectory = path.join(__dirname, '../designs', designName);
var requiredResources = ['', 'css', 'snippets', 'config.json'];
requiredResources.forEach(function(resource) {
  if (!fs.existsSync(path.join(designDirectory, resource))) {
    console.log('The directory or file "' + path.join(designDirectory, resource) + '" does not exist');
    process.exit(0);
  }
});


function processHtml(html) {
 return htmlmin.minify(html, { collapseWhitespace: true });
}

// Read snippets from directory, and store them in string variable
var snippetFiles = fs.readdirSync(path.join(designDirectory, 'snippets'));

var design = {};
design.config = JSON.parse(fs.readFileSync(designDirectory + '/config.json', 'utf8'));
if(!design.config.namespace) { console.log('config.json - namespace is required');}
design.snippets = {};
var namespace = design.config.namespace;
var compiled = 0;

var templateBegin = "(function() { this.snippetCollections || (this.snippetCollections = {}); snippetCollections." + design.config.namespace + " = (function() { return ";
var templateEnd = ";})();}).call(this);";

// iterate through file array and process the snippets, store them in templates.js file
snippetFiles.forEach(function(snippet) {
  fs.readFile(path.join(designDirectory, 'snippets',snippet), {encoding: 'utf8'},function(err, data) {
    if(err) throw err;

    var snippetName = snippet.replace('.html', '');

    // load file in jQuery object to read json & html
    $ = cheerio.load(data);

    /*
     * load config of a snippet into snippets object, load minified html into snippet
     */
    design.snippets[snippetName] = JSON.parse($("script[type=ld-conf]").html()) || {};
    $('script[type=ld-conf]').remove();
    design.snippets[snippetName]["html"] = processHtml($.html());


    // Check if everything is compiled, close the templates file and save it;
    compiled = compiled + 1;
    if(snippetFiles.length == compiled) {
      var fileData = templateBegin + JSON.stringify(design, null, 2)  + templateEnd;
      var output = argv.path || path.join(__dirname, '../public/js/', namespace + '.js');
      fs.writeFile(output, fileData, 'utf8', function(err) {
        if(err) throw(err);
        console.log('design "' + namespace + '" successfully compiled');
      });
    }

  })
});
