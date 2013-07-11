


$(document).ready(function() {



	/* panorama */
	/* ======== */
	var panorama = (function(){
		return {
			position_panorama:function() {
				var buffer = 200;
				var top_pos = $(window).scrollTop();
				var bottom_pos = top_pos+$(window).height()-$('.panorama').height();
				var pano_pos = $('.panorama').offset().top;
				
				if (bottom_pos > pano_pos - buffer && top_pos < pano_pos + buffer) {
					var new_position = ( $('.panorama').width() - $('.panorama img').width() ) / ($(window).height()-$('.panorama').height()) * (bottom_pos - pano_pos);
					if (new_position>0) new_position = 0;
					else if (new_position < ($('.panorama').width() - $('.panorama img').width()) ) new_position = -($('.panorama img').width()-$('.panorama').width());
					$(".panorama img").stop(true, false).animate({"left": new_position},500 );
				}
			}
		}
	})();
	$(document).ready(function() {
		if ( $('.panorama').length ) $(window).scroll(panorama.position_panorama);
	});
	
	
	
	
	
	/* flipper */
	/* ======= */
	$(document).ready(function() {
		$(".flipper").click(function(){
			$(this).toggleClass("showback");
		});
	});


	
	
	
	/* poll */
	/* ==== */
	var poll = (function(){
		return {
			highlight_vote_button:function() {
				$(".widget.poll a.button").animate({'font-size': '1.75em', 'left': '0.75em'}, 500, 'swing' );
				$(".widget.poll a.button").parents('li').animate({'margin-top': '0.75em', 'margin-bottom': '0.75em'}, 500, 'swing' );
			},
		
			show_result:function() {
				var current_poll = $(this).parents(".widget.poll");
				var current_results = [64,30,6];
				current_poll.find("div.answers").slideUp(500, 'swing', function(){
					current_poll.find("div.result").slideDown(200, 'linear', function() {
						poll.calculate_bubbles(current_poll, current_results);
					});
				});
			},
			
			calculate_bubbles:function(current_poll, current_results) {
				var max_diameter = current_poll.width() / 2.5;
				if ( max_diameter > current_poll.height() / current_results.length && !current_poll.parents(".insert").length ) max_diameter = current_poll.height() / current_results.length;
				var max_area = max_diameter * max_diameter; /* in pixels */
				var max_bubble_width_percentage = 100 / (current_poll.find("div.result li").innerWidth()-30) * max_diameter;
				for (var counter=0; counter<current_results.length; counter++) {
					var current_area = current_results[counter] * max_area / current_results[0];
					var bubble_width_pixels = Math.sqrt(current_area);
					var bubble_width_percentage = 100 / (current_poll.find("div.result li").innerWidth()-30) * bubble_width_pixels; /* 30px = 2 * margin 15px */
					var bubble_margin = (max_bubble_width_percentage - bubble_width_percentage) / 2;
					var bubble_opacity = 1 - (counter * (1 / current_results.length) );
					current_poll.find("div.result .bubble").eq(counter).text(current_results[counter]+"%").animate({
						'width': bubble_width_percentage+'%',
						'height': bubble_width_pixels+'px',
						'marginLeft': bubble_margin+'%',
						'line-height': bubble_width_pixels+'px',
						'opacity': bubble_opacity
					}, 500, 'swing' );
				}
				setTimeout(function(){poll.calculate_answer_position(current_poll, current_results)}, 1000);	
			},
			
			calculate_answer_position:function(current_poll, current_results) {
				for (var counter=0; counter<current_results.length; counter++) {
					var bubble_width = bubble_height = current_poll.find("div.result .bubble").eq(counter).height();
					var bubble_width_percentage = 100 / (current_poll.find("div.result li").innerWidth()-30) * ( bubble_width+10 ); /* 30px = 2 * margin 15px /// 10px = bubble margin */ 
					var bubble_margin = parseInt ( current_poll.find("div.result .bubble").eq(counter).css("marginLeft") );
					var bubble_margin_percentage = 100 / (current_poll.find("div.result li").innerWidth()-30) * ( bubble_margin+10 ); 
					var buffer_percentage = 0;
					current_poll.find("div.result .answertext").eq(counter).css("width", (100 - bubble_width_percentage - buffer_percentage - bubble_margin_percentage) + "%");
					var text_height = current_poll.find("div.result .answertext").eq(counter).height();
					current_poll.find("div.result .answertext").eq(counter).css("marginTop", ((bubble_height-text_height)/2)+"px");
				}	
				current_poll.find("div.result .answertext").fadeIn(500);		
			}
		}
	})();
	$(document).ready(function() {
		if ( $('.widget.poll').length ) {
			$(".widget.poll input").click(poll.highlight_vote_button);
			$(".widget.poll a.button").click(poll.show_result);
		}
	});
	
	
	
	
	
	
	
});