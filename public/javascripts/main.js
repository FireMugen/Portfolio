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

	$('#hamburger-items').on('click', function(e) {
		$items.toggleClass("hidden-menu-items");
		$items.toggleClass("fade2");
		$hamburger.toggleClass("is-active");
		$hamburger.toggleClass("hamburger--collapse");
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
  	'color': 'WHITE',
  	'glow': ['0 0 80px White', '0 0 30px White', '0 0 6px White'],
  	'off': 0, // amount of off chars
  	'blink': 0, // amount of blink chars
  	'classOn': 'on',
  	'classOff': 'off',
  	'element': 'data', // split content by elemen
  	'autoOn': true
	});

	//Hover Effect on about divs //Cooking SVGs
	$( "#box-1" ).mouseenter(function() {
		$( "#mixer22" ).addClass( "mixer22" );
		$( "#saucepan22" ).addClass( "saucepan22" );
		$('.mixer22').css('animation-play-state','running');
		$('.saucepan22').css('animation-play-state','running');
	});

	$( "#box-1" ).mouseleave(function() {
		$('.mixer22').css('animation-play-state','paused');
		$('.saucepan22').css('animation-play-state','paused');
	});

	//Hover Effect on about divs //Laptop SVG
	$( "#box-2" ).mouseenter(function() {
		$( "#st1" ).addClass( "st1" );
		$( "#st2" ).addClass( "st1" );
		$( "#st3" ).addClass( "st1" );
		$( "#st4" ).addClass( "st1" );
		$( "#st5" ).addClass( "st1" );
		$( "#st6" ).addClass( "st1" );
		$('.st1').css('animation-play-state','running');
	});

	$( "#box-2" ).mouseleave(function() {
		$( "#st1" ).removeClass( "st1" );
		$( "#st2" ).removeClass( "st1" );
		$( "#st3" ).removeClass( "st1" );
		$( "#st4" ).removeClass( "st1" );
		$( "#st5" ).removeClass( "st1" );
		$( "#st6" ).removeClass( "st1" );
	});

	//Hover Effect on about divs //Download SVG

	$( "#box-3" ).mouseenter(function() {
		$( "#btn-download" ).addClass( "hvr-buzz" );
	});

	//window size antics
	if($(window).width() <= 812) {
		 $("#box-1").removeClass("col-sm");
		 $("#box-2").removeClass("col-sm");
		 $("#box-3").removeClass("col-sm");
	}

});


//Javascript Validation


function validateForm() {
	let fname = document.forms["email-form"]["fname"].value;
	let email = document.forms["email-form"]["lname"].value;
	let message = document.forms["email-form"]["subject"].value;

	if (fname === "") {
		document.getElementsByName('fname')[0].placeholder='Name Required';
		document.getElementsByName('fname')[0].dataset.valid="not-valid";
		return false
	} if (email === "") {
		document.getElementsByName('lname')[0].placeholder='Email Required';
		document.getElementsByName('lname')[0].dataset.valid="not-valid";
		return false
	} if (message === "") {
		document.getElementsByName('message')[0].placeholder='You must enter a message';
		document.getElementsByName('message')[0].dataset.valid="not-valid";
		return false
	}
}
