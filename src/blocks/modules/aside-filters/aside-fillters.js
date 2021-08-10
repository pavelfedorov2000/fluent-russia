$('.filter-btn').on('click', function () {
    $('.aside-filters').addClass('aside-filters--active');
});

$('.aside-filters__close-btn').on('click', function () {
    $(this).parent().removeClass('aside-filters--active');
});