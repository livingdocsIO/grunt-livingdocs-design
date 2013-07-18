(function() {

	this.livingdocs = this.livingdocs || {};
	
	this.livingdocs.watson = {};
	
	this.livingdocs.watson.templates = (function() {
		return {
		
			fullWidthLayout: _.template("<div data-doc-container>\n</div>"),
			textLayout: _.template("<div data-doc-container>\n</div>"),
			headerImage: _.template("<img class='hide_on_mobile' src=\"media/img/placeholderimg/bild_015.jpg\" /><img class='hide_on_desktop show_on_mobile' src=\"media/img/placeholderimg/bild_016.jpg\" />"),
			headerCaption: _.template("<p class='caption'>Unter der Kreuzung muss sich ein gewaltiger Hohlraum befunden haben. Das einsickernde Wasser bewirkte dann einen Erdrutsch.<br/>Quelle: Keystone/EPA/Luis Soto</p>"),
			date: _.template("<p data-doc-editable=\"date\" class=\"date\">22. Mai 2013 15:45</p>"),
			upperLine: _.template("<h3 class='uppertitle'>Grube in Guatemala</h3>"),
			title: _.template("<h2 data-doc-editable=\"title\" class='maintitle'>«Agatha» reisst ein Loch in die Stadt</h2>"),
			lead: _.template("<p class=\"lead\" data-doc-editable=\"text\">\nNaturphänomen in Guatemala Stadt: In der Stadt klafft nach einem Sturm ein riesiges Loch. Die Bilder.\n</p>"),
			author: _.template("<p data-doc-editable=\"text\" class=\"author\">\nFranz Ermel\n</p>"),
			
			rightInsert: _.template("<div class=\"insert\">\n</div>"),
			fiftyFiftyInsert: _.template("<div class=\"insert fifty_fifty\">\n</div>"),
			sideInsert: _.template("<div class=\"insert side\">\n</div>"),
			maincolInsert: _.template("<div class=\"insert maincol\">\n</div>"),
			maincolBlockInsert: _.template("<div class=\"insert maincol block\">\n</div>"),
			fullInsert: _.template("<div class=\"insert full\"></div>"),
			sideInsertCommercial: _.template("<div class=\"insert side commercial\"></div>"),
			commercialRectangle: _.template("<img src=\"media/img/placeholderwerbung/rectangle_story.jpg\" />"),
			
			text_1: _.template("<p data-doc-editable=\"text\">30 Meter tief, 20 Meter im Durchmesser und beinahe rund ist das Loch, das sich am Samstag wahrscheinlich als Folge von Tropensturm «Agatha» in Guatemala-Stadt auftat. Noch sind sich Geologen nicht einig, wie genau es zu dem Loch kam, welches ein dreistöckiges Gebäude mit einer Textilfabrik und eine Kreuzung verschluckte. Von einer Unterspülung des Erdreichs ist die Rede. </p>"),
			
			image_1: _.template("<img src=\"media/img/placeholderimg/bild_017.jpg\" class='stretch_to_fit' />"),
			image_2: _.template("<img src=\"media/img/placeholderimg/bild_018.jpg\" class='stretch_to_fit' />"),
			
			caption_1: _.template("<p class='caption' data-doc-editable=\"text\">In Guatemala-Stadt fiel an diesem Tag so viel Regen wie normalerweise in einem ganzen Monat: 10,8 Zentimeter.</p>"),
			caption_2: _.template("<p class='caption' data-doc-editable=\"text\">Das Loch bildete sich im Stadtteil Ciudad Nueva. Ein dreistöckiges Haus verschwand darin.</p>"),
			caption_3: _.template("<p class='caption' data-doc-editable=\"text\">How Scary Sinkholes Are Formed</p>"),
			
			source_1: _.template("<p class='source' data-doc-editable=\"text\">Quelle: Keystone/EPA/Luis Soto</p>"),
			source_2: _.template("<p class='source' data-doc-editable=\"text\">Quelle: Keystone/EPA/Ulises Rodriguez</p>"),
			
			video_1: _.template("<div class='widget video' onclick='playvideo($(this),\"tQvv8YFCGsY\" );'><img src=\"media/img/placeholderimg/bild_019.jpg\" /><img class=\"arrow\" src=\"media/img/main/arrows/arrow_transp_grey_play.png\" /></div>"),
			
			map_1: _.template("<div class='widget map'><iframe frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=de&amp;geocode=&amp;q=guatemala+ciudad+nueva&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=57.292148,69.873047&amp;ie=UTF8&amp;hq=&amp;hnear=Ciudad+Nueva,+Mazatenango,+Suchitep%C3%A9quez,+Guatemala&amp;ll=14.535734,-91.48366&amp;spn=0.034687,0.034118&amp;t=m&amp;z=14&amp;output=embed'></iframe><br /><small><a href='https://www.google.com/maps?f=q&amp;source=embed&amp;hl=de&amp;geocode=&amp;q=guatemala+ciudad+nueva&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=57.292148,69.873047&amp;ie=UTF8&amp;hq=&amp;hnear=Ciudad+Nueva,+Mazatenango,+Suchitep%C3%A9quez,+Guatemala&amp;ll=14.535734,-91.48366&amp;spn=0.034687,0.034118&amp;t=m&amp;z=14' style='color:#0000FF;text-align:left'>Größere Kartenansicht</a></small></div>"),
			
			socialMediaBox: _.template("<div class='widget social_box hide_on_mobile'><img src='media/img/placeholderimg/bild_010.png' /></div>"),
			tagList: _.template("<div class='widget tags'><div class='title'>Artikel-Tags</div><ul><li class='ressort'><a href='#'>Kitsch</a></li><li><a href='#'>Funny</a></li><li><a href='#'>OMG</a></li><li><a href='#'>Rechtschreibung</a></li></ul></div>"),
			badgeList: _.template("<div class='widget badges'><div class='title'>Ihre Reaktion?</div><ul><li><a href='#'><span class='name'>LOL</span><span class='number'><span class='arrow'></span>7</span></a></li><li><a href='#'><span class='name'>Hot</span><span class='number'><span class='arrow'></span>9</span></a></li><li class='top'><a href='#'><span class='name'>Kitsch</span><span class='number'><span class='arrow'></span>437</span></a></li></ul><ul class='negative'><li><a href='#'><span class='name'>Fail</span><span class='number'><span class='arrow'></span>34</span></a></li><li><a href='#'><span class='name'>WTF</span><span class='number'><span class='arrow'></span>1</span></a></li><li><a href='#'><span class='name'>OMG</span><span class='number'><span class='arrow'></span>3</span></a></li></ul></div>")
		};
	})();

}).call(this);
