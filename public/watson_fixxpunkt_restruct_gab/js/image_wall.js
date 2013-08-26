






var image_wall = (function(){

	var code_zoom = "<div class='zoom'><div class='arrow'></div><div class='img_wrapper'></div><div class='caption'></div></div>";
	var highend_animations = true;
	
	return {
	
		adjust_sizes:function() {
			var imageboxes = $(".image_wall .imagebox");
			for (var counter=0; counter<imageboxes.length; counter++) {
				var current_imagebox = imageboxes.eq(counter);
				var current_image = current_imagebox.find("img");
				var target_width = current_imagebox.width();
				var target_height = parseInt( current_imagebox.css("paddingBottom") );
				var image_width = current_image.width();
				var image_height = current_image.height();
				
				var target_proportions = target_width / target_height;
				var image_proportions = image_width / image_height;
				
				if (target_proportions>image_proportions) {
					current_image.css("width", "100%").css("height", "auto");
					var adjusted_image_height = current_image.height();
					var vertical_adjust = ( target_height - adjusted_image_height ) / 2;
					current_image.css("top", vertical_adjust+"px");
				}
				else {
					current_image.css("height", target_height+"px").css("width", "auto");
					var adjusted_image_width = current_image.width();
					var horizontal_adjust = ( target_width - adjusted_image_width ) / 2;
					current_image.css("left", horizontal_adjust+"px");
				}
			}	
		},
		
		fill_in_image:function(thumbnail) {
			var index = thumbnail.parents(".imagebox").attr("data-index");
			var zoom = thumbnail.parents(".imagerow").next(".zoom");
			zoom.find(".img_wrapper").html("<img src='"+thumbnail.attr("src")+"' />");
			zoom.find(".caption").html(thumbnail.attr("alt"));
			if ( thumbnail.width() > thumbnail.height() ) zoom.find("img").addClass("landscape");
			else zoom.find("img").css("height", 0.75* $(".image_wall").width());
			var left_pixels = thumbnail.position().left + (thumbnail.width()/2);
			var left_percent = 100 / $(".image_wall").width() * left_pixels;
			zoom.find(".arrow").css("left", left_percent+"%");
			zoom.attr("data-index", index);
		},
		
		open_zoom:function(thumbnail) {
			image_wall.fill_in_image(thumbnail);
			var zoom = thumbnail.parents(".imagerow").next(".zoom");
			if (highend_animations) {
				zoom.slideDown();
				zoom.find(".arrow").fadeIn(1000);
			}
			else {
				zoom.show();
				zoom.find(".arrow").show();
			}
			$('html, body').animate({ scrollTop: zoom.offset().top-75 }, 1000);
		},
		
		close_zoom:function(zoom) {
			if (highend_animations) {
				zoom.find(".arrow").fadeOut(function(){
					zoom.slideUp(function(){
						$(this).remove();
					});
				});
			}
			else {
				zoom.remove();
			}
		},
		
		toggle_image:function() {
			var thumbnail = $(this);
			var zoom = thumbnail.parents(".imagerow").next(".zoom");
			if ( zoom.length ) {
				var zoom_index = zoom.attr("data-index");
				var thumb_index = thumbnail.parents(".imagebox").attr("data-index");
				if (zoom_index!=thumb_index) {
					image_wall.fill_in_image(thumbnail);
				}
				else {
					image_wall.close_zoom(zoom);
				}
			}
			else {
				thumbnail.parents(".imagerow").after(code_zoom);
				image_wall.open_zoom(thumbnail);
			}
		},
		
		setup_grid:function() {
			$(".image_wall img").wrap("<div class='imagebox' />");
			
			for (var wall_counter=0; wall_counter<$(".image_wall").length; wall_counter++) {
				var current_wall = $(".image_wall").eq(wall_counter);
				var imageboxes = current_wall.find(".imagebox");
				/* determine imagebox-style */
				for (var counter=0; counter<imageboxes.length; counter++) {
					var current_imagebox = imageboxes.eq(counter).attr("data-index", counter);
					var next_imagebox = imageboxes.eq(counter+1).attr("data-index", counter+1);
					var after_next_imagebox = imageboxes.eq(counter+2).attr("data-index", counter+2);
					
					current_imagebox.before("<div class='imagerow'></div>");
					
					var current_landscape = ( current_imagebox.find("img").width() > current_imagebox.find("img").height() );
					var next_landscape = ( next_imagebox.find("img").width() > next_imagebox.find("img").height() );
					var after_next_landscape = ( after_next_imagebox.find("img").width() > after_next_imagebox.find("img").height() );
					
					/* three portraits in a row */
					if (!current_landscape && !next_landscape && !after_next_landscape) {
						current_imagebox.addClass("width_33");
						next_imagebox.addClass("width_33");
						after_next_imagebox.addClass("width_33");
						$(".imagerow:last")
							.append(current_imagebox)
							.append(next_imagebox)
							.append(after_next_imagebox);
						counter+=2;
					}
					/* two landscapes and one portrait in any order */
					else if (current_landscape+next_landscape+after_next_landscape == 2) {
						if (current_landscape) current_imagebox.addClass("width_40").addClass("height_25");
						else current_imagebox.addClass("width_20").addClass("height_25");
						if (next_landscape) next_imagebox.addClass("width_40").addClass("height_25");
						else next_imagebox.addClass("width_20").addClass("height_25");
						if (after_next_landscape) after_next_imagebox.addClass("width_40").addClass("height_25");
						else after_next_imagebox.addClass("width_20").addClass("height_25");
						$(".imagerow:last")
							.append(current_imagebox)
							.append(next_imagebox)
							.append(after_next_imagebox);
						counter+=2;
					}
					/* one portrait, one landscape */
					else if (!current_landscape && next_landscape) {
						if (Math.random()>0.5) {
							current_imagebox.addClass("width_33");
							next_imagebox.addClass("width_66");
						}
						else {
							current_imagebox.addClass("width_25");
							next_imagebox.addClass("width_75");
						}
						$(".imagerow:last")
							.append(current_imagebox)
							.append(next_imagebox);
						counter++;
					}
					/* one landscape, one portrait */
					else if (current_landscape && !next_landscape) {
						if (Math.random()>0.5) {
							current_imagebox.addClass("width_66");
							next_imagebox.addClass("width_33");
						}
						else {
							current_imagebox.addClass("width_75");
							next_imagebox.addClass("width_25");
						}
						$(".imagerow:last")
							.append(current_imagebox)
							.append(next_imagebox);
						counter++;
					}
					/* two portraits */
					else if (!current_landscape && !next_landscape) {
						current_imagebox.addClass("width_50");
						next_imagebox.addClass("width_50");
						$(".imagerow:last")
							.append(current_imagebox)
							.append(next_imagebox);
						counter++;
					}
					/* three landscapes in a row */
					else if (current_landscape && next_landscape && after_next_landscape) {
						if (Math.random()>0.5) {
							current_imagebox.addClass("width_33").addClass("height_25");
							next_imagebox.addClass("width_33").addClass("height_25");
							after_next_imagebox.addClass("width_33").addClass("height_25");
							$(".imagerow:last")
								.append(current_imagebox)
								.append(next_imagebox)
								.append(after_next_imagebox);
							counter+=2;
						}
						else {
							current_imagebox.addClass("width_100");
							$(".imagerow:last")
								.append(current_imagebox);
						}
					}
					/* two landscapes */
					else if (current_landscape && next_landscape) {
						current_imagebox.addClass("width_50").addClass("height_25");
						next_imagebox.addClass("width_50").addClass("height_25");
						$(".imagerow:last")
							.append(current_imagebox)
							.append(next_imagebox);
						counter++;
					}
					/* something funny happened on the way to the circus */
					else {
						alert("not able to determine imagebox-style");
					}
				}
				
				if ( current_wall.find(".imagerow:last .imagebox").length == 1 ) {
					current_wall.find(".imagerow:last .imagebox").addClass("width_100");
				}
			}
		},
		
		init:function() {
			/* only execute if there's an image wall on the page */
			if ($(".image_wall").length) {
				var num_images = 0;
				$(".image_wall img").load(function(){
					num_images++;
					/* start setup when all images are loaded */
					if ( $(".image_wall img").length == num_images ) {
						image_wall.setup_grid ();
						image_wall.adjust_sizes();
						$(".image_wall .imagebox img").click(image_wall.toggle_image);
						$(".image_wall").hide().css("visibility", "visible").fadeIn(1000);
					}
				});
				/* recalculate images while scaling window */
				$(window).resize( image_wall.adjust_sizes );
			}
		}
		
	}
})();

$(document).ready( image_wall.init );
		
		
		
		
		
		
		
		
		
		
		