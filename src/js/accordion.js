$('.accordion__item-summary').on('click', function () {
    $(this).parent().siblings().find('.accordion__item-summary').removeClass('accordion__item-summary--active');
    $(this).parent().siblings().find('div.accordion__item-details').slideUp('300');
    $(this).toggleClass('accordion__item-summary--active');
    $(this).next().slideToggle('300');
});