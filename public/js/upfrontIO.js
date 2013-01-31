(function() {

  this.livingdocs = this.livingdocs || {};

  this.livingdocs.upfrontIO = {};

  this.livingdocs.upfrontIO.templates = (function() {
    return {
      title: _.template("<div class=\"page-header\">\n  <h1>\n    <span data-upfront-field=\"title\">Title</span>\n    <span class=\"page-header-label label label-info\" data-upfront-field=\"label\">Label</span>\n    <br/>\n    <small data-upfront-field=\"tagline\">Tagline</small>\n  </h1>\n</div>"),
      text: _.template("<p data-upfront-field=\"text\">\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iste repellendus minus ducimus rem veritatis magnam quidem eveniet velit modi ab tenetur possimus laudantium aliquam ipsam excepturi dolor quas accusantium.\n</p>"),
      link: _.template("<a href=\"#\" data-upfront-field=\"link\">Link »</a>"),
      highlightedText: _.template("<p class=\"highlight\">\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ea odio molestias recusandae vitae assumenda hic maxime nisi quidem architecto consequatur id amet alias voluptatibus ut! Voluptatem vitae distinctio optio.\n</p>"),
      image: _.template("<img src=\"http://www.upfront.io/assets/logo/logo-1.png\" width=\"344\" height=\"91\" alt=\"upfront\" />"),
      polaroidImage: _.template("<div class=\"img-polaroid\" data-upfront-field=\"image\">\n  Drag your image here...\n</div>"),
      linkedImage: _.template("<a class=\"thumbnail\" href=\"#\">\n  <img src=\"http://www.upfront.io//assets/img/politnetz_parlament.png\" />\n</a>"),
      imageWithCaption: _.template("<div class=\"thumbnail\">\n  <img src=\"http://upfront.io/assets/img/team_at_award.png\" />\n  <div class=\"caption\">\n    <em>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.\n    </em>\n  </div>\n</div>"),
      separator: _.template("<hr>"),
      footer: _.template("<footer>\n  <address class=\"footer-address\">\n    <a href=\"mailto:contact@upfront.io\">contact@upfront.io</a>\n    <br/>\n    upfront GmbH<br/>\n    Lutherstrasse 32<br/>\n    8004 Zürich<br/>\n    <a href=\"https://twitter.com/upfrontIO\" class=\"twitter-follow-button\" data-show-count=\"false\" data-size=\"large\">Follos @upfrontIO</a>\n\n\n  </address>\n</footer>"),
      clientList: _.template("<ul class=\"clients\">\n  <li>\n    <a href=\"http://www.20min.ch\" target=\"_blank\">\n      <img src=\"http://www.upfront.io//assets/img/20min_logo.png\" alt=\"20min\">\n    </a>\n  </li>  \n  <li>\n    <a href=\"http://www.tageswoche.ch\" target=\"_blank\"> \n      <img src=\"http://www.upfront.io//assets/img/tageswoche.png\" alt=\"tageswoche\" width=\"200px\">\n    </a>\n  </li> \n  <li>\n    <a href=\"http://www.feinheit.ch\" target=\"_blank\"> \n      <img src=\"http://www.upfront.io//assets/img/feinheit.png\" alt=\"Feinheit GmbH\">\n    </a>\n  </li> \n</ul>")
    };
  })();

}).call(this);
