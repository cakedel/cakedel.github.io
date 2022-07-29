$(function () {
    $('.TopBanner i').on('click', function () {
        $('.TopBanner').slideUp();
    })
    $('.pop button').on('click', function () {
        $(this).parent().hide();
    })
    $('.mainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
})