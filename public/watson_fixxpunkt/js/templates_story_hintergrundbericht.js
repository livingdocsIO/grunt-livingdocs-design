(function() {

	this.livingdocs = this.livingdocs || {};
	
	this.livingdocs.watson = {};
	
	this.livingdocs.watson.templates = (function() {
		return {
		
			fullWidthLayout: _.template("<div data-doc-container>\n</div>"),
			textLayout: _.template("<div data-doc-container>\n</div>"),
			headerImage: _.template("<img class='hide_on_mobile' src=\"media/img/placeholderimg/bild_018.jpg\" /><img class='hide_on_desktop show_on_mobile' src=\"media/img/placeholderimg/bild_056.jpg\" />"),
			date: _.template("<p data-doc-editable=\"date\" class=\"date\">22. Mai 2013 15:45</p>"),
			upperLine: _.template("<h3>Kongo</h3>"),
			title: _.template("<h2 data-doc-editable=\"title\" class=\"dont_hyphenate\">Afrikas krankes Herz</h2>"),
			leadWithAuthor: _.template("<p class=\"lead\" data-doc-editable=\"text\">\n<span class='author'>Daniel Huber</span> – Bürgerkrieg, Invasionen, Völkermord: Im kranken Herzen Afrikas mischen sich ethnische Konflikte unheilvoll mit den Folgen einer skrupellosen Kolonialpolitik.\n</p>"),
			text: _.template("<p data-doc-editable=\"text\">\nLorem ipsum dolor.\n</p>"),
			
			image: _.template("<img src=\"media/img/placeholderimg/bild_019.jpg\" />"),
			caption: _.template("<p data-doc-editable=\"text\" class=\"caption\">Mobutu, König von Zaire 3: Das Ende der Herrschaft</p>"),
			subtitle: _.template("<p data-doc-editable=\"title\" class=\"half_title\">Teile und hersche</p>"),
			quote: _.template("<p class=\"quote\" data-doc-editable=\"text\">\n«Es war eine Massenhysterie. Viele töteten aus Angst, selbst getötet zu werden. Die Menschen waren wie verwandelt.»\n</p>"),
			infoBox: _.template("<div class=\"infobox\">\n  <h4 data-doc-editable=\"title\">Völkermord in Ruanda</h4>\n  <p data-doc-editable=\"text\">\n  Als Völkermord in Ruanda werden umfangreiche Gewalttaten in Ruanda bezeichnet, die am 6. April 1994 begannen und bis Mitte Juli 1994 andauerten. Sie kosteten zirka 800.000 bis 1.000.000 Menschen das Leben, die niedrigsten Schätzungen gehen von mindestens 500.000 Toten aus. In annähernd 100 Tagen töteten Angehörige der Hutu-Mehrheit etwa 75 Prozent der in Ruanda lebenden Tutsi-Minderheit sowie moderate Hutu, die sich am Völkermord nicht beteiligten oder sich aktiv dagegen einsetzten.[1] Die Täter kamen aus den Reihen der ruandischen Armee, der Präsidentengarde, der Nationalpolizei (Gendarmerie) und der Verwaltung. Zudem spielten die Milizen der Impuzamugambi sowie vor allem der Interahamwe eine besonders aktive Rolle. Auch weite Teile der Hutu-Zivilbevölkerung beteiligten sich am Völkermord. Der Genozid ereignete sich im Kontext eines langjährigen Konflikts zwischen der damaligen ruandischen Regierung und der Rebellenbewegung Ruandische Patriotische Front (RPF).\n  </p>\n</div>"),
			source: _.template("<p data-doc-editable=\"text\" class=\"source\">Paul Rusesabagina, 1994 Direktor Hotel Des Mille Collines, Kigali,Ruanda</p>"),
			
			sideInsert: _.template("<div class=\"insert side\">\n</div>"),
			rightInsert: _.template("<div class=\"insert\">\n</div>"),
			maincolInsert: _.template("<div class=\"insert maincol\">\n</div>"),
			imageBar: _.template("<div class=\"insert full imagebar\">\n</div>"),
			
			video_1: _.template("<div class='video' onclick='playvideo($(this),\"VCJ1x_If8mw\" );'><img src=\"media/img/placeholderimg/bild_019.jpg\" /><img class=\"arrow\" src=\"media/img/main/arrows/arrow_transp_grey_play.png\" /></div>"),
			
			text_1: _.template("<p data-doc-editable=\"text\">Nicht zum ersten Mal rückt im Osten der riesigen Demokratischen Republik Kongo ein Warlord mit seiner Rebellenarmee vor, nicht zum ersten Mal fliehen Tausende vor den Schrecken des Bürgerkriegs.</p><p data-doc-editable=\"text\">Die Region der zentralafrikanischen Seen, wo die ostkongolesischen Provinzen Nord- und Süd-Kivu an Ruanda und Uganda grenzen, kommt nicht zur Ruhe. Hier, im kranken Herzen Afrikas, kam es immer wieder zu Konflikten, die schliesslich 1994 im Genozid in Ruanda gipfelten, dem in 100 Tagen 800 000 bis 1 000 000 Menschen zum Opfer fielen.</p>"),
			text_2: _.template("<p class=\"half_title\" data-doc-editable=\"text\">Teile und herrsche</p><p data-doc-editable=\"text\"><a href='#'>Der Völkermord in dem kleinen ostafrikanischen Land</a>, dessen Folgen wiederum den benachbarten Riesenstaat Kongo destabilisierten, war ethnisch begründet: Hutu brachten Tutsi um.</p><p data-doc-editable=\"text\">Die Feindschaft zwischen diesen beiden Gruppen, schon früher von den Kolonialherren geschürt, ist eines der wichtigsten Hindernisse für einen dauerhaften Frieden in der Region.</p><p data-doc-editable=\"text\">Die heutigen Staaten Ruanda und Burundi wurden 1899 Teil des kurzlebigen deutschen Kolonialreiches. Als Ruanda und Urundi wurden sie der Kolonie Deutsch-Ostafrika zugeschlagen. Im Ersten Weltkrieg eroberten belgische Truppen aus dem Kongo – der Kongo war zunächst Privatbesitz des belgischen Königs Leopold II., dann belgische Kolonie – die beiden Kleinstaaten, die nach dem Krieg als Völkerbundsmandat in belgischem Besitz blieben.</p><p data-doc-editable=\"text\">Schon die Deutschen hatten die einheimische Bevölkerung in «bantuide» Ackerbauern (Hutu) und «hamitische» Viehzüchter (Tutsi) unterschieden, wobei sie – wie danach die Belgier – die Minderheit der Tutsi als «rassisch höherwertig» einstuften und bevorzugten (die Belgier nannten die Tutsi «nègres aristocratiques»). So entwickelten die Hutu im Laufe der Zeit einen Minderwertigkeitskomplex gegenüber den Tutsi, der sich später auf fatale Weise auswirken sollte. Aus heutiger Sicht scheint es sich jedoch eher um unterschiedliche soziale Gruppen zu handeln, die danach gleichsam «ethnisch aufgeladen» wurden.</p><p class='half_title' data-doc-editable=\"text\">Die Hutu-Revolte</p><p data-doc-editable=\"text\">In Ruanda kam es, im Gegensatz zu Burundi, mit dem Aufkommen von Unabhängigkeitsbestrebungen zu einer Umkehrung der Verhältnisse: Da es vor allem die zuvor begünstigten und dadurch gebildeteren Tutsi waren, die antikoloniale Gelüste hegten, begannen die Belgier nun, die Hutu zu favorisieren. 1959 stachelten die Kolonialherrren die Hutu zu einer Revolte an, in deren Verlauf es zu den ersten grossen Massakern an Tutsi kam. 200 000 Tutsi flohen in die Nachbarländer, vor allem nach Burundi und in den östlichen Kongo, der ohnehin kulturell und verkehrstechnisch nach Ostafrika hin orientiert ist.</p>"),
			text_3: _.template("<p class=\"half_title\" data-doc-editable=\"text\">Minderheit in Kivu</p><p data-doc-editable=\"text\">Dort, in der Provinz Kivu, lebte schon vor der Kolonialzeit eine Minderheit von Immigranten aus Ruanda und Burundi. Sie wuchs während der belgischen Herrschaft auf nahezu zehn Prozent der kongolesischen Gesamtbevölkerung an, weil die Belgier Arbeiter aus Ruanda für die Plantagen importierten. Nach weiteren Fluchtbewegungen aus Ruanda bildet diese Gruppe heute nach Bakongo und Lumba die drittgrösste Ethnie im Kongo.</p><p class=\"half_title\" data-doc-editable=\"text\">Von Lumumba zu Mobutu</p><p data-doc-editable=\"text\"><a href='#'>1960 zogen die Belgier sich übereilt aus dem Kongo zurück</a>, den sie jahrzehntelang auf das Brutalste ausgebeutet hatten. Das Land versank in Chaos und Bürgerkrieg – wie von der ehemaligen Kolonialmacht geplant, die darauf hoffte, zur Hilfe gerufen zu werden. Belgier und Amerikaner intervenierten, um die wirtschaftliche Ausbeutung und die Westorientierung des rohstoffreichen Landes – Kautschuk, Kupfer, Diamanten – zu garantieren. Belgische Truppen besetzten 1961 die Kupferprovinz Katanga. Die USA veranlassten die Ermordung des ersten kongolesischen Ministerpräsidenten, Patrice Lumumba, und schliesslich die Machtübernahme durch Joseph Mobutu 1965.</p><p data-doc-editable=\"text\">Damit begann eine der längsten und schlimmsten Diktaturen Afrikas; Mobutu benannte Kongo in Zaire um und diente fortan als verlässlicher Statthalter für amerikanische, belgische und französische Interessen. Er präsidierte einem System der totalen Korruption und persönlichen Bereicherung, einer «Kleptokratie», in der die natürlichen Reichtümer des Landes in das privates Vermögen des Mobutu-Clans überführt wurden. Mobutus Lizenz zur Ausbeutung des Riesenlandes bestand in seinem strikten Antikommunismus.</p><p data-doc-editable=\"text\">Seit der Unabhängigkeit hatte die autochthone Bevölkerung im Osten des Kongo sezessionistische Bestrebungen verfolgt. Die aus Ruanda stammende Minderheit, die bei der seit jeher dort ansässigen Bevölkerung nicht beliebt war, stand diesen Bestrebungen kritisch gegenüber und verbündete sich deshalb mit Mobutu, also der Zentralmacht in Kinshasa. Diese Allianz brachte der Minderheit wirtschaftliche Vorteile ein, machte sie aber zusätzlich unbeliebt.</p>"),
			text_4: _.template("<p class=\"half_title\" data-doc-editable=\"text\">«Massakrieren, bevor man massakriert wird»</p><p data-doc-editable=\"text\">Der Genozid von 1994 in Ruanda erschütterte die gesamte Region. Er war eine Reaktion der Hutu auf die Bedrohung ihrer Dominanz durch die Angriffe von Tutsi-Rebellen der «Rwandan Patriotic Front» (RPF) aus Uganda. <a href='#'>Als am 6. April 1994 das Flugzeug mit den beiden Präsidenten von Ruanda und Burundi an Bord über der Hauptstadt Kigali abgeschossen wurde, griffen die extremistischen Hutu unter der Losung «Massakrieren, bevor man massakriert wird» die Tutsi und die gemässigten Hutu im Land an.</a> In Radiosendungen wurde zur Ermordung der Tutsi aufgerufen. Rund 100 Tage dauerte die Schlächterei; der Westen griff nicht ein, die UNO schaute zu.</p><p class=\"half_title\" data-doc-editable=\"text\">«Aktion Türkis»</p><p data-doc-editable=\"text\">Besonders die Rolle Frankreichs war wenig rühmlich: Frankreich hatte den Ausbau der ruandischen Armee organisiert und finanziert, insbesondere der Präsidentengarde, die dann eine führende Rolle beim Völkermord spielte. Frankreich lieferte sogar noch nach dem Beginn des Schlachtens Waffen an die Hutu und blockierte wochenlang jede Intervention der in Ruanda stationierten UNO-Truppe gegen den Genozid.</p><p data-doc-editable=\"text\">Als das Morden schon fast vorbei war und die von Uganda aus anrückende RPF die Kontrolle übernahm, übernahm Frankreich in der «Aktion Türkis» die Führung einer UNO-Truppe, die den vor der RPF fliehenden Hutu-Milizen einen Korridor in den Kongo offenhielt, wo ihnen Mobutu Unterschlupf bot.</p><p data-doc-editable=\"text\">Mit der Flucht von zuerst hunderttausenden von Tutsi und dann rund einer Million Hutu – darunter die Urheber des Völkermords – in den Kongo begann sich nun auch die bereits dort ansässige ruandische Minderheit entlang ethnischer Grenzen aufzuteilen.</p><p data-doc-editable=\"text\">Rund um Goma am Kivu-See entstanden riesige Flüchtlingslager, in denen die Hutu-Milizen sich neu formierten und schliesslich die Macht in der Region an sich rissen. Von Nord-Kivu aus griffen Hutu-Milizen nun mit sudanesischer Unterstützung das von der RPF unter Paul Kagame kontrollierte Ruanda an, während die Hutu-Milizen aus Süd-Kivu ihre Angriffe mit Unterstützung von Mobutu gegen Burundi richteten.</p>"),
			text_5: _.template("<p data-doc-editable=\"text\">Mobutus Stern indes war bereits am Sinken. Seine Allianz mit den Tutsi in der Kivu-Provinz war beendet und – viel wichtiger noch – die Unterstützung seiner korrupten Herrschaft durch die Amerikaner ging ihrem Ende entgegen. Nach dem Fall der Mauer hatte die Währung Antikommunismus ihren Wert verloren. Zudem unterstützte Mobutu den angolanischen Rebellenführer Jonas Savimbi, dessen Unita bei den USA in Ungnade gefallen war, und unterhielt gute Beziehungen zum islamistischen Regime in Khartum.</p><p data-doc-editable=\"text\"><a href='#'>Als sich nun die USA im Gegensatz zu Frankreich, das an Mobutu festhielt, mit Ruanda und Uganda verbündeten, waren dessen Stunden gezählt.</a></p><p data-doc-editable=\"text\">An der Spitze einer Tutsi-Rebellenarmee, die von Ruanda, Burundi und Uganda unterstützt wurde, fegte Laurent-Désiré Kabila 1997 Mobutus morsches Regime hinweg, während der todkranke Diktator im Ausland weilte. Die USA griffen den Rebellen logistisch unter die Arme – mit dem Sturz Mobutus ging zugleich der französische Einfluss in der Region zurück. Die Hutu-Milizen im Ost-Kongo wurden weitgehend vernichtet.</p>"),
			text_6: _.template("<p class=\"half_title\" data-doc-editable=\"text\">Kabilas Untergang</p><p data-doc-editable=\"text\">Der leichte Sieg muss Kabila zu Kopf gestiegen sein; in fataler Überschätzung seiner Machtbasis warf er die ruandischen Truppen aus dem Land, kündigte die Schürfrechte für amerikanische Konzerne auf und schmiedete ein Bündnis mit den Resten der Hutu-Milizen. Damit provozierte er den Schulterschluss der USA und Frankreichs und eine erneute Intervention Ruandas; 1998 eroberten die von Ruanda und Uganda unterstützten Rebellen Goma in Nord-Kivu. Der Osten des Riesenlandes blieb unter ruandischer Kontrolle, und nur die Intervention von Simbabwe, Angola, Tschad, Sudan und Namibia auf Seiten der Zentralregierung verhinderte Kabilas totale Niederlage. Der Krieg schwelte trotz eines Waffenstillstandsabkommens weiter, und im Januar 2001 fiel Kabila einem Attentat zum Opfer.</p><p class=\"half_title\" data-doc-editable=\"text\">Kabila junior ergreift die Macht</p><p data-doc-editable=\"text\">Unmittelbar nach der Ermordung seines Vaters übernahm Joseph Kabila die Amtsgeschäfte. Unter seiner Führung beruhigte sich die Lage in dem zerrissenen Land allmählich; und da Kabila junior einen westlich orientierten Kurs einschlug, wurde seine Regierung nunmehr von den USA und Belgien unterstützt. Ende 2002 schloss seine Regierung ein Friedensabkommen mit den Rebellen. Bis dahin waren diesem «Afrikanischen Weltkrieg» nach Schätzungen der UNO rund 2,5 Millionen Menschen zum Opfer gefallen.</p><p class=\"half_title\" data-doc-editable=\"text\">Teures Coltan</p><p data-doc-editable=\"text\">Kabila profitierte zudem davon, dass die Allianz von Uganda und Ruanda zerbrach: Die Ausbeutung der rohstoffreichen Provinz Kivu – hier gab es Diamanten, Gold, Kobalt, Kupfer und Edelhölzer – entzweite die ehemaligen Verbündeten. Vor allem aber nahm der Handel mit Coltan einen enormen Aufschwung. Ohne das extrem hitze- und säureresistente Metall funktioniert kein Handy. Mit dem Handy-Boom im Jahr 2000 stieg der Preis für Coltan zeitweise um das Zehnfache.</p><p class=\"half_title\" data-doc-editable=\"text\">Kein Frieden im Osten</p><p data-doc-editable=\"text\">Der ruandische Einfluss im Osten des Landes blieb allerdings nach wie vor erhalten. Für die dort ansässige Tutsi-Bevölkerung ist letzten Endes nur die ruandische Armee ein Garant für die Sicherheit vor Verfolgungen durch Hutu-Milizen. Insbesondere die «Demokratischen Kräfte zur Befreiung Ruandas» (FDLR), die Nachfolgeorganisation der Hutu-Völkermörder, bedroht die Tutsi nach wie vor.</p><p data-doc-editable=\"text\">Dies ist auch die Rechtfertigung für den Warlord Laurent Nkunda, mit seiner Rebellentruppe auf Goma zu marschieren: Die FDLR, behaupten Nkunda und die ruandische Regierung, werde von der kongolesischen Armee unterstützt.</p>"),
			
			quote_1: _.template("<p class='quote' data-doc-editable=\"text\">«Es war eine Massenhysterie. Viele töteten aus Angst, selbst getötet zu werden. Die Menschen waren wie verwandelt.»</p>"),
			quote_2: _.template("<p class='quote' data-doc-editable=\"text\">«Für die nächsten fünf Jahre wird es keine parteipolitischen Aktivitäten geben.»</p>"),
			
			source_1: _.template("<p class='source' data-doc-editable=\"text\">Paul Rusesabagina, 1994 Direktor Hotel Des Mille Collines, Kigali,Ruanda</p>"),
			source_2: _.template("<p class='source' data-doc-editable=\"text\">Mobutu Sese Seko, nach der Machtübernahme 1967</p>"),
			
			image_1: _.template("<img src=\"media/img/placeholderimg/bild_020.jpg\" />"),
			image_2: _.template("<img src=\"media/img/placeholderimg/bild_021.jpg\" />"),
			image_3: _.template("<img src=\"media/img/placeholderimg/bild_022.jpg\" />"),
			caption_2: _.template("<p data-doc-editable=\"text\" class=\"caption\">Flüchtlingslager Ruanda 1994</p>"),
			
			socialMediaBox: _.template("<div class='social_box hide_on_mobile'><img src='media/img/placeholderimg/bild_023.png' /></div>"),
			tagList: _.template("<div class='tags'>Artikel-Tags<ul><li class='ressort'><a href='#'>News</a></li><li class='ressort'><a href='#'>Geschichte</a></li><li><a href='#'>Afrika</a></li><li><a href='#'>Bürgerkrieg</a></li><li><a href='#'>Kolonialpolitik</a></li></ul></div>")
		
		};
	})();

}).call(this);
