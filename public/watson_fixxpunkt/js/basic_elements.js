


$(document).ready(function() {



	/* panorama */
	/* ======== */
	function position_panorama() {
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
	
	/*if ( $('.panorama').length )*/ $(window).scroll(position_panorama);
	/* ^^^ sobald upfront-javascript aus der story draussen ist rein mit diesem check. im moment wird er erst nach dem upfront javascript ausgeführt und gibt daher immer false zurück */
	
	
	
});