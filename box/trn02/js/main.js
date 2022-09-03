$(function () {
    // 2022.06.20 peony topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    })
    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current')
        current.addClass('on').siblings().removeClass('on');
        console.log(s)
        // if (c) {
        //     c = c + 1;
        // }
        // else {
        //     c = 1
        // }
        if (c === 1) {
            $('.mainArrow i').addClass('on')
        }
        else {
            $('.mainArrow i').removeClass('on')
        }
        $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
    })

    $('.mainSlider').slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        arrows: false,
        dots: true,
    });
    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    })
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    })
    $('.mainContent04 figure').on('mouseenter', function () {
        $(this).toggleClass('on')
    })
    $('.mainContent04 figure').on('mouseleave', function () {
        $(this).toggleClass('off')
    })
    // 2022.06.22
    $('#youtube').YTPlayer({ videoURL: 'https://youtu.be/nmNqz74EOPE', containment: '.youtube', autoPlay: true, mute: true, startAt: 0, opacity: 1, showControls: false, playOnlyIfVisible: true, });
    $('.youtube .zoom').on('click', function (e) {
        e.preventDefault();
        // <!-- event 전파 방법을 막는 방법! -->
        // <!-- e.preventDefault(); 자기가 가진 기본 이벤트를 없앤다. 
        $('#youtube').YTPFullscreen()
    })
    $('.productSlider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });
    $('.product .productArrows i:nth-child(1)').on('click', function () {
        $('.productSlider').slick('slickPrev')
    });
    $('.product .productArrows i:nth-child(2)').on('click', function () {
        $('.productSlider').slick('slickNext')
    });
    $('.tabMenu li').on('click', function (event) {
        event.preventDefault();
        // console.log($(this), $(this).index(), event.target, event.currentTarget)
        $('.tabMenu li').removeClass('on')
        $(this).addClass('on');
        var idx = $(this).index();
        $('.tabContent>div').removeClass('on');
        $('.tabContent>div').eq(idx).addClass('on');

    })
    var ux = '라멘';
    $('.tabContent .notice li').on('click', function (event) {
        event.preventDefault()
        var idx = $(this).index();
        $('.rightContent>li').removeClass('on')
        $('.rightContent>li').eq(idx).addClass('on');
    })
    console.log(ux);
    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
        // 기본 400 = 0.4s ({변수}에 대한 값)
    })
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(300)
        } else {
            $('.toTop').fadeOut(1000)
        }
    })
    $('#fl').on('change', function () {
        console.log($(this), $(this).val())
        var link = $(this).val();
        if (link) { window.open(link) }
        // link && window.open(link)

    })
});