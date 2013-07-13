(function() { this.snippetCollections || (this.snippetCollections = {}); snippetCollections.upfrontIO = (function() { return {
  "snippets": {
    "clientList": {
      "namespace": "clientList",
      "name": "Client List",
      "html": "<ul class=\"clients\"><li><a href=\"http://www.20min.ch\" target=\"_blank\"><img src=\"http://www.upfront.io//assets/img/20min_logo.png\" alt=\"20min\"></a></li><li><a href=\"http://www.tageswoche.ch\" target=\"_blank\"><img src=\"http://www.upfront.io//assets/img/tageswoche.png\" alt=\"tageswoche\" width=\"200px\"></a></li><li><a href=\"http://www.feinheit.ch\" target=\"_blank\"><img src=\"http://www.upfront.io//assets/img/feinheit.png\" alt=\"Feinheit GmbH\"></a></li></ul>"
    },
    "footer": {
      "html": "<footer><address class=\"footer-address\" data-upfront-field=\"address\"><a href=\"mailto:contact@upfront.io\">contact@upfront.io</a><br>upfront GmbH<br>Lutherstrasse 32<br>8004 Zürich<br><a href=\"https://twitter.com/upfrontIO\" class=\"twitter-follow-button\" data-show-count=\"false\" data-size=\"large\">Follow us @upfrontIO</a></address></footer>"
    },
    "highlightedText": {
      "namespace": "highlightedText",
      "name": "Highlighted Text",
      "html": "<p class=\"highlight\" data-upfront-field=\"text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ea odio molestias recusandae vitae assumenda hic maxime nisi quidem architecto consequatur id amet alias voluptatibus ut! Voluptatem vitae distinctio optio.</p>"
    },
    "image": {
      "html": "<div data-upfront-field=\"image\">Drag your image here...</div>"
    },
    "imageWithCaption": {
      "namespace": "imageWithCaption",
      "name": "Image with Caption",
      "html": "<div class=\"thumbnail\"><span data-upfront-field=\"image\">Drag your image here...</span><div class=\"caption\"><em data-upfront-field=\"caption\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.</em></div></div>"
    },
    "link": {
      "html": "<a href=\"#\" data-upfront-field=\"link\">Link »</a>"
    },
    "linkedImage": {
      "namespace": "linkedImage",
      "name": "Linked Image",
      "html": "<a class=\"thumbnail\" href=\"#\" data-upfront-field=\"image\">Drag your image here...</a>"
    },
    "polaroidImage": {
      "namespace": "polaroidImage",
      "name": "Polaroid Image",
      "html": "<div class=\"img-polaroid\" data-upfront-field=\"image\">Drag your image here...</div>"
    },
    "seperator": {
      "html": "<hr>"
    },
    "text": {
      "html": "<p data-upfront-field=\"text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iste repellendus minus ducimus rem veritatis magnam quidem eveniet velit modi ab tenetur possimus laudantium aliquam ipsam excepturi dolor quas accusantium.</p>"
    },
    "title": {
      "html": "<div class=\"page-header\"><h1><span data-upfront-field=\"title\">Title</span> <span class=\"page-header-label label label-info\" data-upfront-field=\"label\">Label</span><br><small data-upfront-field=\"tagline\">Tagline</small></h1></div>"
    }
  },
  "config": {
    "namespace": "upfrontIO",
    "css": [
      "/test/manual/bootstrap/css/bootstrap.css",
      "/test/manual/css/bootstrap-adjust.css"
    ]
  }
};})();}).call(this);