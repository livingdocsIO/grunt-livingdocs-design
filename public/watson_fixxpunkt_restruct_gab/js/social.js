









var social = (function(){
	return {
		toggle_social:function() {
			$(".socialblock .expandable").toggleClass("expanded");
			if ($(".socialblock .expandable").hasClass("expanded")) social.show_social();
			else social.hide_social();
		},
		
		show_social:function() {
			var social_width = $(".socialblock .expandable").width();
			if ($(".wrapper").width()<=600) social_width = $(".wrapper").width();
			$(".socialblock .expandable").css("left", -social_width+"px").show().animate({left: 0}, 500);
		},
		
		hide_social:function() {
			$(".socialblock .expandable").removeClass("expanded");
			var social_width = $(".socialblock .expandable").width();
			if ($(".wrapper").width()<=600) social_width = $(".wrapper").width();
			$(".socialblock .expandable").animate({left: -social_width}, 500, function(){$(this).hide()});
		},
		
		init:function() {
			/* toggling the socialblock */
			$(".socialblock .sociallink").click(function(){
				social.toggle_social();
			});
			
			$(".socialblock .field").focus(function(){
				$(this).val('');
			});
		}
	}
})();

$(document).ready( social.init );

















