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
  $('.rose-img').on('click', () => {
	$('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.rose_modal').removeClass('lash-modal-hide');
  });
  $('.pumpkin-spice-img').on('click', () => {
    $('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.pumpkin_modal').removeClass('lash-modal-hide');
  });
  $('.divina-img').on('click', () => {
    $('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.divina_modal').removeClass('lash-modal-hide');
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
  $('.25-img').on('click', () => {
    $('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.25_modal').removeClass('lash-modal-hide');
  });
  $('.amethyst-img').on('click', () => {
    $('.modal_root').addClass('modal-show');
    $('.lash_modal').addClass('lash-modal-hide');
    $('.amethyst_modal').removeClass('lash-modal-hide');
  });
  $('.close-modal-button').on('click', () => {
    $('.modal_root').removeClass('modal-show');
  });
////
// Modal Image carousel
////
  const lashOne = ['images/pumpkin-spice/pumpkin_one.jpg', 'images/pumpkin-spice/pumpkin_two.jpg', 'images/pumpkin-spice/pumpkin_four.jpg'];
  const lashTwo = ['images/divina/divina_1.jpg', 'images/divina/divina_2.jpg', 'images/divina/divina_3.jpg', 'images/divina/divina_4.jpg'];
  const lashThree = ['images/tuti-fruiti/tuti_one.jpg', 'images/tuti-fruiti/plum_lashes.jpg'];
  const lashFour = ['images/eye-candy/eyecandy_one.jpg', 'images/eye-candy/eyecandy_two.jpg', 'images/eye-candy/eyecandy_three.jpg'];
  const lashFive= ['images/rose/rose_1.jpg', 'images/rose/rose_2.jpg'];
  const lashSix= ['images/25/25_lash.png', 'images/25/25_2.jpg'];
  const lashSeven= ['images/amethyst/amethyst_seven.jpg', 'images/amethyst/amethyst_six.jpg', 'images/amethyst/amethyst_lash.png'];
  let countOne = 0;
  let countTwo = 0;
  let countThree = 0;
  let countFour = 0;
  let countFive = 0;
  let countSix = 0;
  let countSeven = 0;
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
  $('.divina_button_right').on('click', () => {
    countTwo++;
    $(lashTwo).each(() => {
      if(countTwo >= lashTwo.length) {
        countTwo = 0;
        $('#divina_imgs').attr('src', lashTwo[countTwo]);
      }else {
        $('#divina_imgs').attr('src', lashTwo[countTwo]);
      }
    });
  });
  $('.divina_button_left').on('click', () => {
    countTwo--;
    $(lashTwo).each(() => {
      if(countTwo < 0){
        countTwo = lashTwo.length-1;
        $('#divina_imgs').attr('src', lashTwo[countTwo]);
      }else {
        $('#divina_imgs').attr('src', lashTwo[countTwo]);
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
  $('.rose_button_right').on('click', () => {
    countFive++;
    $(lashFive).each(() => {
      if(countFive >= lashFive.length) {
        countFive = 0;
        $('#rose_imgs').attr('src', lashFive[countFive]);
      }else {
        $('#rose_imgs').attr('src', lashFive[countFive]);
      }
    });
  });
  $('.rose_button_left').on('click', () => {
    countFive--;
    $(lashFive).each(() => {
      if(countFive < 0){
        countFive = lashFive.length-1;
        $('#rose_imgs').attr('src', lashFive[countFive]);
      }else {
        $('#rose_imgs').attr('src', lashFive[countFive]);
      }
    });
  });
  $('.25_button_right').on('click', () => {
    countSix++;
    $(lashSix).each(() => {
      if(countSix >= lashSix.length) {
        countSix = 0;
        $('#25_imgs').attr('src', lashSix[countSix]);
      }else {
        $('#25_imgs').attr('src', lashSix[countSix]);
      }
    });
  });
  $('.25_button_left').on('click', () => {
    countSix--;
    $(lashSix).each(() => {
      if(countSix < 0){
        countSix = lashSix.length-1;
        $('#25_imgs').attr('src', lashSix[countSix]);
      }else {
        $('#25_imgs').attr('src', lashSix[countSix]);
      }
    });
  });
  $('.amethyst_button_right').on('click', () => {
    countSeven++;
    $(lashSeven).each(() => {
      if(countSeven >= lashSeven.length) {
        countSeven = 0;
        $('#amethyst_imgs').attr('src', lashSeven[countSeven]);
      }else {
        $('#amethyst_imgs').attr('src', lashSeven[countSeven]);
      }
    });
  });
  $('.amethyst_button_left').on('click', () => {
    countSeven--;
    $(lashSeven).each(() => {
      if(countSeven < 0){
        countSeven = lashSeven.length-1;
        $('#amethyst_imgs').attr('src', lashSeven[countSeven]);
      }else {
        $('#amethyst_imgs').attr('src', lashSeven[countSeven]);
      }
    });
  });
  ////
  // Animated scroll
  ////
  $('.section_one_container').click(() => {
    $('#start-scroll').css('position', 'relative');
    $('#start-scroll').toggleClass('site_header_button_active');
    $('html, body').animate({
      scrollTop: $('.modal_container').offset().top
    }, 2000);
  });
});






