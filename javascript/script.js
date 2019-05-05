$(document).ready(function(){

	// --- Mobile NAV -----------------------

	var mobNav_button = $(".mobNav-button"),
		openNav = $(".fa-align-justify"),
		closeNav = $(".fa-close"),
		mobNav = $(".mob-nav");

	$(openNav).click(function(){
		$(mobNav).slideDown(500);
		$(this).css("display","none");
		$(closeNav).css("display","block");
	});
	$(closeNav).click(function(){
		$(mobNav).slideUp(500);
		$(this).css("display","none");
		$(openNav).css("display","block");
	});

});