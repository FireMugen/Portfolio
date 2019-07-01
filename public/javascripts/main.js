$(document).ready(function () {

	//"Lazy" loading for projects on click
	$( "#project-click" ).click(function() {
	  $( "#1" ).addClass( "fade1" )
		$( "#2" ).addClass( "fade2" )
		$( "#3" ).addClass( "fade3" )
		$( "#4" ).addClass( "fade4" )
	});

	//"Lazy" loading for projects on scroll
	$(window).scroll(function() {
    const scroll = $(window).scrollTop();
    if (scroll >= 900) {
        $( "#1" ).addClass("fade1");
				$( "#2" ).addClass("fade2");
				$( "#3" ).addClass("fade3");
				$( "#4" ).addClass("fade4");
    }
	});

	//Hamburger Menu
	const $hamburger = $(".hamburger");
	const $items = $(".hidden-menu-items");
	const $margin = $('.down22');
	$hamburger.on("click", function(e) {
	$hamburger.toggleClass("is-active");
	$hamburger.toggleClass("hamburger--collapse");
	$items.toggleClass("hidden-menu-items");
	$items.toggleClass("fade2");
	$margin.toggleClass("down22");
	// Do something else, like open/close menu
});
});
