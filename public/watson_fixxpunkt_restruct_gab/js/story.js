


var inserts = (function(){
	return {
		adjust_cinemascope_inserts:function() {
			if ( $(".insert.cinemascope").length>0 ) {
				var window_width = $(window).width();
				if (window_width>1000) {
					var new_left = $(".wrapper").offset().left + parseInt( $(".story").css("marginLeft") );
					$(".insert.cinemascope").width(window_width);
					$(".insert.cinemascope").css("left", -new_left);
				}
				else {
					$(".insert.cinemascope").css("width", "inherit");
					$(".insert.cinemascope").css("left", "inherit");
				}
			}
		}
	}
})();
	

$(window).resize(inserts.adjust_cinemascope_inserts);
$(document).ready(inserts.adjust_cinemascope_inserts);