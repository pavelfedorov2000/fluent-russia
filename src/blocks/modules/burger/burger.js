$('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('burger-btn--active');
    $('.header__menu').toggleClass('header__menu--active');
    $('body').toggleClass('_lock');
});

$('.header__menu-link').on('click', function () {
    $('.burger-menu').removeClass('burger-menu--active');
});

$('.header__menu-item').on('mouseover', function () {
    $(this).siblings().find('ul.header__menu-sublist').slideUp('300');
    $(this).siblings().removeClass('header__menu-item--active');
    $(this).addClass('header__menu-item--active');
    $(this).find('ul.header__menu-sublist').slideDown('300');
});