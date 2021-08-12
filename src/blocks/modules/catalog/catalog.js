/* $('.catalog-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 2,
    prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#3F4E4F" stroke-width="5"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#3F4E4F" stroke-width="5"/></svg></button>',
    variableWidth: true,
    appendArrows: $('.catalog-item__slider-arrows'),
    responsive: [
        {
            breakpoint: 767,
            settings: {
                variableWidth: false,
            }
        },
    ]
}); */

$('.catalog__item').each(function(index){

    $(this).addClass('catalog__item-' + index);
    var indexClass =  '.catalog__item-' + index;
    $(this).children().find('div.catalog-item__slider-arrows').addClass('catalog-item__slider-arrows--' + index);
    var arrows = '.catalog-item__slider-arrows--' + index;

    $(indexClass + ' .catalog-slider').slick({
        slidesToShow: 2,
        prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#3F4E4F" stroke-width="5"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#3F4E4F" stroke-width="5"/></svg></button>',
        variableWidth: true,
        appendArrows: $(arrows),
    });
});