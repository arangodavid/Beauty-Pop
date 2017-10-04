$(document).ready(function() {
////
// Hamburger drop down
////
	$('.site_hamburger_card').on('click', function() {
		$('.site_hamburger_card').toggleClass('is-active');
		$('.site_header').toggleClass('darker');
		if ($('.site_nav').hasClass('is-open')) {
			$('.site_nav').removeClass('is-open');
			$('.site_nav').slideUp('slow');
		} else {
			$('.site_nav').addClass('is-open');
			$('.site_nav').slideDown('slow');
		}	
	});
////
// Initialize Smart Cart
////      
  $('#smartcart').smartCart({
    submitSettings: {
        submitType: 'paypal' // form, paypal, ajax
    },
    toolbarSettings: {
        checkoutButtonStyle: 'paypal' // default, paypal, image
    }
	});
   var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
////
// Opens and closes modal
////
  $('.sugar-baby-img').on('click', () => {
  	$('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.sugar_baby_modal').removeClass('lash-modal-hide');
  });
  $('.pumpkin-spice-img').on('click', () => {
    $('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.pumpkin_modal').removeClass('lash-modal-hide');
  });
  $('.beautylicious-img').on('click', () => {
    $('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.beautylicious_modal').removeClass('lash-modal-hide');
  });
  $('.tuti-fruitie-img').on('click', () => {
    $('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.tuti_fruitie_modal').removeClass('lash-modal-hide');
  });
  $('.eye-candy-img').on('click', () => {
    $('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.eye_candy_modal').removeClass('lash-modal-hide');
  });
  $('.close-modal-button').on('click', () => {
    $('.modal_root').removeClass('modal-show');
  });
////
// Modal Image carousel
////
  const lashOne = ['images/pumpkin-spice/pumpkin_one.jpg', 'images/pumpkin-spice/pumpkin_two.jpg', 'images/pumpkin-spice/pumpkin_four.jpg'];
  const lashTwo = ['images/beautylicious/beautylicious_one.jpg', 'images/beautylicious/beautylicious_two.jpg' ];
  const lashThree = ['images/tutie-fruitie/tutie_one.jpg', 'images/tutie-fruitie/tutie_two.jpg'];
  const lashFour = ['images/eye-candy/eyecandy_one.jpg', 'images/eye-candy/eyecandy_two.jpg'];
  const lashFive= ['images/sugar-baby/sugarbaby_one.jpg', 'images/sugar-baby/sugarbaby_two.jpg', 'images/sugar-baby/sugarbaby_three.jpg' ];
  let countOne = 0;
  let countTwo = 0;
  let countThree = 0;
  let countFour = 0;
  let countFive = 0;
  $('.pumpkin_spice_button_right').on('click', () => {
    countOne++;
    $(lashOne).each(() => {
      if(countOne >= lashOne.length) {
        countOne = 0;
          $('#pumpkin-imgs').attr('src', lashOne[countOne])
      }else {
        $('#pumpkin-imgs').attr('src', lashOne[countOne]);
      }
    });
  });
  $('.pumpkin_spice_button_left').on('click', () => {
    countOne--;
    $(lashOne).each(() => {
      if(countOne < 0) {
        countOne = lashOne.length -1;
        $('#pumpkin-imgs').attr('src', lashOne[countOne])
      }else {
        $('#pumpkin-imgs').attr('src', lashOne[countOne]);
      }
    });
  });
  $('.beautylicious_button_right').on('click', () => {
    countTwo++;
    $(lashTwo).each(() => {
      if(countTwo >= lashTwo.length) {
        countTwo = 0;
        $('#beautylicious_imgs').attr('src', lashTwo[countTwo]);
      }else {
        $('#beautylicious_imgs').attr('src', lashTwo[countTwo]);
      }
    });
  });
  $('.beautylicious_button_left').on('click', () => {
    countTwo--;
    $(lashTwo).each(() => {
      if(countTwo < 0){
        countTwo = lashTwo.length-1;
        $('#beautylicious_imgs').attr('src', lashTwo[countTwo]);
      }else {
        $('#beautylicious_imgs').attr('src', lashTwo[countTwo]);
      }
    });
  });
  $('.tuti_fruitie_button_right').on('click', () => {
    countThree++;
    $(lashThree).each(() => {
      if(countThree >= lashThree.length) {
        countThree = 0;
        $('#tuti_fruitie_imgs').attr('src', lashThree[countThree]);
      }else {
        $('#tuti_fruitie_imgs').attr('src', lashThree[countThree]);
      }
    });
  });
  $('.tuti_fruitie_button_left').on('click', () => {
    countThree--;
    $(lashThree).each(() => {
      if(countThree < 0){
        countThree = lashThree.length-1;
        $('#tuti_fruitie_imgs').attr('src', lashThree[countThree]);
      }else {
        $('#tuti_fruitie_imgs').attr('src', lashThree[countThree]);
      }
    });
  });
  $('.eye_candy_button_right').on('click', () => {
    countFour++;
    $(lashFour).each(() => {
      if(countFour >= lashFour.length) {
        countFour = 0;
        $('#eye_candy_imgs').attr('src', lashFour[countFour]);
      }else {
        $('#eye_candy_imgs').attr('src', lashFour[countFour]);
      }
    });
  });
  $('.eye_candy_button_left').on('click', () => {
    countFour--;
    $(lashFour).each(() => {
      if(countFour < 0){
        countFour = lashFour.length-1;
        $('#eye_candy_imgs').attr('src', lashFour[countFour]);
      }else {
        $('#eye_candy_imgs').attr('src', lashFour[countFour]);
      }
    });
  });
  $('.sugar_baby_button_right').on('click', () => {
    countFive++;
    $(lashFive).each(() => {
      if(countFive >= lashFive.length) {
        countFive = 0;
        $('#sugar_baby_imgs').attr('src', lashFive[countFive]);
      }else {
        $('#sugar_baby_imgs').attr('src', lashFive[countFive]);
      }
    });
  });
  $('.sugar_baby_button_left').on('click', () => {
    countFive--;
    $(lashFive).each(() => {
      if(countFive < 0){
        countFive = lashFive.length-1;
        $('#sugar_baby_imgs').attr('src', lashFive[countFive]);
      }else {
        $('#sugar_baby_imgs').attr('src', lashFive[countFive]);
      }
    });
  });
////
// Animated scroll
////
  $('#start-scroll').click(() => {
    $('#start-scroll').toggleClass('site_header_button_active');
    $('html, body').animate({
      scrollTop: $('#scroll-to').offset().top
    }, 2000);
  });
////
// Hero image gallery with timer
////

const heroImages = ['../beauty_pop/images/hero/hero.jpg', '../beauty_pop/images/hero/hero_two.jpg', '../beauty_pop/images/hero/hero_four.jpg'];
let heroCounter = 0;
$('.site_header_right_button').on('click', () => {
  heroCounter++;
  $(heroImages).each(() => {
    if(heroCounter >= heroImages.length) {
      heroCounter = 0;
      $('.site_header').css('background-image', 'url(' + heroImages[heroCounter] +')');
    }else {
      $('.site_header').css('background-image', 'url(' + heroImages[heroCounter] +')');
    }
  });
});
$('.site_header_left_button').on('click', () => {
  heroCounter--;
  $(heroImages).each(() => {
    if(heroCounter < 0) {
      heroCounter = heroImages.length - 1;
      $('.site_header').css('background-image', 'url(' + heroImages[heroCounter] + ')');
    }else {
      $('.site_header').css('background-image', 'url(' + heroImages[heroCounter] + ')');
    }
  });
});



});






