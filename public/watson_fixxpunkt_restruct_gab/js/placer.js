



var placer = (function(){
var top_region = 0;
var top_pos = 0;
var scroll_timeout;
var system_message_timeout;

/* this json holds all html-snippets */
/* ================================= */
var templates = [
	{ "url": "placer_snippet_cluster.html" }, 
	{ 
		"url": "placer_snippet_story.html",
		"url_auto": "placer_snippet_special_options_extended.html"
	}, /* type_id = 1 */
	{ 
		"url": "placer_snippet_special_options.html",
		"url_auto": "placer_snippet_special_options.html"
		}, /* type_id = 2 */
	{ 
		"url": "placer_snippet_special_options.html",
		"url_auto": "placer_snippet_special_options.html"
	}, /* type_id = 3 */
	{ "url": "placer_snippet_special.html" }, /* type_id = 4 */
	{
		"url": "placer_snippet_special_options.html",
		"url_auto": "placer_snippet_special_options.html"
	}, /* type_id = 5 */
	{ "url_auto": "placer_snippet_special.html" } /* type_id = 6 */
];

/* getting type_ids out of region_type_ids.gallery etc. */
/* ==================================================== */
var region_type_ids = {
	"story": 1,
	"poll": 2,
	"gallery": 3,
	"html": 4,
	"flipper": 5,
	"tag_teaser": 6	
};

/* strings for element titles */
/* ========================== */
var region_type_names = [
	"-1", "Story", "Poll", "Gallery", "HTML-Element", "Flipper", "Tag Teaser"
];

/* strings */
/* ======= */
var strings = {
	"title_auto_content": "Wird aus Cluster Tag gefüllt",
	"message_live": "Das Layout ist live geschaltet",
	"message_save": "Tempsave erfolgreich",
	"time": "Vor",
	"hours": "Stunden"
}

/* list of urls we need for ajax-calls and iframes */
/* =============================================== */
var ajax_urls = {
	"load_library": "placer_library_json.html",
	"load_front": "placer_front_json_input.html",
	"search_result": "placer_search_result_json.html",
	"storage_reset": "placer_my_fictional_url.html",
	"save_front": "placer_my_fictional_url.html",
	"go_live": "placer_my_fictional_url.html",
	"iframe_preview": "front_bespielt.html",
	"tag_search": "placer_tag_search_json.html"
};

return {
	/* ========================== */
	/* === IFRAME POSITIONING === */
	/* ========================== */
	
	/* calculate new position of iframes and start animation */
	/* ===================================================== */
	position_iframes:function(duration) {
		var mobile_iframe = $('iframe.preview.mobile').contents().find("html, body");
		var tablet_iframe = $('iframe.preview.tablet').contents().find("html, body");
		var desktop_iframe = $('iframe.preview.desktop').contents().find("html, body");
		
		var iframes = [mobile_iframe, tablet_iframe, desktop_iframe];
		var scales = [0.625, 0.377, 0.377];
		
		for (var counter=0; counter<iframes.length; counter++) {
			var new_pos = iframes[counter].find(".region").not(":has(.region)").not(".notplaceable").eq(top_region).offset().top;
			if (new_pos != undefined) {
				iframes[counter].stop(true, true);
				iframes[counter].animate({ scrollTop: new_pos-(top_pos/scales[counter]) }, duration );
				//iframes[counter].find(".region").not(":has(.region)").parents(".cluster").stop().animate({ opacity: 0.2 }, duration );
				//iframes[counter].find(".region").not(":has(.region)").eq(top_region).parents(".cluster").stop().animate({ opacity: 1 }, duration );
			}
		}
	},
	/* calculate and set new position of horizontal meter */
	/* ================================================== */
	position_meter:function() {
		for (var counter=0; counter<$(".working_area .region").length; counter++) {
			if ($(".working_area .region").eq(counter).offset().top > $(window).scrollTop() ) {
				top_region = counter;
				top_pos = $(".working_area .region").eq(counter).offset().top - $(window).scrollTop();
				break;
			}
		}
		$(".meter").css("top", top_pos);
	},
	/* start timeout for positioning (after scrolling or window resize */
	/* =============================================================== */
	start_positioning:function() {
		placer.position_meter();
		clearTimeout(scroll_timeout);
		scroll_timeout = setTimeout(function(){
			placer.position_iframes(1000);
		}, 300);
	},
	
	/* ============================ */
	/* === PLACING NEW ELEMENTS === */
	/* ============================ */
	
	/* fill in values into new placed story */
	/* ==================================== */
	fill_in_story_values:function( new_element, values ) {
		/* regular story (with id) */
		if (values.id!=undefined) {
			new_element.find(".rank").html("#"+values.rank);
			if (values.rank<=10) new_element.find(".rank").addClass("topten");
			else if (values.rank<=30) new_element.find(".rank").addClass("topthirty");
			else if (values.rank<=100) new_element.find(".rank").addClass("toponehundred");
			var hours = Math.floor( values.time / 60);          
			var minutes = values.time % 60;
			new_element.find(".details strong").html(placer.short_string(values.title,35)).after("<br/>"+strings.time+" "+hours+":"+minutes+" "+strings.hours+"<br/>"+values.author);
			/* notes */
			new_element.find(".note").attr("data-text", values.note);
			placer.update_note_icons();
			/* performance bars */
			var performance_pixels = 80;
			for (var counter=0; counter<values.performance.length; counter++ ) {
				var current_val = values.performance[counter];
				var margin = performance_pixels - (current_val * performance_pixels / 100);
				new_element.find(".bar").eq(counter).css("marginTop", margin);
			}
		}
		/* auto story (without id) */
		else {
			new_element.find(".type").html(region_type_names[values.type_id]+"<br/>"+strings.title_auto_content);
		}
		new_element.find("select[name=color_combo]").val(values.color_combo);
		new_element.find("select[name=font_size]").val(values.font_size);
		new_element.find("select[name=font_face]").val(values.font_face);
		new_element.find("input[name=image]").attr("checked", values.image);
		new_element.find("input[name=lead]").attr("checked", values.lead);
	},
	/* fill in values into new placed special_element */
	/* ============================================== */
	fill_in_special_element_values:function( new_element, values ) {
		if (values.title==undefined) values.title = strings.title_auto_content;
		new_element.find(".type").html(region_type_names[values.type_id]+"<br/>"+placer.short_string(values.title,35));
		new_element.find("select[name=color_combo]").val(values.color_combo);
		new_element.find("select[name=font_size]").val(values.font_size);
	},
	/* basic fill in element */
	/* ===================== */
	fill_in_element:function( new_element, values ) {
		new_element.attr("data-element", JSON.stringify(values));
		if (values.edit_link==undefined) new_element.find(".edit").remove();
		else new_element.find(".edit").attr("href",values.edit_link);
		if (values.type_id == region_type_ids.story) placer.fill_in_story_values( new_element, values );
		else placer.fill_in_special_element_values( new_element, values );
		placer.init_draggable_clusters_and_regions();
	},
	/* an element has been dropped on a region */
	/* ======================================= */
	drop_on_region:function( event, ui ) {
		/* check if cluster is already full */
		var inside_same_cluster = ($(this).siblings(".region.ui-draggable-dragging").length);
		if ( ($(this).siblings(".region").length<5) || (inside_same_cluster) ) {
			/* region dropped on another region */
			if ( ui.draggable.hasClass("region") ) {
				$(this).after(ui.draggable);
			}
			/* new element dropped on a region */
			else if ( ui.draggable.hasClass("element") ) {
				var values = $.parseJSON( ui.draggable.attr("data-element") );
				if (values.tag_id!=-1) {
					if (values.id!=undefined) $(this).after(templates[values.type_id].snippet);
					else $(this).after(templates[values.type_id].snippet_auto);
					var new_element = $(this).next(".region");
					placer.fill_in_element(new_element,values);
				}
			}
			ui.draggable.css("top", 0).css("left", 0);
		}
		placer.update_cluster_masks();
		placer.save_and_update_preview();
	},
	/* an element has been dropped on a cluster */
	/* ======================================== */
	drop_on_cluster:function( event, ui ) {
		/* cluster dropped on another cluster */
		if ( ui.draggable.hasClass("cluster") ) {
			$(this).after(ui.draggable);
		}
		/* region dropped on an EMPTY cluster */
		else if ( ui.draggable.hasClass("region") ) {
			if ($(this).find(".region").length==0) {
				$(this).append(ui.draggable);
			}
		}
		/* new element dropped on an EMPTY cluster */
		else if ( ui.draggable.hasClass("element") ) {
			if ($(this).find(".region").length==0) {
				var values = $.parseJSON( ui.draggable.attr("data-element") );
				if (values.tag_id!=-1) {
					if (values.id!=undefined) $(this).append(templates[values.type_id].snippet);
					else $(this).append(templates[values.type_id].snippet_auto);
					var new_element = $(this).find(".region");
					placer.fill_in_element(new_element,values);
					placer.init_draggable_clusters_and_regions();
				}
			}
		}
		/* new cluster dropped on a cluster */
		else if ( ui.draggable.hasClass("container") ) {
			$(this).after(templates[0].snippet);
			placer.init_draggable_clusters_and_regions();
		}
		ui.draggable.css("top", 0).css("left", 0);
		placer.update_cluster_masks();
		placer.save_and_update_preview();
	},
	/* initialise clusters and regions in workspace */
	/* ============================================ */
	init_draggable_clusters_and_regions:function() {
		$( ".region" ).draggable({ 
			revert: "invalid",
			axis: "y",
			start: function(){$(".notepad").hide();}
		});
		$( ".cluster" ).draggable({
			revert: "invalid",
			axis: "y",
			start: function(){$(".notepad").hide();}
		});
		
		$( ".region" ).droppable({ drop: placer.drop_on_region });
		$( ".cluster" ).droppable({ drop: placer.drop_on_cluster });
	},
	/* initialise options-events in regions */
	/* ==================================== */
	init_region_options:function() {
		$(document).on( "change", ".region .options select, .region .options input", function(){
			placer.save_and_update_preview();
		} );
	},
	/* initialise elements in tool stack */
	/* ================================= */
	init_draggable_toolelements:function() {
		$( ".tools li.element, .tools li.container" ).draggable({
			revert: "invalid",
			start: function(){$(".notepad").hide();}
		});
	},
	/* pulldowns in toolstack */
	/* ====================== */
	init_pulldowns:function() {
		/* binding on search filter */
		$(".tools .search select").change(function(){
			placer.display_search_results();
		});
		
		$(".tools .search select").blur(function(){
			$(".tools .search ul").hide();
		});

		/* reset all pulldowns (necessary, when reloading the page) */
		$( ".tools select").find("option:first").attr('selected',true);
	},
	/* search fields in toolstack */
	/* ========================== */
	init_search_fields:function() {
		$(".tools input").focus(function(){
			var value = $(this).val();
			var value_default = $(this).attr("data-default");
			if ( value == value_default ) $(this).val("");
		});
		
		$(".tools input").blur(function(){
			var value = $(this).val();
			var value_default = $(this).attr("data-default");
			if (value=="") $(this).val(value_default);
			$(".tools .search ul").hide();
		});
		
		/* element search*/
		$(".tools .search input").keyup(function(){
			placer.display_search_results();
		});
		
		/* tag search */
		$(".tools input.tagselect").keyup(function(){
			placer.display_tag_results($(this));
			placer.convert_tag_results_to_data_entry($(this));
		});
		
		$(".tools input.tagselect").blur(function(){
			placer.convert_tag_results_to_data_entry($(this));
			$("ul.tag_search_results").hide();
		});
	},
	/* looks up search results and displays them in a list */
	/* =================================================== */
	display_search_results:function() {
		$.ajax({
			type: 'POST',
			dataType: "json",
			url: ajax_urls.search_result,
			data: {
				"type_id":$(".tools .search select").val(),
				"search_term":$(".tools .search input").val()
			},
			success: function(result) {
				var result_list = $(".tools .search ul");
				result_list.empty();
				$.each( result.search_result, function( key, value ) {
					var type = region_type_names[value.type_id];
					var string_length = 35 - type.length;
					result_list.append("<li class='element'><strong>"+type+":</strong> "+placer.short_string(value.title,string_length)+"</li>");
					result_list.find("li:last").attr("data-element", JSON.stringify(value));
				});
				placer.init_draggable_toolelements();
				$(".tools .search ul").show();
			},
			async: false
	    });
	},
	/* creates a json for the tag searches parent-li with all values */
	/* ============================================================= */
	convert_tag_results_to_data_entry:function(form_element) {
		var data = $.parseJSON( form_element.parents("li").attr("data-element") );
		data["title"] = form_element.val();
		data["tag_id"] = form_element.attr("data-tag_id");
		var new_data = JSON.stringify(data);
		form_element.parents("li").attr("data-element", new_data);
	},
	/* looks up tag results and displays them in a list */
	/* ================================================ */
	display_tag_results:function(form_element) {
		$.ajax({
			type: 'POST',
			dataType: "json",
			url: ajax_urls.tag_search,
			data: { "search_term":form_element.val() },
			success: function(result) {
				var result_list = $("ul.tag_search_results");
				result_list.empty();
				$.each( result.Tags, function( key, value ) {
					var name = value.Tag.name;
					var id = value.Tag.id;
					result_list.append("<li>"+placer.short_string(name,20)+"</li>");
					result_list.find("li:last").attr("data-id", id);
				});
				var new_position = form_element.offset();
				new_position.top += form_element.outerHeight();
				result_list.find("li").mousedown(function(){
					form_element.prop("value", $(this).text());
					form_element.attr("data-tag_id", $(this).attr("data-id"));
				});
				result_list.css("top", new_position.top+"px").css("left", new_position.left+"px").show();
			},
			async: false
	    });
	},
	
	/* ================================ */
	/* === CLUSTER-LAYOUT SELECTION === */
	/* ================================ */
	
	/* repaint cluster-layout selections */
	/* ================================= */
	update_cluster_masks:function() {
		var num_options = [-1, 1, 3, 4, 3, 3, 1];
		for (var counter=0; counter<$(".cluster").length; counter++) {
			var current_cluster = $(".cluster").eq(counter);
			var current_masks = current_cluster.find(".masks");
			current_masks.empty();
			var num_regions = current_cluster.find(".region").length;
			var choice = current_masks.attr("data-mask");
			if (choice>num_options[num_regions]) {
				choice = 1;
				current_masks.attr("data-mask", 1);
			}
			for ( counter2=1; counter2<=num_options[num_regions]; counter2++ ) {
				current_masks.append("<div class='mask mask_"+num_regions+"_"+counter2+"'></div>");
				if (choice==counter2) {
					current_masks.find(".mask:last").addClass("highlight");
				}
			}
		}
	},
	/* process click on cluster-layout option */
	/* ====================================== */
	clicked_mask:function() {
		var mask_index = $(this).parents(".masks").find(".mask").index(this);
		$(this).parents(".masks").attr("data-mask", mask_index+1);
		placer.update_cluster_masks();
		placer.save_and_update_preview();
	},
	/* initialise cluster-layout options */
	/* ================================= */
	init_cluster_masks:function() {
		$(document).on( "click", ".mask", placer.clicked_mask );
		placer.update_cluster_masks ();
	},
	/* initialise further cluster-options */
	/* ================================== */
	init_cluster_options:function() {
		/* tag search */
		$(document).on("keyup", ".cluster .cluster_options input.tagselect", function(){
			placer.display_tag_results($(this));
		});
		
		$(document).on("focus", ".cluster .cluster_options input.tagselect", function(){
			var value = $(this).val();
			var value_default = $(this).attr("data-default");
			if ( value == value_default ) $(this).val("");
		});
		
		$(document).on("blur", ".cluster .cluster_options input.tagselect", function(){
			var value = $(this).val();
			var value_default = $(this).attr("data-default");
			if (value=="") $(this).val(value_default).attr("data-tag_id", -1);
			placer.save_and_update_preview();
			$("ul.tag_search_results").hide();
		});
		
		$(document).on("change", ".cluster .cluster_options select[name=color_combo]", function(){
			placer.save_and_update_preview();
		});
	},
	/* ============= */
	/* === NOTES === */
	/* ============= */
	
	/* process click on note icon */
	/* ========================== */
	clicked_noteicon:function() {
		var new_position = $(this).parents(".region").offset().top+"px";
		var note_text = $(this).attr("data-text");
		var index_region = $(".region").index($(this).parents(".region"));
		$(".notepad textarea").val(note_text);
		if ( index_region == $(".notepad").attr("data-index_region") ) { $(".notepad").toggle(); }
		else { $(".notepad").css("top", new_position).show(); }
		$(".notepad").attr("data-index_region", index_region);
	},
	/* repaint note icons */
	/* ================== */
	update_note_icons:function() {
		var notes = $(".region .note");
		for(var counter=0; counter<notes.length; counter++) {
			var current_note = notes.eq(counter);
			var current_notetext = current_note.attr("data-text");
			if (current_notetext!="") { current_note.addClass("active"); }
			else current_note.removeClass("active");
		}
	},
	/* typing into notepad */
	/* =================== */
	note_typed:function() {
		var index_region = $(".notepad").attr("data-index_region");
		$(".cluster .region").eq(index_region).find(".note").attr("data-text", $(".notepad textarea").val());
		placer.update_note_icons();
	},
	/* initialise notepad */
	/* ================== */
	init_notepad:function() {
		$(document).on( "click", ".note", placer.clicked_noteicon );
		$(document).on( "blur", ".notepad textarea", function(){
			placer.save_and_update_preview();
			$(".notepad").hide();
		} );
		$(".notepad").keyup(placer.note_typed);
		placer.update_note_icons();
	},
	
	/* =============== */
	/* === STORAGE === */
	/* =============== */
	
	/* reset to old state */
	/* ================== */
	storage_reset:function() {
		var json = {
			"layout_id" : $(".working_area").attr("data-layout_id")
		};
		$.ajax({
			type: "POST",
			url: ajax_urls.storage_reset,
			data: json
		}).done(function() {
			location.reload();
		});
	},
	/* generate json from working area */
	/* =============================== */
	return_json_front:function() {
		/* which values are superfluous for json output? */
		var delete_from_regions = ["title","rank","author","time","performance","edit_link"];
		var delete_from_clusters = ["title"];
		
		var json_front={
			"layout_id" : $(".working_area").attr("data-layout_id"),
			"clusters" : []
		};
		var num_clusters = $(".working_area .cluster").length;
		for (var counter_clusters=0;counter_clusters<num_clusters;counter_clusters++) {
			var current_cluster = $(".working_area .cluster").eq(counter_clusters);
			var num_regions = current_cluster.find(".region").length;
			/* putting together array with region jsons for current cluster */
			var json_regions=[];
			for (var counter_regions=0;counter_regions<num_regions;counter_regions++) {
				var current_region = current_cluster.find(".region").eq(counter_regions);
				var region_json = JSON.parse(current_region.attr("data-element"));
				region_json["note"]=current_region.find(".note").attr("data-text");
				region_json["color_combo"]=current_region.find("select[name=color_combo]").val();
				region_json["font_face"]=current_region.find("select[name=font_face]").val();
				region_json["font_size"]=current_region.find("select[name=font_size]").val();
				region_json["lead"]=current_region.find("input[name=lead]:checked").val();
				region_json["image"]=current_region.find("input[name=image]:checked").val();
				for (var counter_delete=0; counter_delete<delete_from_regions.length; counter_delete++) {
					delete region_json[delete_from_regions[counter_delete]];
				}
				json_regions[counter_regions]=region_json;
			}
			/* putting together json for current cluster */
			var cluster_json = {};
			if (num_regions) cluster_json["regions"]=json_regions;
			cluster_json["mask"]=parseInt(current_cluster.find(".masks").attr("data-mask"));
			cluster_json["color_combo"]=current_cluster.find(".cluster_options select[name=color_combo]").val();
			cluster_json["tag_id"]=parseInt(current_cluster.find(".cluster_options .tagselect").attr("data-tag_id"));
			cluster_json["cluster_size"]=num_regions;
			for (var counter_delete=0; counter_delete<delete_from_clusters.length; counter_delete++) {
				delete cluster_json[delete_from_clusters[counter_delete]];
			}
			json_front["clusters"][counter_clusters]=cluster_json;
		}
		return(json_front);	
	},
	/* put current state online */
	/* ======================== */
	storage_golive:function() {
		var json_front = placer.return_json_front();	
		$.ajax({
			type: "POST",
			url: ajax_urls.go_live,
			data: json_front
		}).done(function() {
			$("iframe.preview").attr("src", ajax_urls.iframe_preview);
			placer.show_system_message(strings.message_live, "warning", 1500);
		});
	},
	/* initialise reset and live! buttons */
	/* ================================== */
	init_storage_buttons:function() {
		$(".button.reset").click(placer.storage_reset);
		$(".button.live").click(placer.storage_golive);
	},
	/* save current state and load preview */
	/* =================================== */
	save_and_update_preview:function() {
		var json_front = placer.return_json_front();
		$.ajax({
			type: "POST",
			url: ajax_urls.save_front,
			data: json_front
		}).done(function() {
			$("iframe.preview").attr("src", ajax_urls.iframe_preview);
			placer.show_system_message(strings.message_save, "good", 500);
		});
	},
	/* load html-snippets from files */
	/* ============================= */
	init_snippets:function() {
		var snippets = [
			["url", "snippet"],
			["url_auto", "snippet_auto"]
		];
		for (var counter=0; counter<snippets.length; counter++) {
			$.each( templates, function( key, value ) {
				if (templates[key][snippets[counter][0]]!=undefined) {
					$.ajax({
					url: templates[key][snippets[counter][0]],
					success: function(result) {
						templates[key][snippets[counter][1]]=result;
					},
					async: false
					});
				}
			});
		}
	},
	/* fill in working area from json */
	/* ============================== */
	fill_working_area:function(json_front) {
		var working_area = $(".working_area");
		working_area
			.attr("data-layout_id", json_front.layout_id)
			.empty();
		/* loop through clusters */
		$.each( json_front.clusters, function( key, values_cluster ) {
			
			working_area.append(templates[0].snippet);
			var cluster = working_area.find(".cluster:last");
			cluster.find(".masks").attr("data-mask", values_cluster.mask);
			
			if (values_cluster.tag_id!=-1) {
				cluster.find(".cluster_options .tagselect")
					.attr("data-tag_id", values_cluster.tag_id)
					.val(values_cluster.tag_name);
			}
			
			cluster.find("select[name=color_combo]").val(values_cluster.color_combo);
			
			$.each( values_cluster.regions, function( key2, values_region ) {
				if (values_region.id!=undefined) cluster.append(templates[values_region.type_id].snippet);
				else cluster.append(templates[values_region.type_id].snippet_auto);
				var new_element = cluster.find(".region:last");
				placer.fill_in_element(new_element,values_region);
			});
		});
	},
	/* load front json */
	/* =============== */
	load_layout:function() {
		$.ajax({
			dataType: "json",
			url: ajax_urls.load_front,
			success: function(result) {
				placer.fill_working_area(result);
			},
			async: false
	    });
	},
	/* load library json */
	/* ================= */
	load_library:function() {
		$.ajax({
			dataType: "json",
			url: ajax_urls.load_library,
			success: function(result) {
				$.each( result, function( key, value ) {
				var current_list=$(".tools ul."+key);
				current_list.empty();
					$.each( result[key], function( key2, value2 ) {
						current_list.append("<li class='element'>"+placer.short_string(value2.title,30)+"</li>");
						current_list.find("li:last").attr("data-element", JSON.stringify(value2));
					});
				});
			},
			async: false
	    });
	},
	
	/* =============== */
	/* === VARIOUS === */
	/* =============== */
	show_system_message:function(text, type, time) {
		$(".system_message span").text(text);
		$(".system_message").removeClass("bad warning good").addClass(type).show();
		clearTimeout(system_message_timeout);
		system_message_timeout = setTimeout(function(){
			$(".system_message").hide();
		},time);
	},
	init_window_and_iframe_bindings:function() {
		$(window).scroll(function(){
			$("ul.tag_search_results").hide();
			placer.start_positioning();
		});
		$(window).resize(placer.start_positioning);
		$('iframe.preview').load(function(){
			$(this).contents().find("html, body").find(".wrapper").css("marginBottom", "4000px");
			placer.position_meter();
			placer.position_iframes(0);
		});
	},
	short_string:function(the_string, the_length) {
		if (the_string.length>the_length-3) the_string = the_string.substr(0,the_length-3)+"...";
		return the_string;
	},
	
	/* checks whether the working area is empty. if so: puts an empty cluster into place */
	/* ================================================================================= */
	check_for_empty_working_area:function() {
		var num_clusters = $(".working_area .cluster").length;
		if (!num_clusters) {
			$(".working_area").append(templates.Cluster.snippet);
			placer.init_draggable_clusters_and_regions();
		}
	},
	
	/* initialise delete buttons */
	/* ========================= */
	init_delete_buttons:function() {
		$(document).on( "click", ".cluster_delete", function(){
			$(".notepad").hide();
			$(this).parents(".cluster").remove();
			placer.check_for_empty_working_area();
			placer.position_meter();
			placer.position_iframes(0);
			placer.save_and_update_preview();
		} );
		$(document).on( "click", ".region_delete", function(){
			$(".notepad").hide();
			/* remove the region */
			if ($(this).parents(".cluster").find(".region").length>1) {
				$(this).parents(".region").remove();
			}
			/* if it's the last region, remove the cluster */
			else {
				$(this).parents(".cluster").remove();
			}
			placer.check_for_empty_working_area();
			placer.update_cluster_masks ();
			placer.position_meter();
			placer.position_iframes(0);
			placer.save_and_update_preview();
		} );
	},
	/* initialise placer */
	/* ================= */
	init:function() {
		placer.init_snippets (); /* load all html-snippets from external files into variables */
		placer.init_window_and_iframe_bindings ();
		placer.load_library (); /* load json and fill toollibrary to the left */
		placer.load_layout (); /* load json and fill working area */
		placer.init_draggable_toolelements ();
		placer.init_pulldowns ();
		placer.init_search_fields ();
		placer.init_draggable_clusters_and_regions ();
		placer.init_region_options ();
		placer.init_cluster_masks ();
		placer.init_cluster_options();
		placer.init_notepad ();
		placer.init_delete_buttons ();
		placer.init_storage_buttons ();
		placer.check_for_empty_working_area ();
	}
}
})();



$(document).ready(function(){
	/* initialise placer */
	/* ================= */
	placer.init();
});
		
		
		
		
		
		
		
		
		
		
		