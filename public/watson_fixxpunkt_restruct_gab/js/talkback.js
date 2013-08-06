	
	
	
	
	
	
	
	
$(document).ready(function(){
	
	/* preload images (function in widgets.js) */
	/* ======================================= */
	preload_img([
    	"media/img/main/icons/icon_love_dark.png",
    	"media/img/main/icons/icon_hate_dark.png",
    	"media/img/main/icons/icon_love_magenta.png",
    	"media/img/main/icons/icon_hate_magenta.png",
    	"media/img/main/icons/icon_picture.png"
	]);

	/* textareas */
	/* ========= */
	$(".widget.talkback textarea").focus(function(){
		/* reset all textareas */
		$(".widget.talkback textarea").removeClass("focussed");
		for (var counter=0; counter<$(".widget.talkback textarea").length; counter++ ) {
			if ( $(".widget.talkback textarea").eq(counter).text() == "" ) {
				var new_value = $(".widget.talkback textarea").eq(counter).attr("data-default");
				$(".widget.talkback textarea").eq(counter).text(new_value);
				$(".widget.talkback textarea").siblings(".additional").removeClass("expanded");
			}
		}
		/* make current textarea active */
		$(this).addClass("focussed");
		$(this).siblings(".additional").addClass("expanded");
		if ( $(this).text() == $(this).attr("data-default") ) $(this).empty();
	});
	
	/* textfields */
	/* ========== */
	$(".widget.talkback input.field").focus(function(){
		/* reset all fields */
		for (var counter=0; counter<$(".widget.talkback input.field").length; counter++ ) {
			if ( $(".widget.talkback input.field").eq(counter).val() == "" ) {
				var new_value = $(".widget.talkback input.field").eq(counter).attr("data-default");
				$(".widget.talkback input.field").eq(counter).val(new_value);
			}
		}
		/* make current field active */
		if ( $(this).val() == $(this).attr("data-default") ) $(this).val("");
	});
	
	/* love/hate-buttons */
	/* ================= */
	$(".widget.talkback .love, .widget.talkback .hate").click(function(){
		var opposite_button = $(this).siblings(".love, .hate").not(this);
		if (opposite_button.hasClass("your_vote")) {
			opposite_button.removeClass("your_vote");
			opposite_button.text(opposite_button.text()-1);
		}
		if ($(this).hasClass("your_vote")) {
			$(this).text($(this).text()-1);
		}
		else {
			$(this).text(parseInt($(this).text())+1);
		}
		$(this).toggleClass("your_vote");
	});
	
	/* expand order options */
	/* ==================== */
	$(".widget.talkback .new_comment .tools a.currentorder").click(function(){
		$(".widget.talkback .new_comment .tools ul.orderoptions").toggleClass("expanded");
	});
	
	/* expand report form */
	/* ==================== */
	$(".widget.talkback .report").click(function(){
		$(this).siblings(".reportform").toggleClass("expanded");
	});
});








