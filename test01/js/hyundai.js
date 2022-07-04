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
        centerPadding: '17%'
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
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '17%',
        varialbeWidth: true,
        infinite: true,

    })
    $('.social .arrows i:nth-child(1)').on('click', function () {
        $('.socialSlider').slick('slickPrev')
    });
    $('.social .arrows i:nth-child(2)').on('click', function () {
        $('.socialSlider').slick('slickNext')
    });
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
    $('#fl').on('change', function () {
        console.log($(this), $(this).val())
        var link = $(this).val();
        if (link) { window.open(link) }
    })
});