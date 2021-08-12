$('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('burger-btn--active');
    $('.header__menu').toggleClass('header__menu--active');
    $('body').toggleClass('_lock');
});

$('.header__menu-link').on('click', function () {
    $('.burger-menu').removeClass('burger-menu--active');
});

if ($(window).width() > 992) {
    $('.header__menu-item--drop').on('mouseover', function () {
        $(this).addClass('header__menu-item--active');
        $(this).find('ul.header__menu-sublist').slideDown('300');
    });
    
    $('.header__menu-item--drop').on('mouseleave', function () {
        $(this).removeClass('header__menu-item--active');
        $(this).find('ul.header__menu-sublist').slideUp('300');
    });
} else {
    $('.header__menu-drop').on('click', function() {
        $(this).parent().siblings().removeClass('header__menu-item--active');
        $(this).parent().siblings().find('ul.header__menu-sublist').slideUp('300');
        $(this).parent().toggleClass('header__menu-item--active');
        $(this).parent().find('ul.header__menu-sublist').slideToggle('300');
    });
}