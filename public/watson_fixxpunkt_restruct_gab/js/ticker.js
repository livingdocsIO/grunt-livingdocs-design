	
	
	
	
	
	
	
	
$(document).ready(function(){
	
	$(".widget.ticker .collapsa:not(.inactive)").click(function(){
		$(this).toggleClass("expanded").siblings(".colltent").slideToggle().blur();
	});
	$(".widget.ticker .colltent:visible").siblings(".collapsa:not(.inactive)").addClass("expanded");
	
	$(".widget.ticker .main_result .collapse, .widget.ticker .main_result .expand").click(function(){
		$(".widget.ticker .main_result").toggleClass("expanded");
		$(this).blur();
	});
	
	$(".widget.ticker .tools a.order").click(function(){
		$(this).toggleClass("up").blur();
	});
	
});








