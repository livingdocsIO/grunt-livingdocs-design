





var navi = (function(){
	return {
		toggle_navi:function() {
			$(".naviblock .expandable").toggleClass("expanded");
			if ($(".naviblock .expandable").hasClass("expanded")) navi.show_navi();
			else navi.hide_navi();
		},
		
		show_navi:function() {
			var navi_width = $(".naviblock .expandable").width();
			if ($(".wrapper").width()<=600) navi_width = $(".wrapper").width();
			$(".naviblock .expandable").css("right", -navi_width+"px").show().animate({right: 0}, 500);
		},
		
		hide_navi:function() {
			$(".naviblock .expandable").removeClass("expanded");
			var navi_width = $(".naviblock .expandable").width();
			if ($(".wrapper").width()<=600) navi_width = $(".wrapper").width();
			$(".naviblock .expandable").animate({right: -navi_width}, 500, function(){$(this).hide()});
		},
		
		check_for_current_tag_sticky:function() {
			var height_logo = $(".logoblock").height();
			if ($(window).scrollTop() > height_logo + 4 ) $(".currentblock").addClass("sticky");
			else $(".currentblock").removeClass("sticky");
			if ( $(".currentblock").is(':hidden') ) $(".currentblock").fadeIn(250);
		},
		
		init:function() {
			/* toggling the navigation */
			$(".naviblock .navilink").click(function(){
				navi.toggle_navi();
			});
			
			/* search and favorites */
			var _search_term = "suchen";
			$(".naviblock .field").focus(function(){
				if ($(this).val()==_search_term) $(this).val('');
				$('.naviblock .search .suggestions').slideDown(250);
				$('.naviblock .search ul.favs').slideUp(250);
				$('.naviblock .expandable').css("overflow", "hidden");
			});
			
			$(".naviblock .field").blur(function(){
				if ($(this).val()=="") $(this).val(_search_term);
			});
			
			$(".naviblock .search").mouseleave(function(){
				$(".naviblock .search .suggestions").slideUp(250);
				$(".naviblock .search ul.favs").slideUp(250);
			});
			
			$(".naviblock .search a.fav").click(function(){
				$('.naviblock .search ul.favs').slideDown(250);
				$(".naviblock .search .suggestions").slideUp(250);
			});
			
			$('.naviblock .search ul.favs .delete').click(function(){
				$(this).parents("li").remove();
			});
			
			$('.naviblock .search .suggestions .fav').click(function(){
				$(this).find("img").attr("src", "media/img/main/icons/icon_fav_active.png");
				$('.naviblock .search ul.favs').append('<li><a href="#">'+$(this).parents("li").text()+'</a><span class="delete"><img src="media/img/main/icons/icon_delete.png" /></span></li>');
			});
		}
	}
})();



$(document).ready( navi.init );
$(window).scroll( navi.check_for_current_tag_sticky );
$(window).resize( navi.check_for_current_tag_sticky );

//document.addEventListener('touchmove', function(){$(".currentblock").hide();}, false); /* !! nicht ie8-tauglich!! */

