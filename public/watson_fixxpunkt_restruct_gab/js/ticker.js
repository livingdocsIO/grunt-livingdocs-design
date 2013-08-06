	
	


var ticker = (function(){


	return {
		/* handle click on fan button */
		/* ========================== */
		handle_fan_click:function(clicked_element) {
			var opposite_button = clicked_element.parents(".widget.ticker").find(".fans").not(clicked_element);
			if (opposite_button.hasClass("your_vote")) {
				opposite_button.removeClass("your_vote");
				var new_number = opposite_button.find(".number").text()-1;
				opposite_button.find(".number").text(new_number);
			}
			if (clicked_element.hasClass("your_vote")) {
				var new_number = clicked_element.find(".number").text()-1;
				clicked_element.find(".number").text(new_number);
			}
			else {
				var new_number = parseInt(clicked_element.find(".number").text())+1;
				clicked_element.find(".number").text(new_number);
			}
			clicked_element.toggleClass("your_vote");
			ticker.update_fan_plural();
		},
		/* show or hide the 's' in the fan button display */
		/* ============================================== */
		update_fan_plural:function() {
			var fan_buttons = $(".widget.ticker .fans");
			for (var counter=0; counter < fan_buttons.length; counter++) {
				var current_button = fan_buttons.eq(counter);
				if (current_button.find(".number").text()=="1") {
					current_button.find(".plural").hide();
				}
				else {
					current_button.find(".plural").show();
				}
			}
		},
		init:function() {
			/* collapsa */
			/* ======== */
			$(".widget.ticker .collapsa:not(.inactive)").click(function(){
				$(this)	.toggleClass("expanded")
						.siblings(".colltent")
						.slideToggle()
						.blur();
			});
			$(".widget.ticker .colltent:visible")	.siblings(".collapsa:not(.inactive)")
													.addClass("expanded");
			
			$(".widget.ticker .main_result .collapse, .widget.ticker .main_result .expand").click(function(){
				$(this)	.parents(".widget.ticker")
						.find(".main_result")
						.toggleClass("expanded");
				$(this).blur();
			});
			
			/* tools */
			/* ===== */
			$(".widget.ticker .tools a.order").click(function(){
				$(this).toggleClass("up").blur();
				/* reverse li-elements in timeline ul */
				ul = $(this).parents(".widget.ticker").find(".timeline");
				ul.children().each(function(i,li){ul.prepend(li)})
			});
			
			$(".widget.ticker .tools a.alarm, .widget.ticker .tools a.automode").click(function(){
				$(this).toggleClass("off").blur();
			});
			
			/* fan-buttons */
			/* =========== */
			$(".widget.ticker .fans").click(function(){
				ticker.handle_fan_click($(this));
			});
			
			ticker.update_fan_plural();
		}
	}
	
	
})();
	
	
	
	
$(document).ready(function(){
	if ($(".widget.ticker").length>0) ticker.init();
});








