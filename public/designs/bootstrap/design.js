(function() { this.snippetCollections || (this.snippetCollections = {}); snippetCollections.bootstrap = (function() { return {
  "snippets": {
    "button": {
      "name": "Button",
      "html": "<button class=\"btn\" type=\"button\" doc-editable=\"button\">Button</button>"
    },
    "column": {
      "name": "Single Centered Column",
      "html": "<div class=\"row-fluid\"><div class=\"span8 offset2\" doc-container=\"\"></div></div>"
    },
    "hero": {
      "name": "Hero",
      "html": "<div class=\"hero-unit\"><h1 doc-editable=\"title\">Titel</h1><p doc-editable=\"tagline\">Tagline</p></div>"
    },
    "image": {
      "name": "Image",
      "html": "<div class=\"img-polaroid\" doc-editable=\"image\">Drag your image here...</div>"
    },
    "info": {
      "name": "Info",
      "html": "<div class=\"alert alert-info\" doc-editable=\"info\">Lorem Ipsum dolorem</div>"
    },
    "largeButton": {
      "namespace": "largeButton",
      "name": "Large Button",
      "html": "<div><hr></div>"
    },
    "mainAndSidebar": {
      "namespace": "mainAndSidebar",
      "name": "Main and Sidebar Columns",
      "html": "<div class=\"row-fluid\"><div class=\"span8\" doc-container=\"main\"></div><div class=\"span4\" doc-container=\"sidebar\"></div></div>"
    },
    "seperator": {
      "name": "Seperator",
      "html": "<div><hr></div>"
    },
    "smallSubtitle": {
      "namespace": "smallSubtitle",
      "name": "Paragraph Title",
      "html": "<h3 doc-editable=\"title\">Lorem ipsum dolorem</h3>"
    },
    "subtitle": {
      "name": "Subtitle",
      "html": "<h2 doc-editable=\"title\">Subtitle</h2>"
    },
    "text": {
      "name": "Text",
      "html": "<p doc-editable=\"text\">Lorem ipsum dolorem. Lorem ipsum dolorem. Lorem ipsum dolorem</p>"
    },
    "title": {
      "name": "Title",
      "html": "<h1 doc-editable=\"title\">Titel</h1>"
    }
  },
  "config": {
    "namespace": "bootstrap",
    "css": [
      "/test/manual/bootstrap/css/bootstrap.css",
      "/test/manual/css/bootstrap-adjust.css"
    ]
  }
};})();}).call(this);