

/* image preloader */
/* =============== */
function preload_img(images) {
    var window_width = $(window).width();
    /* preload images only on desktop */
    if (window_width > 1000) {
	    $(images).each(function(){
	        $('<img/>')[0].src = this;
		});
	}
}
	

$(document).ready(function() {


	/* panorama */
	/* ======== */
	var panorama = (function(){
		return {
			position_panorama:function() {
				var buffer = 200;
				var top_pos = $(window).scrollTop();
				var bottom_pos = top_pos+$(window).height()-$('.widget.panorama').height();
				var pano_pos = $('.widget.panorama').offset().top;
				
				if (bottom_pos > pano_pos - buffer && top_pos < pano_pos + buffer) {
					var new_position = ( $('.widget.panorama').width() - $('.widget.panorama img').width() ) / ($(window).height()-$('.widget.panorama').height()) * (bottom_pos - pano_pos);
					if (new_position>0) new_position = 0;
					else if (new_position < ($('.widget.panorama').width() - $('.widget.panorama img').width()) ) new_position = -($('.widget.panorama img').width()-$('.widget.panorama').width());
					$(".widget.panorama img").stop(true, false).animate({"left": new_position},500 );
				}
			}
		}
	})();
	$(document).ready(function() {
		if ( $('.widget.panorama').length ) $(window).scroll(panorama.position_panorama);
	});
	
	
	
	
	
	/* flipper */
	/* ======= */
	$(document).ready(function() {
		$(".widget.flipper").click(function(){
			$(this).toggleClass("showback");
		});
	});




	/* video */
	/* ===== */
	var video = (function(){
		return {
			play:function(element, video_id) {
				element.html('<iframe src="http://www.youtube.com/embed/'+video_id+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
		}
	})();
	$(document).ready(function() {
		if ( $('.widget.video').length ) {
			$('.widget.video').click(function(){
				var id = $(this).attr("data-video_id");
				video.play($(this),id);
			});
		}
	});
	
	
	/* poll */
	/* ==== */
	var poll = (function(){
		return {
			highlight_vote_button:function(clicked_element) {
				var button = clicked_element.parents(".widget.poll").find("a.button");
				button.animate({
					'font-size': '1.75em', 'left': '0.75em'
				}, 500, 'swing' );
				button.parents('li').animate({
					'margin-top': '0.75em', 'margin-bottom': '0.75em'
				}, 500, 'swing' );
			},
		
			show_result:function(current_poll) {
				var current_results = [];
				var bubbles = current_poll.find("div.result .bubble");
				for (var counter=0; counter < bubbles.length; counter++) {
					current_results[counter] = parseInt ( bubbles.eq(counter).text() );
				}
				if ( current_poll.find("div.answers").length==1 ) {
					current_poll.find("div.answers").slideUp(500, 'swing', function(){
						current_poll.find("div.result").slideDown(200, 'linear', function() {
							poll.calculate_bubblesizes(current_poll, current_results);
						});
					});
				}
				else {
					current_poll.find("div.result").slideDown(200, 'linear', function() {
						poll.calculate_bubblesizes(current_poll, current_results);
					});
				}
			},
			
			calculate_bubblesizes:function(current_poll, current_results) {
				var max_diameter = current_poll.width() / 2.5;
				var max_height = ((current_poll.height()-current_poll.find(".result p").height()) / current_results.length)-30;
				if ( max_diameter > max_height && !current_poll.parents(".insert").length ) max_diameter = max_height;
				var max_area = max_diameter * max_diameter; /* in pixels */
				var max_bubble_width_percentage = 100 / (current_poll.find("div.result li").innerWidth()-30) * max_diameter;
				var max_value = Math.max.apply(Math, current_results);
				for (var counter=0; counter<current_results.length; counter++) {
					var current_area = current_results[counter] * max_area / max_value;
					var bubble_width_pixels = Math.sqrt(current_area);
					var bubble_width_percentage = 100 / (current_poll.find("div.result li").innerWidth()-30) * bubble_width_pixels; /* 30px = 2 * margin 15px */
					var bubble_margin = (max_bubble_width_percentage - bubble_width_percentage) / 2;
					var bubble_opacity = 1 - ( ( max_value - current_results[counter] ) / max_value );
					current_poll.find("div.result .bubble").eq(counter).text(current_results[counter]+"%").animate({
						'width': bubble_width_percentage+'%',
						'height': bubble_width_pixels+'px',
						'marginLeft': bubble_margin+'%',
						'line-height': bubble_width_pixels+'px',
						'opacity': bubble_opacity
					}, 500, 'swing' );
					current_poll.find("div.result li").eq(counter).animate({
						'height': bubble_width_pixels+'px'
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
			},
			
			submit_vote:function(clicked_element) {
				var current_poll = clicked_element.parents(".widget.poll");
				/* send answer to server */
				var poll_id = current_poll.find(".poll_id").val();
				var answer_id = current_poll.find("input.radio:checked").val();
				$.ajax("polls/vote/poll_id:"+poll_id+"/answer_id:"+answer_id)
					.done(function() {
						$.cookie("watson_poll_"+poll_id, "answered", { expires: 7, path: '/' });
						/* show results of poll */
						poll.show_result(current_poll);
					})
					.fail(function() { 
						current_poll.find("div.answers").html("<h2>Fehler</h2><p>Ihre Antwort konnte nicht zum Server geschickt werden.</p>"); 
					});
			}
		}
	})();
	$(document).ready(function() {
		var open_polls = $('.widget.poll:not(.closed)');
		var closed_polls = $('.widget.poll.closed');
		
		if ( open_polls.length ) {
			/* bind click on poll-option answer fields */
			open_polls.find("input").click(function(){
				poll.highlight_vote_button($(this));
			});
			/* bind lick on submit button */
			open_polls.find("a.button").click(function(){
				poll.submit_vote($(this));
			});
			
			for (var counter=0; counter<open_polls.length; counter++) {
				var poll_id = open_polls.eq(counter).find(".poll_id").val();
				var cookie = $.cookie("watson_poll_"+poll_id);
				if ( cookie == "answered") {
					open_polls.eq(counter).find("div.answers").remove();
					poll.show_result(open_polls.eq(counter));
				}
			}
		}
		
		if ( closed_polls.length ) {
			/* loop through all closed polls and show their results */
			for (var counter=0; counter < closed_polls.length; counter++) {
				poll.show_result(closed_polls.eq(counter));
			}
		}
	});
	
	
	
	
	
	
	
});