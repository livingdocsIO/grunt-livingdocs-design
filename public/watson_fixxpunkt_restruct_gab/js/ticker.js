	
	
	
	
	
	
	
	
$(document).ready(function(){
	
	$(".collapsa").click(function(){
		$(this).toggleClass("expanded").siblings(".colltent").slideToggle();
		$(this).blur();
	});
	$(".colltent:visible").siblings(".collapsa").addClass("expanded");
	

	
	$(".widget.ticker .main_result .collapse, .widget.ticker .main_result .expand").click(function(){
		$(".widget.ticker .main_result").toggleClass("expanded");
		$(this).blur();
	});
	
});








