$(function () {
    /////////////////////////////////////
    $('.top_close_btn').on('click', function () {
        $('.TopBanner').addClass('on');
        $('.Section01').addClass('on');
    });

    $('.lang strong').on('click', function () {
        $(this).toggleClass('on');
        $('.lang').toggleClass('on');
    });

    $('.top_search strong').on('click', function () {
        $(this).toggleClass('on');
        $('.top_search').toggleClass('on');
    })

    $('.main_slider').on('init reInit afterChange', function (e, ms, c) {
        var current = $('.main_slider .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slide_dots li').eq(c).addClass('on').siblings().removeClass('on');
        $('.Section01 .num').html('0' + ((c ? c : 0) + 1) + '<span> / 0' + ms.slideCount + '</span>');
    });

    $('.Section01 .slide_dots li').on('click', function () {
        var idx = $(this).index();
        console.log(idx)
        $('.main_slider').slick('slickGoTo', idx)
    })

    $('.main_slider').slick({
        arrows: false,
    });

    $('.Section01 .slide_handler button:first-child').on('click', function () {
        $('.main_slider').slick('slickPrev')
    })
    $('.Section01 .slide_handler button:last-child').on('click', function () {
        $('.main_slider').slick('slickNext')
    })



    $('.left_slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slider'
    });
    $('.right_slider').slick({
        arrows: false,
        asNavFor: '.left_slider',
        slidesToShow: 5,
    });

    $('.center_slider').on('init reInit afterChange', function (e, s, c) {
        console.log(s.slideCount);
        var current = $('.center_slider .slick-current');
        current.addClass('on').siblings().removeClass('on');
        console.log(current);
        $('.Section04 .num').html((c ? c : 0) + 1 + '<span> / 0' + s.slideCount + '</span>');
        $('.content_box>div').eq(c).addClass('on').siblings().removeClass('on');
    });




    $('.center_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '300px',
    });


    $('.Section04 .slide_handler i:first-child').on('click', function () {
        $('.center_slider').slick('slickPrev')
    });
    $('.Section04 .slide_handler i:last-child').on('click', function () {
        $('.center_slider').slick('slickNext')
    })



    $('.slide_handler i:first-child').on('click', function () {
        $('.left_slider').slick('slickPrev')
    });
    $('.slide_handler i:last-child').on('click', function () {
        $('.left_slider').slick('slickNext')
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on');
        sct > 800
            ? $('.to_top').fadeIn()
            : $('.to_top').fadeOut();
    });


    $('.movie_case').YTPlayer({
        videoURL: 'https://youtu.be/raw3Nu0_mBQ',
        containment: 'self',
        autoPlay: true,
        mute: true,
        showControls: true,
        playOnlyIfVisible: true,
    });


    var swMovie = true;
    $('.movie_handler button').on('click', function () {
        $(this).toggleClass('on');
        swMovie
            ? $('.movie_case').YTPPause()
            : $('.movie_case').YTPPlay();
        swMovie = !swMovie;
    });


    $('.Footer .ft_top .right li').on('click', function () {
        var idx = $(this).index(); // 0,1,2
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $('.Footer .ft_top .content>ul').eq(idx).removeClass('on')
        } else {
            $(this).addClass('on').siblings().removeClass('on');
            $('.Footer .ft_top .content>ul').eq(idx).addClass('on').siblings().removeClass('on');
        }
    });


    $('#FL').on('change', function () {
        var lik = $(this).val();
        lik && window.open(lik)
    })

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600)
    });


    $('.popup').on('wheel', function (e) {
        e.preventDefault();
    });

    $('.popup button').on('click', function () {
        $('.popup').hide();
    });

    var getCookie = $.cookie('popup');

    if (!getCookie) {
        $('.popup').show();
    }
    $('.popup input').on('change', function () {
        $.cookie('popup', 'value', { expires: 1 });
        $('.popup').hide();
    });


    // // pop up cookie

    // var date = new Date();
    // date.setTime(date.getTime() + 60 * 1000);

    // // console.log(date)
    // // console.log($.cookie('todayPopUp'));


    // var TCK = $.cookie('todayPopUp');
    // if (!TCK) {
    //     $('.today_pop').show();
    // }

    // $('#Today').on('change', function () {
    //     $.cookie('todayPopUp', '팝업쿠키', { expires: date });
    //     $('.today_pop').hide();
    //     //출처: https://offbyone.tistory.com/176 [쉬고 싶은 개발자:티스토리]
    // })


    /////////////////////////////////////
})