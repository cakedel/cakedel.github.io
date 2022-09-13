$(function(){
    $('.main_slider').on('init reInit afterChange', function(){
        let cur = $('.slick-current');
        console.log(cur);
        cur.addClass('on').siblings().removeClass('on');
    });
    console.log('frigate');
    $('.main_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });
});