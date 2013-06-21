(function() {

	this.livingdocs = this.livingdocs || {};
	
	this.livingdocs.watson = {};
	
	this.livingdocs.watson.templates = (function() {
		return {
		
			fullWidthLayout: _.template("<div data-doc-container>\n</div>"),
			textLayout: _.template("<div data-doc-container>\n</div>"),
			headerImage: _.template("<img  class='hide_on_mobile'  src=\"media/img/placeholderimg/bild_036.jpg\" /><img class='hide_on_desktop show_on_mobile' src=\"media/img/placeholderimg/bild_054.jpg\" />"),
			headerCaption: _.template("<p class='caption'>Thuns Marco Schneuwly, nicht im Bild, trifft zum 1:0<br/>Quelle: Keystone</p>"),
			date: _.template("<p data-doc-editable=\"date\" class=\"date\">22. Mai 2013 15:45</p>"),
			upperLine: _.template("<h3>Super League</h3>"),
			title: _.template("<h2 data-doc-editable=\"title\">Thuner lassen dem FC&nbsp;St.&nbsp;Gallen keine Chance</h2>"),
			lead: _.template("<p class=\"lead\" data-doc-editable=\"text\">\nDer FC Thun schlägt den FC St. Gallen in der 33. Runde der Super Leage am Ende verdient mit 3:0. Für die Ostschweizer ist es ein Rückschlag im Kampf um Platz 2.\n</p>"),
			author: _.template("<p data-doc-editable=\"text\" class=\"author\">\nReto Fehr\n</p>"),
			
			rightInsert: _.template("<div class=\"insert\">\n</div>"),
			maincolInsert: _.template("<div class=\"insert maincol\">\n</div>"),
			maincolBlockInsert: _.template("<div class=\"insert maincol block\">\n</div>"),
			sideInsertCommercial: _.template("<div class=\"insert side commercial\"></div>"),
			fat_fullInsert: _.template("<div class=\"insert fat_full\">\n</div>"),
			commercialRectangle: _.template("<img src=\"media/img/placeholderwerbung/rectangle_story.jpg\" />"),
			
			image_1: _.template("<img style='width:100%;' src='media/img/placeholderimg/bild_037.jpg' />"),
		
			text_1: _.template("<p data-doc-editable=\"text\">Mit zwei Toren in der Startviertelstunde dämpfte Thun die keimenden Champions-League-Hoffnungen des FC St. Gallen. Aus klarer Abseitsposition brachte Marco Schneuwly Thun in der 4. Minute mit dem ersten Angriff in Führung. Der Goalgetter der Berner Oberländer markierte seinen 12. Saisontreffer.</p><p data-doc-editable=\"text\">In der 12. Minute fiel bereits die Vorentscheidung. Die in der Abwehr desorientierten St. Galler wurden über die rechte Flanke erneut erwischt. Andreas Wittwer erhöhte auf Zuspiel Schneuwlys und einem Ablenker eines St. Gallers auf 2:0. Zuvor hatte Torhüter Daniel Lopar, der eine noch höhere Niederlage verhinderte, zweimal hervorragend gegen Wittwer und Michael Siegfried. In den ersten Sekunden der Nachspielzeit reüssierte Siegfried mit dem 3:0 dennoch.</p>"),
			text_2: _.template("<p class=\"half_title\" data-doc-editable=\"text\">Thun rückt Sion auf die Pelle</p><p data-doc-editable=\"text\">Thun rückte mit dem 12. Saisonerfolg bis auf einen Zähler ans das darbende Sion und bis auf zwei Punkte an Zürich heran. Beide Teams haben allerdings eine Partie weniger ausgetragen. St. Gallen, das sich einen Europa-League-Platz gesichert hat, wurde im Kampf um Platz zwei zurück gebunden. Die Ostschweizer, die in Thun gar nicht auf Touren kamen, weisen nun wieder vier Zähler Rückstand auf die Grasshoppers auf.</p>"),
			text_3: _.template("<p class=\"half_title\" data-doc-editable=\"text\">St. Gallen mit viel Pech</p><p data-doc-editable=\"text\">Thun war weit abgeklärter und engagierter und riss mit seinem gefälligen, gradlinigen Fussball wiederholt Lücken in die brüchige St. Gallen Abwehr, die kurz vor der Pause noch Captain Philippe Montandon nach einem Zusammenprall mit Klubkollege Marco Mathys verlor. Vor allem in der Abwehr zeigte St. Gallen einige Abstimmungsprobleme, die Thun resolut ausnutzte. Torschützenleader Oscar Scarione wurde eng beschattet und konnte nicht so viel wie üblich Einfluss aufs St. Galler Angriffsspiel nehmen.</p>"),
			text_4: _.template("<p data-doc-editable=\"text\"><strong>Thun - St. Gallen 3:0 (2:0)</strong><br/>Arena. 4495 Zuschauer. SR Bieri. <br/>Tore: 4. Marco Schneuwly (Schirinzi) 1:0. 12. Wittwer (Marco Schneuwly) 2:0. 91. Siegfried (Schirinzi)) 3:0. Thun: Faivre; Lüthi, Reinmann, Schindelholz, Schirinzi; Zuffi; Steffen (80. Volina), Siegfried, Hediger, Wittwer; Marco Schneuwly (74. Sadik).<br/>St. Gallen: Lopar; Martic (56. Mutsch), Montandon (41. Stocklasa), Besle, Pa Modou; Mathys, Nater; Wüthrich, Scarione, Nushi (57. Cavusevic); Ishak.<br/>Bemerkungen: Thun ohne Bättig, Ferreira, Ghezal, Bigler, Cassio, Demiri und Salamand (alle verletzt). St. Gallen ohne Etoundi, Janjatovic und Lehmann (alle verletzt) und Hämmerli (gesperrt). Montandon nach Zusammenstoss mit Mathys benommen ausgetreten.<br/> 					Verwarnungen: 48. Steffen (Unsportlichkeit). 55. Besle (Foul). 65. Faivre (Spielverzögerung). 87. Cavusevic (Foul).<br/></p>"),
			
			sportsTable: _.template("<table class='sportstable'><thead><tr><th>&nbsp;</th><th>&nbsp;</th><th>SP</th><th>S</th><th>U</th><th>N</th><th class='hide_on_tablet hide_on_mobile'>Tore</th><th>Diff</th><th>Pkt</th></tr></thead><tbody><tr><td>1</td><td>FC Basel</td><td>33</td><td>19</td><td>9</td><td>5</td><td class='hide_on_tablet hide_on_mobile'>59:30</td><td>29</td><td>66</td></tr><tr class='color_line_1'><td>2</td><td>Grasshoppers</td><td>33</td><td>17</td><td>9</td><td>7</td><td class='hide_on_tablet hide_on_mobile'>41:30</td><td>11</td><td>60</td></tr><tr><td>3</td><td>FC St. Gallen</td><td>33</td><td>16</td><td>8</td><td>9</td><td class='hide_on_tablet hide_on_mobile'>49:32</td><td>17</td><td>56</td></tr><tr><td>4</td><td>FC Zürich</td><td>33</td><td>14</td><td>7</td><td>8</td><td class='hide_on_tablet hide_on_mobile'>54:42</td><td>12</td><td>49</td></tr><tr class='color_line_2'><td>5</td><td>FC Sion</td><td>33</td><td>12</td><td>9</td><td>9</td><td class='hide_on_tablet hide_on_mobile'>36:49</td><td>-13</td><td>45</td></tr><tr><td>6</td><td>FC Thun</td><td>33</td><td>12</td><td>8</td><td>7</td><td class='hide_on_tablet hide_on_mobile'>41:42</td><td>-1</td><td>44</td></tr><tr><td>7</td><td>BSC Young Boys</td><td>33</td><td>11</td><td>9</td><td>9</td><td class='hide_on_tablet hide_on_mobile'>44:43</td><td>-1</td><td>42</td></tr><tr><td>8</td><td>FC Luzern</td><td>33</td><td>8</td><td>9</td><td>9</td><td class='hide_on_tablet hide_on_mobile'>35:46</td><td>-11</td><td>36</td></tr><tr class='color_line_3'><td>9</td><td>FC Lausanne-Sports</td><td>33</td><td>6</td><td>8</td><td>9</td><td class='hide_on_tablet hide_on_mobile'>25:47</td><td>-22</td><td>27</td></tr><tr><td>10</td><td>FC Servette Genf</td><td>33</td><td>6</td><td>9</td><td>9</td><td class='hide_on_tablet hide_on_mobile'>28:51</td><td>-23</td><td>26</td></tr></tbody></table>"),
			
			quote_1: _.template("<p class='quote' data-doc-editable=\"text\">«Wir haben vieles richtig gemacht und einen positiven Auftritt gezeigt.»</p>"),
			quote_2: _.template("<p class='quote' data-doc-editable=\"text\">«Der frühe Rückstand warf uns aus der Bahn. Zu viele meiner Spieler waren nicht in Normalform.»</p>"),
			
			source_1: _.template("<p class='source' data-doc-editable=\"text\">Thuns Trainer Urs Fischer</p>"),
			source_2: _.template("<p class='source' data-doc-editable=\"text\">St. Gallens Trainer Jeff Saibene</p>"),
			
			panorama: _.template("<div class='panorama color_combo_12'><img src='media/img/placeholderimg/bild_066.jpg' /><p><span class='background color_combo_12'></span><span class='foreground'>- Das Panorama im Panorama -</span></p></div>"),
			caption_1: _.template("<p data-doc-editable=\"text\" class=\"caption\">Das panorama center in Thun</p>"),
			source_3: _.template("<p class='source' data-doc-editable=\"text\">Quelle: Keystone</p>"),
			
			socialMediaBox: _.template("<div class='social_box hide_on_mobile'><img src='media/img/placeholderimg/bild_023.png' /></div>"),
			tagList: _.template("<div class='tags'>Artikel-Tags<ul><li class='ressort'><a href='#'>Fussball</a></li><li><a href='#'>FC Thun</a></li><li><a href='#'>FC St. Gallen</a></li><li><a href='#'>Super League</a></li></ul></div>")
		};
	})();

}).call(this);
