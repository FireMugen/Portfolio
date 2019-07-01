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
	});

	//No novacancy
  $('.no').novacancy({
    'reblinkProbability': 0.1,
    'blinkMin': 0.2,
    'blinkMax': 0.6,
    'loopMin': 8,
    'loopMax': 10,
    'color': 'WHITE',
    'blink': true
  });
  $('.vacancy').novacancy({
    'color': 'WHITE'
  });

	$('.element').novacancy({
  	'reblinkProbability': (1/3),
  	'blinkMin': 0.01,
  	'blinkMax': 0.5,
  	'loopMin': 0.5,
  	'loopMax': 2,
  	'color': 'PURPLE',
  	'glow': ['0 0 80px Orange', '0 0 30px Red', '0 0 6px Yellow'],
  	'off': 0, // amount of off chars
  	'blink': 0, // amount of blink chars
  	'classOn': 'on',
  	'classOff': 'off',
  	'element': 'data', // split content by elemen
  	'autoOn': true
	});

	$( "#submit-validation" ).click(function() {
  	const $validate = $( "#name-validation" ).value;
  	if ( $validate === "" ) {
  		flash('Please enter your name..', {
  			'bgColor' : 'purple',
  			'duration' : 2000,
  			'vPosition' : 'top',
  		});
  		return false;
  	}
  });
});

// //Javascript
// function validateForm() {
// 	let fname = document.forms["email-form"]["fname"].value;
// 	if (fname === "") {
// 		alert("Name must be filled out");
// 		return false;
// 	}
// }
