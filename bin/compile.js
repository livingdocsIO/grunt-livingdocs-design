#!/usr/bin/env node
var argv = require('optimist')
    .usage('Compile a design which consists of html and less files.\nUsage: $0 --options')
    .demand('d')
    .alias('d', 'design')
    .describe('d', 'Compile a design')
    .argv;


/*
* Node modules Requirements
*/
var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');



// Check existence of desired design
var designDirectory = path.join(__dirname, '../designs', argv.design);
if (!fs.existsSync(designDirectory)) {
  console.log('The design "' + argv.design + '" does not exist');
  process.exit(0);
}

var snippetsDirectory = designDirectory + '/snippets'
if (!fs.existsSync(snippetsDirectory)) {
  console.log('The directory "snippets" inside the design "' + argv.design + '" does not exist');
  process.exit(0);
}


var snippets = fs.readdirSync(snippetsDirectory);



snippets.forEach(function(snippet) {
  fs.readFile(snippetsDirectory + '/' + snippet, {encoding: 'utf8'},function(err, data) {
    $ = cheerio.load(data);
    var config = JSON.parse($("#config").html());
    
    // Config
    if(config) {
      console.log(config);
    }
    
    // Data
    $('#config').remove();
    console.log($.html());
    
    
  })
})
