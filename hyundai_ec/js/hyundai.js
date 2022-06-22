$(function () {
    $('.slogan .slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '350px',
    });
    $('.slogan .slideArrows i:nth-child(1)').on('click', function () {
        $('.slide').slick('slickPrev')
    })
    $('.slogan .slideArrows i:nth-child(2)').on('click', function () {
        $('.slide').slick('slickNext')
    })
    $('.news .slider').slick({
        slidesToShow: 3,
        arrows: false,
    });

    $('.news .arrows i:nth-child(1)').on('click', function () {
        ('.news .slider').slick('slickPrev')
    });
    $('.news .arrows i:nth-child(2)').on('click', function () {
        ('.news .slider').slick('slickNext')
    });
});