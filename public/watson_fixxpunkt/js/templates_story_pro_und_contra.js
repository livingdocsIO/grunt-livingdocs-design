(function() {

	this.livingdocs = this.livingdocs || {};
	
	this.livingdocs.watson = {};
	
	this.livingdocs.watson.templates = (function() {
		return {
		
			textLayout: _.template("<div data-doc-container>\n</div>"),
			date: _.template("<p data-doc-editable=\"date\" class=\"date\">22. Mai 2013 15:45</p>"),
			upperLine: _.template("<h3>Pro und Contra</h3>"),
			title: _.template("<h2 data-doc-editable=\"title\">«Es ist wie bei Kindern»</h2>"),
			lead: _.template("<p class=\"lead\" data-doc-editable=\"text\">\nOswald Grübel und Philipp Löpfe sind für pointierte Meinungen bekannt. Für Tagesanzeiger.ch/Newsnet liefern sie sich ein Duell zum Steuerstreit zwischen der Schweiz und Deutschland. Lorem ipsum dolor. Sic amet ululat, Lucius ridet et clamat.\n</p>"),
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
			
			text_1: _.template("<p data-doc-editable=\"text\">«Reiche Leistungsträger verstecken ihr Geld im Ausland, weil sie die deutschen Steuergesetze offenbar als ungerecht oder als zu belastend empfinden», sagt Oswald Grübel, Chefredaktor und Verleger der «Weltwoche». «Die Schweizer sollten uns nicht belehren, wie unsere Steuersätze aussehen müssten», kontert Philipp Löpfe, renommierter Investigativjournalist der «Süddeutschen Zeitung». Und mit unterschiedlichsten Ansichten geht es rasant weiter im Interviewduell, das Löpfe und Grübel für Tagesanzeiger.ch/Newsnet geführt haben. Aber lesen Sie selbst, was die beiden bekannten Journalisten zum geplanten Steuerabkommen und den jüngsten Turbulenzen zwischen der Schweiz und Deutschland meinen.</p><p data-doc-editable=\"text\">«Reiche Leistungsträger verstecken ihr Geld im Ausland, weil sie die deutschen Steuergesetze offenbar als ungerecht oder als zu belastend empfinden», sagt Oswald Grübel, Chefredaktor und Verleger der «Weltwoche». «Die Schweizer sollten uns nicht belehren, wie unsere Steuersätze aussehen müssten», kontert Philipp Löpfe, renommierter Investigativjournalist der «Süddeutschen Zeitung». Und mit unterschiedlichsten Ansichten geht es rasant weiter im Interviewduell, das Löpfe und Grübel für Tagesanzeiger.ch/Newsnet geführt haben. Aber lesen Sie selbst, was die beiden bekannten Journalisten zum geplanten Steuerabkommen und den jüngsten Turbulenzen zwischen der Schweiz und Deutschland meinen.</p>"),
			
			half_title_1: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Der Schweizer Haftbefehl gegen deutsche Steuerfahnder war unüberlegt. Deutschland könnte nun Retorsionsmassnahmen ergreifen – zum Beispiel Schweizer Banker wegen Beihilfe zur Steuerhinterziehung anzeigen. Zudem sitzt das grosse Deutschland sowieso am längeren Hebel.</p>"),
			text_2: _.template("<p data-doc-editable=\"text\" class=\"statement contra\"><strong>Oswald Grübel:</strong> Das sind politische Überlegungen, die eine Bundesanwaltschaft nicht beirren dürfen. Die Bundesanwaltschaft ist eine unabhängige Behörde, die nach rechtlichen Kriterien handelt. Jedenfalls handeln sollte.</p>"),
			text_3: _.template("<p data-doc-editable=\"text\" class=\"statement pro\"><strong>Philipp Löpfe:</strong> Es wäre töricht, auf törichte Haftbefehle mit Anzeigen zu reagieren. In diesem Fall sitzt niemand am längeren Hebel. Aber mancher gräbt sich seine Grube selbst.</p>"),
			
			half_title_2: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Deutschland bricht doch Schweizer und sogar deutsches Recht?</p>"),
			text_4: _.template("<p data-doc-editable=\"text\" class=\"statement contra\"><strong>OG:</strong> Das müssen die Untersuchungen zeigen, aber wirtschaftlicher Nachrichtendienst – Spionage – dürfte auch nach deutschem Recht verboten sein.</p>"),
			text_5: _.template("<p data-doc-editable=\"text\" class=\"statement pro\"><strong>PL:</strong> Die Schweizer verweisen zu Recht auf ihr Strafgesetz. Aber auch das Gesetz gibt die Vorwürfe gegen die Steuerfahnder nicht her. Da ist kein dringender Tatverdacht; nur sehr forsche Ermittler könnten einen sehr dünnen Anfangsverdacht vermuten. Sie müssten aber die Unschuldsvermutung stark herausstellen. Den Steuerfahndern sind die Daten angeboten worden. Spionage funktioniert anders.</p>"),
			
			half_title_3: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Gibt es irgendeine Legitimation, dass deutsche Steuerfahnder im Ausland schnüffeln und Daten von Schweizer Banken beschaffen?</p>"),
			text_6: _.template("<p data-doc-editable=\"text\" class=\"statement contra\"><strong>OG:</strong> Nein. Die Deutschen bringen es nicht fertig, ihren eigenen Steuergesetzen in Deutschland Nachachtung zu verschaffen. Reiche Leistungsträger verstecken ihr Geld im Ausland, weil sie die deutschen Steuergesetze offenbar als ungerecht oder als zu belastend empfinden. Dieses Problem kann Deutschland nicht dadurch lösen, dass es seine Gesetze der Schweiz aufzwingt.</p>"),
			text_7: _.template("<p data-doc-editable=\"text\" class=\"statement pro\"><strong>PL:</strong> In Deutschland ist Steuerhinterziehung eine Straftat und muss verfolgt werden. Solange Schweizer Banken schwarzes Geld verstecken, müssen sie mit Nachforschungen leben. Einer offiziell nie bestätigten, aber auch nie dementierten Studie von Helvea zufolge befindet sich Schwarzgeld deutscher Kunden in Höhe von 160 bis 190 Milliarden Schweizer Franken auf Schweizer Konten. Das wäre ein Skandal.</p>"),
			
			half_title_4: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Der Schweizer Haftbefehl gegen die Steuerfahnder zeigt, dass die Justiz in der Schweiz unabhängig ist. Was soll also die Empörung in Deutschland?</p>"),
			text_8: _.template("<p data-doc-editable=\"text\" class=\"statement contra\"><strong>OG:</strong> Dahinter steckt die Verabsolutierung des eigenen Standpunkts. Es ist wie bei Kindern, die nicht einsehen können, dass ihre Wünsche nicht automatisch verpflichtend sind für andere Menschen. </p>"),
			text_9: _.template("<p data-doc-editable=\"text\" class=\"statement pro\"><strong>PL:</strong> Die Haftbefehle sind am 15. März, also auf dem vorläufigen Höhepunkt der deutschen Diskussion über das Steuerabkommen, ausgestellt worden. Zufall? Die Verfolgung solcher angeblicher Straftaten bedarf in der Schweiz einer Ermächtigung durch den Bundesrat. Die hat es in diesem Fall gegeben. Zufall?</p>"),
			
			half_title_5: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Würde Deutschland nicht besser seine Steuerpolitik ändern, als Steuerflüchtlingen im Ausland nachzustellen?</p>"),
			text_10: _.template("<p data-doc-editable=\"text\" class=\"statement contra\"><strong>OG:</strong> Ja.</p>"),
			text_11: _.template("<p data-doc-editable=\"text\" class=\"statement pro\"><strong>PL:</strong> Wer Steuern hinterzieht und Schwarzgeld ins Ausland schafft, ist kriminell und schädigt das Gemeinwohl. Die Schweizer sollten uns nicht belehren, wie unsere Steuersätze aussehen müssten.</p>"),
			
			half_title_6: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Um Steuerhinterzieher zu fassen, betreibt Deutschland einen Riesenaufwand, das Ergebnis ist aber mager. Warum?</p>"),
			text_12: _.template("<p data-doc-editable=\"text\" class=\"statement contra\"><strong>OG:</strong> Deutschland hat 2000 Milliarden Schulden. Deutschland will nicht wirklich sparen, sondern immer mehr Geld an Steuern erheben. Es ist kein Wunder, dass diese Politik das Vertrauen der leistungsfähigen Bürger in den deutschen Staat erschüttert. Solange die verfehlte Schulden- und Steuerpolitik anhält, wird es immer Deutsche geben, die ihr Geld in Sicherheit bringen wollen.</p>"),
			text_13: _.template("<p data-doc-editable=\"text\" class=\"statement pro\"><strong>PL:</strong> Warum sind in der Schweiz eigentlich die Schweizer Steuerhinterzieher kein grosses Thema? So soll etwa ein Drittel der Schwarzgelder auf Vaduzer Konti aus der Schweiz stammen. Egal, illegal...?</p>"),
			
			half_title_7: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Im Steuerstreit mit Deutschland wäre die Schweiz besser dran ohne Abkommen. Oder nicht?</p>"),
			text_14: _.template("<p data-doc-editable=\"text\" class=\"statement contra\"><strong>OG:</strong> Sicher nicht schlechter</p>"),
			text_15: _.template("<p data-doc-editable=\"text\" class=\"statement pro\"><strong>PL:</strong> Das vorliegende Abkommen ist aus deutscher Sicht nicht zu akzeptieren. Notorische Steuerhinterzieher würden belohnt. Wie die Schweiz das Abkommen sieht, ist Schweizer Sache.</p>"),
			
			half_title_8: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Datenschutz wird in Deutschland grossgeschrieben (zum Beispiel bei den Patientendaten), aber bei den Bankdaten soll die totale Transparenz herrschen. Ein Widerspruch?</p>"),
			text_16: _.template("<p data-doc-editable=\"text\" class=\"statement contra\"><strong>OG:</strong> In Deutschland entscheidet der Staat, wie viel Geld er den Bürgern abnimmt. In der Schweiz entscheiden die Bürger, wie viel Geld sie dem Staat geben wollen. Das ist der Unterschied.</p>"),
			text_17: _.template("<p data-doc-editable=\"text\" class=\"statement pro\"><strong>PL:</strong> Das Bankgeheimnis ist kein Fetisch. Es gibt Wichtigeres, selbst in der Schweiz.</p>"),
			
			half_title_9: _.template("<p data-doc-editable=\"text\" class=\"half_title\">Trotz aller Beteuerungen der Schweizer Banken und Politiker: Deutet nicht vieles darauf hin, dass die Schweiz weiterhin auf das Geschäft mit Steuerhinterziehern setzt?</p>"),
			text_18: _.template("<p data-doc-editable=\"text\" class=\"statement contra\"><strong>OG:</strong> Es ist nicht Sache der Schweiz, jeden Hotelgast, jeden Uhrenkäufer oder jeden Bankkunden auf seine Steuerehrlichkeit hin zu durchleuchten. Wenn die Deutschen ein Problem haben, dass niemand die Steuern bezahlt, dann müssen sie dieses Problem lösen. Die Schweiz ist ein unabhängiges Land, keine Unterabteilung der deutschen Steuerpolizei.</p>"),
			text_19: _.template("<p data-doc-editable=\"text\" class=\"statement pro\"><strong>PL:</strong> Von aussen betrachtet findet in der Schweiz ein Machtkampf statt. Sie sollten von dem Nachbarn Liechtenstein lernen, wie man einen Neuanfang startet.</p>"),
			
				
			image_1: _.template("<img src=\"media/img/placeholderimg/bild_117.jpg\" />"),
			image_2: _.template("<img src=\"media/img/placeholderimg/bild_116.jpg\" />"),
			
			caption_1: _.template("<p data-doc-editable=\"text\" class=\"caption\">\nLorem ipsum dolor\n</p>"),
			caption_2: _.template("<p data-doc-editable=\"text\" class=\"caption\">\nLorem ipsum dolor\n</p>"),
			
			source_1: _.template("<p data-doc-editable=\"text\" class=\"source\">\nFoto: Keystone\n</p>"),
			source_2: _.template("<p data-doc-editable=\"text\" class=\"source\">\nFoto: Keystone\n</p>"),
			
			socialMediaBox: _.template("<div class='social_box hide_on_mobile'><img src='media/img/placeholderimg/bild_023.png' /></div>"),
			tagList: _.template("<div class='tags'>Artikel-Tags<ul><li class='ressort'><a href='#'>Wirtschaft</a></li><li><a href='#'>Steuerabkommen</a></li><li><a href='#'>Oswald Grübel</a></li><li><a href='#'>Philipp Löpfe</a></li><li><a href='#'>Pro und Contra</a></li></ul></div>"),
			badgeList: _.template("<div class='badges'>Ihre Reaktion?<ul><li><a href='#'><span class='name'>LOL</span><span class='number'><span class='arrow'></span>7</span></a></li><li><a href='#'><span class='name'>Cute</span><span class='number'><span class='arrow'></span>23</span></a></li><li><a href='#'><span class='name'>Love</span><span class='number'><span class='arrow'></span>2</span></a></li><li><a href='#'><span class='name'>Hot</span><span class='number'><span class='arrow'></span>9</span></a></li><li class='top'><a href='#'><span class='name'>Kitsch</span><span class='number'><span class='arrow'></span>437</span></a></li></ul><ul class='negative'><li><a href='#'><span class='name'>Fail</span><span class='number'><span class='arrow'></span>34</span></a></li><li><a href='#'><span class='name'>WTF</span><span class='number'><span class='arrow'></span>1</span></a></li><li><a href='#'><span class='name'>OMG</span><span class='number'><span class='arrow'></span>3</span></a></li><li><a href='#'><span class='name'>Sad</span><span class='number'><span class='arrow'></span>21</span></a></li><li><a href='#'><span class='name'>Trash</span><span class='number'><span class='arrow'></span>11</span></a></li></ul></div>")
		};
	})();

}).call(this);
