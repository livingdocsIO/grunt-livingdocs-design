(function() {

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
      rightInsert: _.template("<div class=\"insert\">\n</div>"),
      imageBar: _.template("<div class=\"insert full imagebar\">\n</div>"),
      sideInsert: _.template("<div class=\"insert side\">\n</div>"),
      socialMediaBox: _.template("<div class=\"social_box hide_on_mobile\">\n  <img src=\"https://www.fixxtest.ch/showcase/media/img/placeholderimg/bild_023.png\">\n</div>")
    };
  })();

}).call(this);
