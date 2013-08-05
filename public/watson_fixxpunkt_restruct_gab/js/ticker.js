	
	
	
	
	
	
	
	
$(document).ready(function(){
	
	$(".collapsa").click(function(){
		$(this).siblings(".colltent").slideToggle();
		$(this).blur();
	});
	
	$(".widget.ticker .main_result .collapse, .widget.ticker .main_result .expand").click(function(){
		$(".widget.ticker .main_result").toggleClass("expanded");
		$(this).blur();
	});
	
});








