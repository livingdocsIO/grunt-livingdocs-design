









var dashboard = (function(){

	return {
		toggle_dashboard:function() {
			$(".dashboard .expandable").toggleClass("expanded");
			if ($(".dashboard .expandable").hasClass("expanded")) dashboard.show_dashboard();
			else dashboard.hide_dashboard();
		},
		
		show_dashboard:function() {
			var dashboard_width = $(".dashboard .expandable").width();
			if ($(".wrapper").width()<=600) dashboard_width = $(".wrapper").width();
			$(".dashboard .expandable").css("left", -dashboard_width+"px").show().animate({left: 0}, 500);
		},
		
		hide_dashboard:function() {
			$(".dashboard .expandable").removeClass("expanded");
			var dashboard_width = $(".dashboard .expandable").width();
			if ($(".wrapper").width()<=600) dashboard_width = $(".wrapper").width();
			$(".dashboard .expandable").animate({left: -dashboard_width}, 500, function(){$(this).hide()});
		},
		
		init:function() {
			/* toggling the dashboard */
			$(".dashboard .dashboardlink").click(function(){
				dashboard.toggle_dashboard();
			});
			
			/* focussing a field */
			$(".dashboard .field").focus(function(){
				var fields = $(".dashboard").find('.field');
				for (var counter=0; counter < fields.length; counter++) {
					if ( fields.eq(counter).val() == "" ) {
						if ( fields.eq(counter).hasClass("password") ) fields.eq(counter).attr("type", "text");
						fields.eq(counter).val(fields.eq(counter).attr("data-default"));
					}
				}
				if ( $(this).val() == $(this).attr("data-default") ) {
					$(this).val('');
				}
			});
			
			/* focussing a password field */
			$(".dashboard .field.password").focus(function(){
				$(this).attr('type', 'password');
			});
			
			/* changing forms */
			$(".dashboard .register.link a, .dashboard .login.link a").click(function(){
				$(".dashboard .details").slideToggle();
				$(".dashboard .link").slideToggle();
			});
			
			/* check form */
			$(".dashboard form").submit(function(){
				var fields = $(this).find('.field');
				var missing_vals = 0;
				/* check for empty fields or fields with default values */
				for (var counter=0; counter < fields.length; counter++) {
					if ( ( fields.eq(counter).val() == "" ) || ( fields.eq(counter).val() == fields.eq(counter).attr("data-default") ) ) {
						if ( fields.eq(counter).hasClass("password") ) fields.eq(counter).attr("type", "text");
						fields.eq(counter).val( fields.eq(counter).attr("data-default") );
						fields.eq(counter).addClass("error");
						missing_vals++;
					}
					else {
						fields.eq(counter).removeClass("error");
					}
				}
				/* check for identical passwords */
				var fields = $(this).find('.field.password');
				if ( fields.length == 2 && ( fields.eq(0).val() != fields.eq(1).val() ) ) {
					fields.addClass('error');
					missing_vals++;
				}
				
				/* abort or submit form */
				if (missing_vals) return false;
				else return true;
			});

		}
	}
})();

$(document).ready( dashboard.init );

















