(function() {

	this.livingdocs = this.livingdocs || {};
	
	this.livingdocs.watson = {};
	
	this.livingdocs.watson.templates = (function() {
		return {
		
			fullWidthLayout: _.template("<div data-doc-container>\n</div>"),
			textLayout: _.template("<div data-doc-container>\n</div>"),
			headerImage: _.template("<img class='hide_on_mobile' src=\"media/img/placeholderimg/bild_049.jpg\" /><img class='hide_on_desktop show_on_mobile' src=\"media/img/placeholderimg/bild_057.jpg\" />"),
			headerCaption: _.template("<p class='caption'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br/>Quelle: Keystone/EPA/Luis Soto</p>"),
			date: _.template("<p data-doc-editable=\"date\" class=\"date\">22. Mai 2013 15:45</p>"),
			upperLine: _.template("<h3>Mauch vs. Morin</h3>"),
			title: _.template("<h2 data-doc-editable=\"title\">«Es braucht endlich einen Ständeratssitz für die Städte»</h2>"),
			lead: _.template("<p class=\"lead\" data-doc-editable=\"text\">\nHochhausquartiere, Kantonsfusionen, Ständeratssitze für die grossen Städte: Die Präsidenten von Zürich und Basel - Corine Mauch und Guy Morin, entwerfen im Doppelinterview die Schweiz von morgen.\n</p>"),
			author: _.template("<p data-doc-editable=\"text\" class=\"author\">\nFranz Ermel\n</p>"),
			
			rightInsert: _.template("<div class=\"insert\">\n</div>"),
			fiftyFiftyInsert: _.template("<div class=\"insert fifty_fifty\">\n</div>"),
			sideInsert: _.template("<div class=\"insert side\">\n</div>"),
			maincolInsert: _.template("<div class=\"insert maincol\">\n</div>"),
			maincolBlockInsert: _.template("<div class=\"insert maincol block\">\n</div>"),
			maincolShiftInsert: _.template("<div class=\"insert maincol shift\">\n</div>"),
			fullInsert: _.template("<div class=\"insert full\"></div>"),
			sideInsertCommercial: _.template("<div class=\"insert side commercial\"></div>"),
			commercialRectangle: _.template("<img src=\"media/img/placeholderwerbung/rectangle_story.jpg\" />"),
			
			text_1: _.template("<p data-doc-editable=\"text\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.</p>"),
			
			half_title_1: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Sie werben zu zweit für das neue Raumplanungsgesetz, über das wir am 3. März abstimmen. Eine ungewöhnliche Konstellation.</p>"),
			text_2: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Guy Morin:</strong> Basel und Zürich haben ein grosses Interesse daran, der Schweiz zu zeigen, dass sie Lösungen für aktuelle Probleme parat haben. Die Städte sind die Innovationszentren der Schweiz, der Entwicklungsmotor.</p>"),
			
			half_title_2: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Haben Sie keine Bedenken, dass Ihr Einsatz auf dem Land arrogant wirken könnte?</p>"),
			text_3: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Corine Mauch:</strong> In der Bevölkerung ist das Unbehagen gegen die bisherige, wenig griffige Raumplanung weit verbreitet. Das hat auf nationaler Ebene das Ja zur Zweitwohnungs-Initiative gezeigt und auf kantonaler Ebene die Kulturlandinitiative. Verdichtetes Bauen ist wichtig. Und die Städte machen dies schon vor.</p>"),
			text_4: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Morin:</strong> Wir können der Bevölkerung zeigen, dass verdichtetes Bauen in den Städten zu einer Verbesserung der Lebensqualität führt.</p>"),
			
			half_title_3: _.template("<p data-doc-editable=\"text\" class=\"half_title\">In Zürich sind die Mieten doch heute schon nicht mehr bezahlbar und werden mit dem neuen Raumplanungsgesetz wohl noch höher.</p>"),
			text_5: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Mauch:</strong> Im privaten Sektor sind die Mieten teilweise sehr hoch. In Zürich haben wir aber auch die einmalige Situation, dass 25 Prozent des Mietwohnungsbestands gemeinnütziger Wohnungsbau sind. Und hier gibt es preiswerte Angebote. Die Frage lautet: Kommen auch die richtigen Leute zu diesen Wohnungen?</p>"),
			text_6: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Morin:</strong> In Basel wollen wir den Anteil an gemeinnützigem Wohnungsbau erhöhen. Hier können wir viel von Zürich lernen. Zürich kann aber auch viel von Basel lernen, etwa in den Bereichen Energie und Verkehr…</p>"),
			
			half_title_4: _.template("<p data-doc-editable=\"text\" class=\"half_title\">… bleiben wir beim Raumplanungsgesetz: Es ist doch absehbar, dass die Mieten bei einem Ja steigen werden.</p>"),
			text_7: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Morin:</strong> Die Alternative wäre, dass die Landschaft zersiedelt würde. Dies wiederum hätte eine verstärkte Mobilität zur Folge. Der Weg zum Arbeitsplatz würde länger, was zu überfüllten Zügen und Staus auf der Autobahn führen würde. Das Raumplanungsgesetz ist auch eine ökologische Lösung. </p>"),
			
			half_title_5: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Verdichtetes Bauen ist doch mit den heutigen Gesetzen schon möglich. </p>"),
			text_8: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Mauch:</strong> Ja, die Städte machen das ja auch schon. In Zürich gibt es keine Baulandreserven mehr. Auch die Industriebrachen sind mittlerweile verplant und verbaut. Wir sind jetzt damit konfrontiert, wie wir die Zentren weiterentwickeln wollen. Eine gute Stadtentwicklung führt dazu, dass die Lebensqualität auch bei verdichtetem Bauen bestehen bleibt. Die Plakate der Gegner mit dem Slogan «Horror-Mieten auf engstem Raum» sind deshalb Unsinn und absurd. Die Qualität und nicht einfach die Quantität muss im Vordergrund stehen.</p>"),
			
			text_9: _.template("<p data-doc-editable=\"text\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.</p>"),
			
			half_title_6: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Viele Städter wollen gar nicht so verdichtet wohnen. Gerade in Basel sind Hochhaus-Projekte immer wieder umstritten.</p>"),
			text_10: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Morin:</strong> Stadtentwicklung kann man nur mit der Bevölkerung machen. Dazu gehören auch Investitionen in Grünflächen und das Wohnumfeld, um die Lebensqualität zu verbessern. Dann wird die Bevölkerung die Projekte auch unterstützen. Mit der Stadtrandentwicklung Ost zum Beispiel planen wir Hochhäuser mitten in einem Grüngürtel.</p>"),
			text_11: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Mauch:</strong> Die Bevölkerung ist nicht per se gegen Verdichtung. Sie ist skeptisch, hat Ängste, ja. Für qualitätsvolle, differenzierte Projekte ist sie aber durchaus zu haben. Das haben in Zürich zahlreiche Sanierungen von Genossenschaftsbauten gezeigt. Es geht darum, die Leute bei diesen Prozessen mitzunehmen. </p>"),
			
			half_title_7: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Und doch hat man das Gefühl, Stadtplaner reden an der Bevölkerung vorbei. </p>"),
			text_12: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Morin:</strong> Vor zehn Jahren hatten wir die Stadtflucht. Heute erleben wir den Gegentrend. Viele Menschen wollen wieder in der Stadt leben. Wegen der kurzen Wege zum Arbeitsplatz, zum Einkaufen, zur Freizeit. Wegen der Kultur. Damit ist die Stadt gefordert und wir müssen dem Bedürfnis nach genügend Wohnraum gerecht werden. Die Grünflächen auf dem Land wollen wir als Erholungsgebiet erhalten. Die Städte sind schon lange nicht mehr die Problemzonen der Schweiz.</p>"),
			text_13: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Mauch:</strong> Ihre These wird Tag für Tag widerlegt. 2011 sind über 4500 zusätzliche Leute nach Zürich gezogen. Die Leute sind nicht scharf auf Zersiedlung, sie wollen abends nicht im Stau stehen.</p>"),
			
			half_title_8: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Erhoffen sich die Städte durch verdichtetes Bauen mehr Steuereinnahmen?</p>"),
			text_14: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Morin:</strong> Für die Stadt und ihre Bewohner ist es nur von Vorteil, wenn das Steuersubstrat wächst. Mehrinvestitionen, die der Lebensqualität von uns allen zugutekommen, sind immer willkommen.</p>"),
			
			half_title_9: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Das wird aber so nicht deklariert.</p>"),
			text_15: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Morin:</strong> Es ist ein Ziel. Es darf aber nicht sein, dass wir nur für die Reichen bauen. Wir bauen für die ganze Bevölkerung, für alle Bedürfnisse, in allen Grössen- und Preislagen. Die Alteingesessenen sollen nicht das Gefühl haben, sie würden verdrängt. Das ist auch das Ziel unseres neuen Wohnfördergesetzes.</p>"),
			text_16: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Mauch:</strong> Mit dem Wachstum brauchen wir mehr öffentlichen Verkehr, Schulhäuser, ausserfamiliäre Kinderbetreuung. Das kostet alles. Wir brauchen die Mehreinnahmen. Sie sind aber nicht der Hauptgrund für unser Engagement.</p>"),
			
			half_title_10: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Heute arbeiten viele Leute in der Stadt und bezahlen ihre Steuern aber auf dem Land. Sollen die Leute nicht besser dort Steuern zahlen, wo sie arbeiten?</p>"),
			text_17: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Mauch:</strong> Nein, die Steuern sind in der Schweiz immer gekoppelt an die demokratische Mitsprache und wir haben den Finanzausgleich. Ich finde dieses System gut. Die Zentrumslasten der Städte sind aber noch nicht in ausreichendem Mass abgegolten. Hier haben wir ein massives Ungleichgewicht. Das muss behoben werden.</p>"),
			text_18: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Morin:</strong> Gebietsreformen bringen mehr. Gingen die Kantone Baselland und Basel-Stadt zusammen, würden die Landschäftler auch mehr an die Zentrumslasten zahlen. Von den 35 000 Grenzgängern aus Frankreich und Deutschland beziehen wir heute eine Quellensteuer, von den 45 000 Baselbieter Pendlern erhalten wir nichts. Deshalb pushen wir auch die Fusion von Baselland und Basel-Stadt. Zürich könnte ja mit Zug fusionieren (lacht).</p>"),
			text_19: _.template("<p data-doc-editable=\"text\" class=\"statement\"><strong>Mauch:</strong> (lacht) Das ist dein Vorteil. Du bist sowohl Stadt- als auch Regierungspräsident.</p>"),
			
			text_20: _.template("<p data-doc-editable=\"text\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.</p>"),
			
			image_1: _.template("<img src=\"media/img/placeholderimg/bild_050.jpg\" />"),
			image_2: _.template("<img src=\"media/img/placeholderimg/bild_051.jpg\" />"),
			
			caption_1: _.template("<p data-doc-editable=\"text\" class=\"caption\">\nLorem ipsum dolor\n</p>"),
			caption_2: _.template("<p data-doc-editable=\"text\" class=\"caption\">\nLorem ipsum dolor\n</p>"),
			
			source_1: _.template("<p data-doc-editable=\"text\" class=\"source\">\nFoto: Keystone\n</p>"),
			source_2: _.template("<p data-doc-editable=\"text\" class=\"source\">\nFoto: Keystone\n</p>"),
			
			quote_1: _.template("<p class='quote' data-doc-editable=\"text\">«Mit dem Wachstum brauchen wir mehr öffentlichen Verkehr, Schulhäuser, ausserfamiliäre Kinderbetreuung.»</p>"),
			quote_2: _.template("<p class='quote' data-doc-editable=\"text\">«Stadtentwicklung kann man nur mit der Bevölkerung machen. Dazu gehören auch Investitionen in Grünflächen und das Wohnumfeld, um die Lebensqualität zu verbessern.»</p>"),
			
			source_3: _.template("<p class='source' data-doc-editable=\"text\">Corinne Mauch</p>"),
			source_4: _.template("<p class='source' data-doc-editable=\"text\">Guy Morin</p>"),
			
			socialMediaBox: _.template("<div class='social_box hide_on_mobile'><img src='media/img/placeholderimg/bild_023.png' /></div>"),
			tagList: _.template("<div class='tags'>Artikel-Tags<ul><li class='ressort'><a href='#'>Zürich</a></li><li><a href='#'>Corinne Mauch</a></li><li><a href='#'>Stadtentwicklung</a></li><li><a href='#'>Zersiedelung</a></li><li><a href='#'>Interview</a></li></ul></div>"),
			badgeList: _.template("<div class='badges'>Ihre Reaktion?<ul><li><a href='#'><span class='name'>LOL</span><span class='number'><span class='arrow'></span>7</span></a></li><li><a href='#'><span class='name'>Cute</span><span class='number'><span class='arrow'></span>23</span></a></li><li><a href='#'><span class='name'>Love</span><span class='number'><span class='arrow'></span>2</span></a></li><li><a href='#'><span class='name'>Hot</span><span class='number'><span class='arrow'></span>9</span></a></li><li class='top'><a href='#'><span class='name'>Kitsch</span><span class='number'><span class='arrow'></span>437</span></a></li></ul><ul class='negative'><li><a href='#'><span class='name'>Fail</span><span class='number'><span class='arrow'></span>34</span></a></li><li><a href='#'><span class='name'>WTF</span><span class='number'><span class='arrow'></span>1</span></a></li><li><a href='#'><span class='name'>OMG</span><span class='number'><span class='arrow'></span>3</span></a></li><li><a href='#'><span class='name'>Sad</span><span class='number'><span class='arrow'></span>21</span></a></li><li><a href='#'><span class='name'>Trash</span><span class='number'><span class='arrow'></span>11</span></a></li></ul></div>")
		};
	})();

}).call(this);
