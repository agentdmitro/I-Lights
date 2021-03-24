

(function($) {

    $(document).on('click', '.about__list a', function(e) {
      e.preventDefault();
  
      var $this = $(this),
        id = $this.data('id');
  
      $('.about__list-data .active').removeClass('active');
      $('.about__list .active').removeClass('active');
  
      $(this).addClass('active');
      $('#group-' + id).addClass('active');
    });
  
  })(jQuery);



  (function ($) {

    $(document).on('click', '.about-catalog__groups a', function(e) {
      e.preventDefault();
  
      var $this = $(this),
        id = $this.data('id');
  
      $('.about-catalog__groups-data .active').removeClass('active');
      $('.about-catalog__groups .active').removeClass('active');
  
      $(this).addClass('active');
      $('#group-catalog-' + id).addClass('active');
    });
  
  })(jQuery);






$('.header__dropdown , .catalog__img-info , .services__list-content , .new__box-btn-add , .about-content__list-item').on('click', function(params) {
    $(this).toggleClass('active');
});

$('.new__box').click(function(){
	if(!$(this).hasClass('active')){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	}
});


var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
  });


$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


