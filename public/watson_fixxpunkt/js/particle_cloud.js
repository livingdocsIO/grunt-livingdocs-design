






function isiPhone(){
    return (
        (navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1)
    );
}




$(document).ready(function(){
	



	/* initializing the particles */
	/* ========================== */
	var max_width = $(".particle_cloud").width();
	var max_height = $(".particle_cloud").height();
	var iphone_scrollquotient = 10;
	var scrollquotient = 3;
	var particle_scale_per_layer = 0.2;
	for (var counter_layer=0; counter_layer<$(".particle_cloud .layer").length; counter_layer++) {
		var current_layer = $(".particle_cloud .layer").eq(counter_layer);
		var num_particles = current_layer.find(".particle").length;
		for ( var counter_particle=0; counter_particle<num_particles; counter_particle++) {
			var current_particle = $(".particle_cloud .layer:eq("+counter_layer+") .particle").eq(counter_particle);
			var particle_width = (1+(counter_layer * particle_scale_per_layer)) * current_particle.outerWidth();
			var x_pos = (counter_layer * particle_scale_per_layer * current_particle.outerWidth() / 2) + ( Math.random() * (max_width-particle_width) );
			var x_pos_percentage = 100 / max_width * x_pos;
			var y_pos = 0.85 * (counter_particle+1) * max_height /  num_particles * (1+(counter_layer / scrollquotient));/* / iphone_scrollquotient */
			current_particle.css("left", x_pos_percentage+"%");
			current_particle.css("top", y_pos+"px");
		}
	}
	
	
	/* displaying the history dates */
	/* ============================ */
	function handle_history_dates() {
		var scroll_from_bottom = $("body").height() - $(window).scrollTop() - $(window).height();
		if (scroll_from_bottom<3000) $(".particle_cloud .date .current").css("opacity", scroll_from_bottom/3000).css("transform", "scale("+scroll_from_bottom/3000+")");
		if (scroll_from_bottom<1000) {
			$(".particle_cloud .date .previous").slideDown(500);
			$(".particle_cloud .date .current").slideUp(500);
		}
		else {
			$(".particle_cloud .date .previous").slideUp(500);
			$(".particle_cloud .date .current").slideDown(500);
		}
		if ($(window).scrollTop()<1000) $(".particle_cloud .date .next").slideDown(500);
		else $(".particle_cloud .date .next").slideUp(500);
	}
	
	
	/* scrolling */
	/* ========= */
	var last_y = 0;
	if (!isiPhone()) {
		$(window).scroll(function(){
			var current_y = $(window).scrollTop();
			if ($(".particle_cloud").hasClass("mini")) current_y = $(window).scrollTop() + ($(window).height()/2) - $(".particle_cloud").offset().top;
			var num_layers = $(".particle_cloud .layer").length;
			for ( var counter=1; counter<num_layers; counter++) {
				var current_layer = $(".particle_cloud .layer").eq(counter);
				var new_top = ((last_y-current_y)*counter/scrollquotient) + parseInt(current_layer.css("top"));
				current_layer.css("top", new_top+"px");
			}
			last_y = current_y;
			
			if ($(".particle_cloud").hasClass("full_page")) handle_history_dates();
		});
	}
	else {
		$(window).scroll(function(){
			clearTimeout($.data(this, "scrollTimer"));
		    $.data(this, "scrollTimer", setTimeout(function() {
		        var current_y = $(window).scrollTop();
				if ($(".particle_cloud").hasClass("mini")) current_y = $(window).scrollTop() + ($(window).height()/2) - $(".particle_cloud").offset().top;
		        var num_layers = $(".particle_cloud .layer").length;
				for ( var counter=1; counter<num_layers; counter++) {
					var current_layer = $(".particle_cloud .layer").eq(counter);
					var new_top = ((last_y-current_y)*counter/iphone_scrollquotient) + parseInt(current_layer.css("top"));
					current_layer.stop(true, false).animate({"top": new_top+"px"},500 );
				}
				last_y = current_y;
				
				if ($(".particle_cloud").hasClass("full_page")) handle_history_dates();
		    }, 100));
		});
	}
	
	
	

});







































