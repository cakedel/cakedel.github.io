$(function () {
    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
    });

    $('.slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        // 1sec=1000
        dots: true,
        pauseOnHover: false,
    });

    $('.slider02').slick({
        slidesToShow: 3,
    });
});