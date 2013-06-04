(function() {
  this.livingdocs = this.livingdocs || {};

  this.livingdocs.az = {};

  this.livingdocs.az.templates = (function() {
    return {
      title: _.template("<h1 data-upfront-field='title'>Article Title</h1>"),
      filet: _.template("<p class='filet' data-upfront-field='text'>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.\n</p>"),
      text: _.template("<p data-upfront-field='text'>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.\n</p>"),
      linkedImage: _.template("<a href='#' data-upfront-field='image'>\n  <img src='http://placehold.it/416x80' />\n</a>"),
      recommendation: _.template("<div class='keyword'>Keyword</div>\n<a href='#' data-upfront-field='image'>\n  <img src='http://placehold.it/70x42' />\n</a>\n<h2>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit \n</h2>"),
      imageWithCaption: _.template("<div class=\"thumbnail\">\n  <span data-upfront-field=\"image\">\n    <img src='http://placehold.it/605x350' />\n  </span>\n  <div class=\"caption\" data-upfront-field=\"caption\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.\n  </div>\n</div>"),
      subnavigation: _.template("<div id='subnavigation' class='navigation'>\n  <ul id='subnavbar'>\n    <li>\n      <a href='#' data-upfront-field='link'>First Subnav</a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>Subnav</a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>Subnav</a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>Subnav</a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>Subnav</a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>Subnav</a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>Subnav</a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>Subnav</a>\n    </li>\n  </ul>\n</div>"),
      navigation: _.template("<div id='topnavigation' class='navigation'>\n  <ul id='topnavbar'>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        First Topnav\n      </a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        Topnav\n      </a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        Topnav\n      </a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        Topnav\n      </a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        Topnav\n      </a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        Topnav\n      </a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        Topnav\n      </a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        Topnav\n      </a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        Topnav\n      </a>\n    </li>\n    <li>\n      <a href='#' data-upfront-field='link'>\n        Topnav\n      </a>\n    </li>\n  </ul>\n</div>"),
      footer: _.template("<div id='footer'>\n  <h1 data-upfront-field='title'>Footer Title</h1>\n  <ul class=\"sitemap\">\n    <li>\n      <a href=\"\" class=\"sitemap-level1\">NavPoint</a>\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a>\n    </li>\n    <li>\n      <a href=\"\" class=\"sitemap-level1\">NavPoint</a>\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n    </li>\n    <li>\n      <a href=\"\" class=\"sitemap-level1\">NavPoint</a>\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n      <a href=\"\">Link</a> |\n    </li>\n    \n  </ul>\n</div>")
    };
  })();

  this.livingdocs = this.livingdocs || {};

  this.livingdocs.bootstrap = {};

  this.livingdocs.bootstrap.templates = (function() {
    return {
      column: _.template("<div class=\"row-fluid\">\n  <div class=\"span8 offset2\" data-doc-container></div>\n</div>"),
      mainAndSidebar: _.template("<div class=\"row-fluid\">\n  <div class=\"span8\" data-doc-container=\"main\"></div>\n  <div class=\"span4\" data-doc-container=\"sidebar\"></div>\n</div>"),
      hero: _.template("<div class=\"hero-unit\">\n  <h1 data-doc-editable=\"title\">Titel</h1>\n  <p data-doc-editable=\"tagline\">Tagline</p>\n</div>"),
      title: _.template("<h1 data-doc-editable=\"title\">Titel</h1>"),
      subtitle: _.template("<h2 data-doc-editable=\"title\">Subtitle</h2>"),
      smallSubtitle: _.template("<h3 data-doc-editable=\"title\">Lorem ipsum dolorem</h3>"),
      text: _.template("<p data-doc-editable=\"text\">\n  Lorem ipsum dolorem. Lorem ipsum dolorem. Lorem ipsum dolorem\n</p>"),
      info: _.template("<div class=\"alert alert-info\" data-doc-editable=\"info\">\n  Lorem Ipsum dolorem\n</div>"),
      button: _.template("<button class=\"btn\" type=\"button\" data-doc-editable=\"button\">Button</button>"),
      largeButton: _.template("<button class=\"btn btn-block\" type=\"button\" data-doc-editable=\"button\">Large Button</button>"),
      image: _.template("<div class=\"img-polaroid\" data-doc-editable=\"image\">\n  Drag your image here...\n</div>", {
        separator: "<div>\n  <hr>\n</div>"
      })
    };
  })();

  this.livingdocs = this.livingdocs || {};

  this.livingdocs.watson = {};

  this.livingdocs.watson.templates = (function() {
    return {
      fullWidthLayout: _.template("<div class=\"wrapper\">\n  <div class=\"fat_wrapper\">\n    <div class=\"region full_story x_full_desktop x_full_tablet font_l\" data-doc-container>\n    </div>\n  </div>\n</div>"),
      textLayout: _.template("<div class=\"wrapper\">\n  <div class=\"fat_wrapper\">\n    <div class=\"region full_story x_full_desktop x_full_tablet font_l\">\n      <div class=\"text\" data-doc-container>\n      </div>\n    </div>\n  </div>\n</div>"),
      headerImage: _.template("<img class=\"illu\" src=\"https://www.fixxtest.ch/showcase/media/img/placeholderimg/bild_018.jpg\" />"),
      image: _.template("<img src=\"https://www.fixxtest.ch/showcase/media/img/placeholderimg/bild_019.jpg\" />"),
      caption: _.template("<p data-doc-editable=\"text\" class=\"caption\">Mobutu, König von Zaire 3: Das Ende der Herrschaft</p>"),
      text: _.template("<p data-doc-editable=\"text\">\n  Nicht zum ersten Mal rückt im Osten der riesigen Demokratischen Republik Kongo ein Warlord mit seiner Rebellenarmee vor, nicht zum ersten Mal fliehen Tausende vor den Schrecken des Bürgerkriegs.\n</p>"),
      lead: _.template("<p class=\"lead\" data-doc-editable=\"text\">\n  Bürgerkrieg, Invasionen, Völkermord: Im kranken Herzen Afrikas mischen sich ethnische Konflikte unheilvoll mit den Folgen einer skrupellosen Kolonialpolitik.\n</p>"),
      title: _.template("<h2 data-doc-editable=\"title\">Afrikas krankes Herz</h2>"),
      subtitle: _.template("<p data-doc-editable=\"title\" class=\"half_title\">Teile und hersche</p>"),
      quote: _.template("<p class=\"quote\" data-doc-editable=\"text\">\n«Es war eine Massenhysterie. Viele töteten aus Angst, selbst getötet zu werden. Die Menschen waren wie verwandelt.»\n</p>"),
      infoBox: _.template("<div class=\"infobox\">\n  <h4 data-doc-editable=\"title\">Völkermord in Ruanda</h4>\n  <p data-doc-editable=\"text\">\n  Als Völkermord in Ruanda werden umfangreiche Gewalttaten in Ruanda bezeichnet, die am 6. April 1994 begannen und bis Mitte Juli 1994 andauerten. Sie kosteten zirka 800.000 bis 1.000.000 Menschen das Leben, die niedrigsten Schätzungen gehen von mindestens 500.000 Toten aus. In annähernd 100 Tagen töteten Angehörige der Hutu-Mehrheit etwa 75 Prozent der in Ruanda lebenden Tutsi-Minderheit sowie moderate Hutu, die sich am Völkermord nicht beteiligten oder sich aktiv dagegen einsetzten.[1] Die Täter kamen aus den Reihen der ruandischen Armee, der Präsidentengarde, der Nationalpolizei (Gendarmerie) und der Verwaltung. Zudem spielten die Milizen der Impuzamugambi sowie vor allem der Interahamwe eine besonders aktive Rolle. Auch weite Teile der Hutu-Zivilbevölkerung beteiligten sich am Völkermord. Der Genozid ereignete sich im Kontext eines langjährigen Konflikts zwischen der damaligen ruandischen Regierung und der Rebellenbewegung Ruandische Patriotische Front (RPF).\n  </p>\n</div>"),
      author: _.template("<p data-doc-editable=\"text\" class=\"author\">\n  Daniel Huber\n</p>"),
      date: _.template("<p data-doc-editable=\"date\" class=\"date\">22. Mai 2013 15:45</p>"),
      source: _.template("<p data-doc-editable=\"text\" class=\"source\">Paul Rusesabagina, 1994 Direktor Hotel Des Mille Collines, Kigali,Ruanda</p>"),
      rightInsert: _.template("<div class=\"insert\" data-doc-container>\n</div>"),
      imageBar: _.template("<div class=\"insert full imagebar\" data-doc-container>\n</div>"),
      sideInsert: _.template("<div class=\"insert side\" data-doc-container>\n</div>"),
      socialMediaBox: _.template("<div class=\"social_box hide_on_mobile\">\n  <img src=\"https://www.fixxtest.ch/showcase/media/img/placeholderimg/bild_023.png\">\n</div>")
    };
  })();

  this.livingdocs = this.livingdocs || {};

  this.livingdocs.upfrontIO = {};

  this.livingdocs.upfrontIO.templates = (function() {
    return {
      title: _.template("<div class=\"page-header\">\n  <h1>\n    <span data-upfront-field=\"title\">Title</span>\n    <span class=\"page-header-label label label-info\" data-upfront-field=\"label\">Label</span>\n    <br/>\n    <small data-upfront-field=\"tagline\">Tagline</small>\n  </h1>\n</div>"),
      text: _.template("<p data-upfront-field=\"text\">\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iste repellendus minus ducimus rem veritatis magnam quidem eveniet velit modi ab tenetur possimus laudantium aliquam ipsam excepturi dolor quas accusantium.\n</p>"),
      link: _.template("<a href=\"#\" data-upfront-field=\"link\">Link »</a>"),
      highlightedText: _.template("<p class=\"highlight\" data-upfront-field=\"text\">\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ea odio molestias recusandae vitae assumenda hic maxime nisi quidem architecto consequatur id amet alias voluptatibus ut! Voluptatem vitae distinctio optio.\n</p>"),
      image: _.template("<div data-upfront-field=\"image\">Drag your image here...</div>"),
      polaroidImage: _.template("<div class=\"img-polaroid\" data-upfront-field=\"image\">\n  Drag your image here...\n</div>"),
      linkedImage: _.template("<a class=\"thumbnail\" href=\"#\" data-upfront-field=\"image\">\n  Drag your image here...\n</a>"),
      imageWithCaption: _.template("<div class=\"thumbnail\">\n  <span data-upfront-field=\"image\">\n    Drag your image here...\n  </span>\n  <div class=\"caption\">\n    <em data-upfront-field=\"caption\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.\n    </em>\n  </div>\n</div>"),
      separator: _.template("<hr>"),
      footer: _.template("<footer>\n  <address class=\"footer-address\" data-upfront-field=\"address\">\n    <a href=\"mailto:contact@upfront.io\">contact@upfront.io</a>\n    <br/>\n    upfront GmbH<br/>\n    Lutherstrasse 32<br/>\n    8004 Zürich<br/>\n    <a href=\"https://twitter.com/upfrontIO\" class=\"twitter-follow-button\" data-show-count=\"false\" data-size=\"large\">Follow us @upfrontIO</a>\n\n\n  </address>\n</footer>"),
      clientList: _.template("<ul class=\"clients\">\n  <li>\n    <a href=\"http://www.20min.ch\" target=\"_blank\">\n      <img src=\"http://www.upfront.io//assets/img/20min_logo.png\" alt=\"20min\">\n    </a>\n  </li>  \n  <li>\n    <a href=\"http://www.tageswoche.ch\" target=\"_blank\"> \n      <img src=\"http://www.upfront.io//assets/img/tageswoche.png\" alt=\"tageswoche\" width=\"200px\">\n    </a>\n  </li> \n  <li>\n    <a href=\"http://www.feinheit.ch\" target=\"_blank\"> \n      <img src=\"http://www.upfront.io//assets/img/feinheit.png\" alt=\"Feinheit GmbH\">\n    </a>\n  </li> \n</ul>")
    };
  })();

}).call(this);
