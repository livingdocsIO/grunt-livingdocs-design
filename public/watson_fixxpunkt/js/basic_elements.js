


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
	
	
	
	
	
	
	/* poll */
	/* ==== */
	var poll = (function(){
		return {
			show_result:function() {
				var current_poll = $(this).parents(".region.poll");
				var current_results = [48,33,19];
				current_poll.find("div.answers").slideUp(500, 'swing', function(){
					current_poll.find("div.result").slideDown(200, 'linear', function() {
						poll.calculate_bubbles(current_poll, current_results);
					});
				});
			},
			
			calculate_bubbles:function(current_poll, current_results) {
				for (var counter=0; counter<current_results.length; counter++) {
					var bubble_width_pixels = current_results[counter]*2;
					var bubble_width_percentage = 100 / (current_poll.find("div.result li").innerWidth()-30) * bubble_width_pixels; /* 30px = 2 * margin 15px */
					current_poll.find("div.result .bubble").eq(counter).animate({
						'width': bubble_width_percentage+'%',
						'height': bubble_width_pixels+'px',
						'line-height': bubble_width_pixels+'px'
					}, 500, 'swing' );
				}
				setTimeout(function(){poll.calculate_answer_position(current_poll, current_results)}, 1000);	
			},
			
			calculate_answer_position:function(current_poll, current_results) {
				for (var counter=0; counter<current_results.length; counter++) {
					var bubble_width = bubble_height = current_poll.find("div.result .bubble").eq(counter).height();
					var bubble_width_percentage = 100 / (current_poll.find("div.result li").innerWidth()-30) * ( bubble_width+10 ); /* 30px = 2 * margin 15px /// 10px = bubble margin */ 
					var buffer_percentage = 10;
					current_poll.find("div.result .answertext").eq(counter).css("width", (100 - bubble_width_percentage - buffer_percentage) + "%");
					var text_height = current_poll.find("div.result .answertext").eq(counter).height();
					current_poll.find("div.result .answertext").eq(counter).css("marginTop", ((bubble_height-text_height)/2)+"px");
				}	
				current_poll.find("div.result .answertext").fadeIn(500);			
			}
		}
	})();
	$(document).ready(function() {
		if ( $('.region.poll').length ) $(".region.poll a.button").click(poll.show_result);
	});
	
	
	
	
	
	
	
});