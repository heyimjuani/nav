$(document).ready(function() {
	var navItems = $("#navigation ul li").length;
	
	$("#toggle-nav").on("click", function() {
		if ($(this).hasClass("active")) {
			$("#navigation ul li").removeClass("slideInLeft").addClass("slideOutLeft");
			setTimeout(function(){
				$("body").toggleClass("nav-open");
			}, navItems*150);
		} else {
			$("#navigation ul li").removeClass("slideOutLeft").addClass("slideInLeft");
			$("body").toggleClass("nav-open");
		}

		$(this).toggleClass("active");
		return false;
	});
});