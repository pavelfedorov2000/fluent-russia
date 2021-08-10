$('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('burger-btn--active');
    $('.burger-menu').toggleClass('burger-menu--active');
});

$('.burger-btn').on('click', function () {
    $('.burger-btn').addClass('burger-btn--active');
    $('.burger-menu').addClass('burger-menu--active');
});

$('.burger-menu__close-btn').on('click', function () {
    $('.burger-btn').removeClass('burger-btn--active');
    $('.burger-menu').removeClass('burger-menu--active');
});

$('.header__menu-link').on('click', function () {
    $('.burger-menu').removeClass('burger-menu--active');
}); 