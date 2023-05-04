$(function () {
    $(".header__hidmenu, .header__link").on("click", function () {
      $(".header__nav").toggleClass("header__nav--active");
    });
  
    $(".slider__slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
  
      prevArrow:
        '<button type="button" class="slider__slick-prev"><img src="../images/slider-arrowleft.svg"></img></button>',
      nextArrow:
        '<button type="button" class="slider__slick-next"><img src="../images/slider-arrowright.svg"></img></button>',
      responsive: [
        {
          breakpoint: 1564,
          settings: {
            arrows: false,
          },
        },
        {
          breakpoint: 1345,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1080,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
      ],
    });
  
    $(".blockinfo__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<button type="button" class="blockinfo__slick-prev"><img src="../images/slider-arrowleft.svg"></img></button>',
      nextArrow:
        '<button type="button" class="blockinfo__slick-next"><img src="../images/slider-arrowright.svg"></img></button>',
    });
  
    $(".services__slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow:
        '<button type="button" class="services__slick-prev">Оклейка</button>',
      nextArrow:
        '<button type="button" class="services__slick-next">Детейлинг</button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  });