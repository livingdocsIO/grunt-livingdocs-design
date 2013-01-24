(function() {

  this.livingdocs = this.livingdocs || {};

  this.livingdocs.bootstrap = {};

  this.livingdocs.bootstrap.templates = (function() {
    return {
      hero: _.template("<div class=\"hero-unit\">\n  <h1 data-upfront-field=\"title\">Titel</h1>\n  <p data-upfront-field=\"tagline\">Tagline</p>\n</div>"),
      title: _.template("<h1 data-upfront-field=\"title\">Titel</h1>"),
      subtitle: _.template("<h2 data-upfront-field=\"title\">Untertitel</h2>"),
      smallSubtitle: _.template("<h3 data-upfront-field=\"title\">Lorem ipsum dolorem</h3>"),
      text: _.template("<p data-upfront-field=\"text\">\n  Lorem ipsum dolorem. Lorem ipsum dolorem. Lorem ipsum dolorem\n</p>"),
      info: _.template("<div class=\"alert alert-info\" data-upfront-field=\"info\">\n  Lorem Ipsum dolorem\n</div>"),
      button: _.template("<button class=\"btn\" type=\"button\" data-upfront-field=\"button\">Button</button>"),
      largeButton: _.template("<button class=\"btn btn-block\" type=\"button\" data-upfront-field=\"button\">Large Button</button>")
    };
  })();

}).call(this);
