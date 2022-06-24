$(function () {
    $('.mainVideo').YTPlayer({
        videoURL: 'https://youtu.be/89YJVY0Bcpo',
        containment: '.mainVideo',
        autoPlay: true,
        startAt: 0,
        loop: true,
        mute: true,
        showControls: false,
        playOnlyIfVisible: true,
        brightness: -400,

    })
    $('.slogan .slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '300px',
    });
    $('.slogan .slideArrows i:nth-child(1)').on('click', function () {
        $('.slide').slick('slickPrev')
    })
    $('.slogan .slideArrows i:nth-child(2)').on('click', function () {
        $('.slide').slick('slickNext')
    });
    $('.news .slider').slick({
        slidesToShow: 3,
        arrows: false,
    });
    $('.news .arrows i:nth-child(1)').on('click', function () {
        $('.slider').slick('slickPrev')
    });
    $('.news .arrows i:nth-child(2)').on('click', function () {
        $('.slider').slick('slickNext')
    });
    $('.socialSlider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '350px',
    })
    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    })
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 800) {
            $('.toTop').fadeIn(300)
        } else {
            $('.toTop').fadeOut(1000)
        }
    })

});