$(document).ready(function(){
    $('.carousel__inner').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/right.png"></button>',
        
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu__list_active');
        })
    })
})