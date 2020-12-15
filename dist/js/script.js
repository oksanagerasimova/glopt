$(document).ready(function(){
    $('.carousel__inner').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/right.png"></button>'
      });
  });