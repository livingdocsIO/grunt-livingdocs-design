







var placer = (function(){
var top_region = 0;
var top_pos = 0;
var scroll_timeout;

/* this json holds all html-snippets */
/* ================================= */
var templates = {
	"Story": { "url": "placer_snippet_story.html" },
	"Poll": { "url": "placer_snippet_special_editable.html" },
	"HTML": { "url": "placer_snippet_special_editable.html" },
	"Tag Teaser": { "url": "placer_snippet_special_noneditable.html" },
	"Cluster": { "url": "placer_snippet_cluster.html" },
	"Autocluster": { "url": "placer_snippet_autocluster.html" }
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
			var new_pos = iframes[counter].find(".region").not(":has(.region)").eq(top_region).offset().top;
			if (new_pos != undefined) {
				iframes[counter].stop(true, true);
				iframes[counter].animate({ scrollTop: new_pos-(top_pos/scales[counter]) }, duration );
				//iframes[counter].find(".region").not(":has(.region)").parents(".cluster").stop().animate({ opacity: 0.2 }, duration );
				//iframes[counter].find(".region").not(":has(.region)").eq(top_region).parents(".cluster").stop().animate({ opacity: 1 }, duration );
			}
		}
	},
	/* reload preview iframe-content */
	/* ===================== */
	reload_iframes:function() {
		$("iframe.preview").attr("src", "front_bespielt.html");
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
		new_element.find(".rank").html("#"+values.rank);
		if (values.rank<=10) new_element.find(".rank").addClass("topten");
		else if (values.rank<=30) new_element.find(".rank").addClass("topthirty");
		else if (values.rank<=100) new_element.find(".rank").addClass("toponehundred");
		new_element.find(".details strong").html(values.title).after("<br/>Vor "+values.time+" Minuten<br/>"+values.author);
		new_element.find(".note").attr("data-text", values.note);
		placer.update_note_icons();
		for (var counter=0; counter<values.performance.length; counter++ ) {
			var current_val = values.performance[counter];
			var margin = current_val * 80 / 100;
			new_element.find(".bar").eq(counter).css("marginTop", margin);
		}
	},
	/* fill in values into new placed special_element */
	/* ============================================== */
	fill_in_special_element_values:function( new_element, values ) {
		new_element.find(".type").html(values.type+"<br/>"+values.title);
	},
	/* basic fill in element */
	/* ===================== */
	fill_in_element:function( new_element, values ) {
		new_element.attr("data-element", JSON.stringify(values));
		if (values.type == "Story") placer.fill_in_story_values( new_element, values );
		else placer.fill_in_special_element_values( new_element, values );
		placer.init_draggable_clusters_and_regions();
	},
	/* an element has been dropped on a region */
	/* ======================================= */
	drop_on_region:function( event, ui ) {
		/* check if cluster is already full */
		if ($(this).siblings(".region").length<5) {
			/* region dropped on another region */
			if ( ui.draggable.hasClass("region") ) {
				$(this).after(ui.draggable);
			}
			/* new element dropped on a region */
			else if ( ui.draggable.hasClass("element") ) {
				var values = $.parseJSON( ui.draggable.attr("data-element") );
				if (values.id!=-1) {
					$(this).after(templates[values.type].snippet);
					var new_element = $(this).next(".region");
					placer.fill_in_element(new_element,values);
				}
			}
			ui.draggable.css("top", 0).css("left", 0);
			placer.reload_iframes();
			placer.update_cluster_masks();
		}
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
				if (values.id!=-1) {
					$(this).append(templates[values.type].snippet);
					var new_element = $(this).find(".region");
					placer.fill_in_element(new_element,values);
					placer.init_draggable_clusters_and_regions();
				}
			}
		}
		/* new cluster dropped on a cluster */
		else if ( ui.draggable.hasClass("container") ) {
			var values = $.parseJSON( ui.draggable.attr("data-element") );
			if (values.id!=-1) {
				$(this).after(templates[values.type].snippet);
				if ( values.type=="Autocluster" ) {
					var new_element = $(this).next(".cluster");
					placer.fill_in_element(new_element, values);
				}
				placer.init_draggable_clusters_and_regions();
			}
		}
		ui.draggable.css("top", 0).css("left", 0);
		placer.reload_iframes();
		placer.update_cluster_masks();
	},
	/* initialise clusters and regions in workspace */
	/* ============================================ */
	init_draggable_clusters_and_regions:function() {
		$( ".region:not(.disabled)" ).draggable({ 
			revert: "invalid",
			axis: "y",
			start: function(){$(".notepad").hide();}
		});
		$( ".cluster:not(.disabled)" ).draggable({
			revert: "invalid",
			axis: "y",
			start: function(){$(".notepad").hide();}
		});
		
		$( ".region:not(.disabled)" ).droppable({ drop: placer.drop_on_region });
		$( ".cluster" ).droppable({ drop: placer.drop_on_cluster });
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
			alert("i need a change!");
			/* dynamic element search here!!!! */
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
			$(".tools .search ul").show();
		});
		
		/* tag search */
		$(".tools input.tagselect").keyup(function(){
			var value = $(this).val();
			var id = 12345;
			/* dynamic tag search here!!!! */
			var data = $.parseJSON( $(this).parents("li").attr("data-element") );
			data["title"] = value;
			data["id"] = id;
			var new_data = JSON.stringify(data);
			$(this).parents("li").attr("data-element", new_data);
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
		placer.reload_iframes();
	},
	/* initialise cluster-layout options */
	/* ================================= */
	init_cluster_masks:function() {
		$(document).on( "click", ".mask", placer.clicked_mask );
		placer.update_cluster_masks ();
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
		$(document).on( "blur", ".notepad textarea", function(){$(".notepad").hide();} );
		$(".notepad").keyup(placer.note_typed);
		placer.update_note_icons();
	},
	
	/* =============== */
	/* === STORAGE === */
	/* =============== */
	
	/* revert to old state */
	/* =================== */
	storage_revert:function() {
		location.reload();	
	},
	/* save new state */
	/* ============== */
	storage_save:function() {
		alert("save!");	
	},
	/* put state online */
	/* ================ */
	storage_golive:function() {
		alert("i am alive!");	
	},
	/* initialise save, revert and live! buttons */
	/* ========================================= */
	init_storage_buttons:function() {
		$(".button.revert").click(placer.storage_revert);
		$(".button.save").click(placer.storage_save);
		$(".button.live").click(placer.storage_golive);
	},
	/* load html-snippets from files */
	/* ============================= */
	init_snippets:function() {
		$.each( templates, function( key, value ) {
			$.ajax({
	         	url:    templates[key].url,
	         	success: function(result) {
	         		templates[key]["snippet"]=result;
	         	},
	         	async: false
	    	});
		});
	},
	
	/* =============== */
	/* === VARIOUS === */
	/* =============== */
	
	/* initialise delete buttons */
	/* ========================= */
	init_delete_buttons:function() {
		$(document).on( "click", ".cluster_delete", function(){
			$(".notepad").hide();
			$(this).parents(".cluster").remove();
			placer.position_meter();
			placer.position_iframes(0);
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
			placer.update_cluster_masks ();
			placer.position_meter();
			placer.position_iframes(0);
		} );
	},
	/* initialise placer */
	/* ================= */
	init:function() {
		placer.init_snippets ();
		$(window).scroll(placer.start_positioning);
		$(window).resize(placer.start_positioning);
		$('iframe.preview').load(function(){
			$(this).contents().find("html, body").find(".wrapper").css("marginBottom", "2000px");
			placer.position_meter();
			placer.position_iframes(0);
		});
		placer.init_draggable_toolelements ();
		placer.init_pulldowns ();
		placer.init_search_fields ();
		placer.init_draggable_clusters_and_regions ();
		placer.init_cluster_masks ();
		placer.init_notepad ();
		placer.init_delete_buttons ();
		placer.init_storage_buttons ();
	}
}
})();



$(document).ready(function(){
	/* initialise placer */
	/* ================= */
	placer.init();
});
		
		
		
		
		
		
		
		
		
		
		