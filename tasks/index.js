var Design = require('livingdocs-design-manager');

module.exports = function(grunt) {
  // grunt task to compile a specific design
  grunt.registerMultiTask('lddesign', 'Compile a single design', function() {
    var design = this.files[0];
    var done = this.async();
    var options = this.options();
    options.src = design.src[0];
    options.dest = design.dest;

    var error = null;
    // Initialize design
    Design.build(options)
    .on('debug', function(debug) { grunt.log.debug(debug); })
    .on('warn', function(warning) { grunt.fail.warn(warning); })
    .on('error', function(err) { error = err; })
    .on('end', function() {
      if (error) {
        grunt.log.error(error);
        done(false);
      }
      else {
        grunt.log.write("Design compiled...");
        grunt.log.ok();
        done();
      }
    });
  });
}
