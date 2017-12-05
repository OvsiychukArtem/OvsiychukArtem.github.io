$(document).ready(function(){

/* category ---------------------------- */
	var $cat_ob = $( "#cat_sub" );
	$(".cat_point").mouseover(function() {
		$cat_ob.slideDown(300);
		});

		$( "#cat_sub" ).hover(
	  function() {
	  	//---------------------------------
	  }, function() {
	    $( this ).slideUp(300);
	  }
	);

var $top_line = $('.wrapper-cat-sub .wrapper-next .top-line');
$('.wrapper-cat-sub .mymore').on('click', function(){
	var img_src = $(this).parent().find('img').attr('src');
	var title_src = $(this).parent().find('h2').text();

	$top_line.find('img').attr('src', img_src);
	$top_line.find('h2').text(title_src);
	$('.wrapper-cat-sub .wrapper ').fadeOut(0);
	$('.wrapper-cat-sub .wrapper-next ').fadeIn(400);
});

$('.wrapper-cat-sub .wrapper-next .close_cross').on('click', function(){
	$('.wrapper-cat-sub .wrapper ').fadeIn(400);
	$('.wrapper-cat-sub .wrapper-next ').fadeOut(0);
});

/* slider-main -----------------------------  */
	$('.slickslider').slick({
		dots: true,
		prevArrow: false,
		nextArrow: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

});

$( window ).scroll(function() {
		var toTop = $( this ).scrollTop();
		var $cloneLogo = $('header .top-side .wrapper > .logo');

		if ($(window).width() > 1024) {
				if (toTop >= '140') {
					$('header, .head-k, header nav .wrapper ul li, header .basket, header .top-side, .main-menu,header nav .wrapper, header nav .wrapper ul li:last-child span, .order-catalog').addClass('fix');

					
					if($('div').is('header .wrapper.fix .logo')) {
					} else 
					{
						$('header .wrapper').append($cloneLogo);
						$('header .wrapper.fix .logo').find('img').attr('src', 'images/logo_w.png');
					}
				}
				if (toTop <= '140') {
					$('header, .head-k, header nav .wrapper ul li, header .basket, header .top-side, .main-menu,header nav .wrapper, header nav .wrapper ul li:last-child span, .order-catalog').removeClass('fix');

					
					if($('div').is('header .wrapper.fix .logo')) {
						$('header nav .wrapper > a').remove();
					} 
				}
		}


});