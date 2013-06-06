(function() {

	this.livingdocs = this.livingdocs || {};
	
	this.livingdocs.watson = {};
	
	this.livingdocs.watson.templates = (function() {
		return {
		
			fullWidthLayout: _.template("<div data-doc-container>\n</div>"),
			textLayout: _.template("<div data-doc-container>\n</div>"),
			headerImage: _.template("<img src=\"media/img/placeholderimg/bild_039.jpg\" />"),
			headerCaption: _.template("<p class='caption'>Unter der Kreuzung muss sich ein gewaltiger Hohlraum befunden haben. Das einsickernde Wasser bewirkte dann einen Erdrutsch.<br/>Quelle: Keystone/EPA/Luis Soto</p>"),
			date: _.template("<p data-doc-editable=\"date\" class=\"date\">22. Mai 2013 15:45</p>"),
			upperLine: _.template("<h3>Grube in Guatemala</h3>"),
			title: _.template("<h2 data-doc-editable=\"title\">«Agatha» reisst ein Loch in die Stadt</h2>"),
			lead: _.template("<p class=\"lead\" data-doc-editable=\"text\">\nNaturphänomen in Guatemala Stadt: In der Stadt klafft nach einem Sturm ein riesiges Loch. Die Bilder.\n</p>"),
			author: _.template("<p data-doc-editable=\"text\" class=\"author\">\nFranz Ermel\n</p>"),
			
			rightInsert: _.template("<div class=\"insert\">\n</div>"),
			sideInsert: _.template("<div class=\"insert side\">\n</div>"),
			maincolInsert: _.template("<div class=\"insert maincol\">\n</div>"),
			maincolBlockInsert: _.template("<div class=\"insert maincol block\">\n</div>"),
			fullInsert: _.template("<div class=\"insert full\"></div>"),
			sideInsertCommercial: _.template("<div class=\"insert side commercial\"></div>"),
			commercialRectangle: _.template("<img src=\"media/img/placeholderwerbung/rectangle_story.jpg\" />"),
			
			text_1: _.template("<p data-doc-editable=\"text\">30 Meter tief, 20 Meter im Durchmesser und beinahe rund ist das Loch, das sich am Samstag wahrscheinlich als Folge von Tropensturm «Agatha» in Guatemala-Stadt auftat. Noch sind sich Geologen nicht einig, wie genau es zu dem Loch kam, welches ein dreistöckiges Gebäude mit einer Textilfabrik und eine Kreuzung verschluckte. Von einer Unterspülung des Erdreichs ist die Rede. </p>"),
			
			image_1: _.template("<img src=\"media/img/placeholderimg/bild_040.jpg\" />"),
			image_2: _.template("<img src=\"media/img/placeholderimg/bild_041.jpg\" />"),
			
			caption_1: _.template("<p class='caption'>In Guatemala-Stadt fiel an diesem Tag so viel Regen wie normalerweise in einem ganzen Monat: 10,8 Zentimeter.<br/>Quelle: Keystone/EPA/Luis Soto</p>"),
			caption_2: _.template("<p class='caption'>Das Loch bildete sich im Stadtteil Ciudad Nueva. Ein dreistöckiges Haus verschwand darin.<br/>Quelle: Keystone/EPA/Ulises Rodriguez</p>"),
			caption_3: _.template("<p class='caption'>How Scary Sinkholes Are Formed</p>"),
			
			
			video_1: _.template("<div class='video' onclick='playvideo($(this),\"tQvv8YFCGsY\" );'><img src=\"media/img/placeholderimg/bild_042.jpg\" /><img class=\"arrow\" src=\"media/img/main/arrows/arrow_transp_grey_forw.png\" /></div>"),
			
			map_1: _.template("<div class='map'><iframe frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=de&amp;geocode=&amp;q=guatemala+ciudad+nueva&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=57.292148,69.873047&amp;ie=UTF8&amp;hq=&amp;hnear=Ciudad+Nueva,+Mazatenango,+Suchitep%C3%A9quez,+Guatemala&amp;ll=14.535734,-91.48366&amp;spn=0.034687,0.034118&amp;t=m&amp;z=14&amp;output=embed'></iframe><br /><small><a href='https://www.google.com/maps?f=q&amp;source=embed&amp;hl=de&amp;geocode=&amp;q=guatemala+ciudad+nueva&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=57.292148,69.873047&amp;ie=UTF8&amp;hq=&amp;hnear=Ciudad+Nueva,+Mazatenango,+Suchitep%C3%A9quez,+Guatemala&amp;ll=14.535734,-91.48366&amp;spn=0.034687,0.034118&amp;t=m&amp;z=14' style='color:#0000FF;text-align:left'>Größere Kartenansicht</a></small></div>"),
			
			socialMediaBox: _.template("<div class='social_box hide_on_mobile'><img src='media/img/placeholderimg/bild_023.png' /></div>"),
			tagList: _.template("<div class='tags'>Artikel-Tags<ul><li class='ressort'><a href='#'>Ausland</a></li><li><a href='#'>Agatha</a></li><li><a href='#'>Guatemala</a></li><li><a href='#'>Naturphänomen</a></li></ul></div>")
		};
	})();

}).call(this);
