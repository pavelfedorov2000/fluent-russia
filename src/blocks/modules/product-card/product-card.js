$('.product-card__slider').slick({
    prevArrow: '<button class="slider__btn slider__btn--prev"></button>',
    nextArrow: '<button class="slider__btn slider__btn--next"></button>',
    //arrows: false,
    //centerMode: true,
    //centerPadding: '60px',
    //variableWidth: true,
    //autoplay: true,
    //autoplaySpeed: 2000,
    //fade: true,
    asNavFor: '.product-card__nav-slider',
    responsive: [
        {
            //breakpoint: ,
            settings: {

            }
        },
    ]
});

$('.product-card__nav-slider').slick({
    slidesToShow: 3,
    asNavFor: '.product-card__slider',
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button class="slider__btn slider__btn--prev"></button>',
    nextArrow: '<button class="slider__btn slider__btn--next"></button>',
    //arrows: false,
    //dots: true,
    //vertical: true,
    responsive: [
        {
            //breakpoint: ,
            settings: {

            }
        },
    ]
});

