$(function(){

    $('.main_slider').on('inIt reInit afterChange', function () {
        var here = $('.slick-current');
        here.addClass('on').siblings().removeClass('on')
    })


    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        // 대소문자 구분
    });
});
