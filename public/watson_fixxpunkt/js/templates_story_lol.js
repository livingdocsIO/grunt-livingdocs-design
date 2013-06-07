(function() {

	this.livingdocs = this.livingdocs || {};
	
	this.livingdocs.watson = {};
	
	this.livingdocs.watson.templates = (function() {
		return {
		
			textLayout: _.template("<div data-doc-container>\n</div>"),
			date: _.template("<p data-doc-editable=\"date\" class=\"date\">22. Mai 2013 15:45</p>"),
			upperLine: _.template("<h3>This is to(o) funny</h3>"),
			title: _.template("<h2 data-doc-editable=\"title\">6 mal fast richtig oder nur ein bisschen falsch</h2>"),
			lead: _.template("<p class=\"lead\" data-doc-editable=\"text\">\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n</p>"),
			author: _.template("<p data-doc-editable=\"text\" class=\"author\">\nLina Selmani\n</p>"),
			
			rightInsert: _.template("<div class=\"insert\">\n</div>"),
			fiftyFiftyInsert: _.template("<div class=\"insert fifty_fifty\">\n</div>"),
			sideInsert: _.template("<div class=\"insert side\">\n</div>"),
			maincolInsert: _.template("<div class=\"insert maincol\">\n</div>"),
			maincolBlockInsert: _.template("<div class=\"insert maincol block\">\n</div>"),
			fullInsert: _.template("<div class=\"insert full\"></div>"),
			fat_fullInsert: _.template("<div class=\"insert fat_full\"></div>"),
			
			sideInsertCommercial: _.template("<div class=\"insert side commercial\"></div>"),
			fullInsertCommercial: _.template("<div class=\"insert full commercial\"></div>"),
			fat_fullInsertCommercial: _.template("<div class=\"insert fat_full commercial hide_on_mobile\"></div>"),
			
			image_1: _.template("<img src=\"media/img/placeholderimg/bild_043.jpg\" />"),
			image_2: _.template("<img src=\"media/img/placeholderimg/bild_044.jpg\" />"),
			image_3: _.template("<img src=\"media/img/placeholderimg/bild_045.jpg\" />"),
			image_4: _.template("<img src=\"media/img/placeholderimg/bild_046.jpg\" />"),
			image_5: _.template("<img src=\"media/img/placeholderimg/bild_047.jpg\" />"),
			image_6: _.template("<img src=\"media/img/placeholderimg/bild_048.jpg\" />"),
			
			half_title_1: _.template("<p data-doc-editable=\"text\" class=\"half_title\">\n1. I would say “neigh” to that sandwich.\n</p>"),
			half_title_2: _.template("<p data-doc-editable=\"text\" class=\"half_title\">\n2. Via Finland.\n</p>"),
			half_title_3: _.template("<p data-doc-editable=\"text\" class=\"half_title\">\n3. A sidewalk of shame.\n</p>"),
			half_title_4: _.template("<p data-doc-editable=\"text\" class=\"half_title\">\n4. Via Ireland.\n</p>"),
			half_title_5: _.template("<p data-doc-editable=\"text\" class=\"half_title\">\n5. Ermahgerd! That’s a good deal!\n</p>"),
			half_title_6: _.template("<p data-doc-editable=\"text\" class=\"half_title\">\n6. I’m sure you’ve seen this guy’s ESL ads.\n</p>"),
			
			source_1: _.template("<p data-doc-editable=\"text\" class=\"source\">\nQuelle: Facebook\n</p>"),
			source_2: _.template("<p data-doc-editable=\"text\" class=\"source\">\nQuelle: arbroath.blogspot.de\n</p>"),
			source_3: _.template("<p data-doc-editable=\"text\" class=\"source\">\nQuelle: arbroath.blogspot.de\n</p>"),
			source_4: _.template("<p data-doc-editable=\"text\" class=\"source\">\nQuelle: arbroath.blogspot.de\n</p>"),
			source_5: _.template("<p data-doc-editable=\"text\" class=\"source\">\nQuelle: arbroath.blogspot.de\n</p>"),
			source_6: _.template("<p data-doc-editable=\"text\" class=\"source\">\nQuelle: arbroath.blogspot.de\n</p>"),
			
			image_commercial: _.template("<img src=\"media/img/placeholderwerbung/duennes_billboard.jpg\" />"),
			
			socialMediaBox: _.template("<div class='social_box hide_on_mobile'><img src='media/img/placeholderimg/bild_023.png' /></div>"),
			tagList: _.template("<div class='tags'>Artikel-Tags<ul><li class='ressort'><a href='#'>Kitsch</a></li><li><a href='#'>Funny</a></li><li><a href='#'>OMG</a></li><li><a href='#'>Rechtschreibung</a></li></ul></div>")
		};
	})();

}).call(this);
