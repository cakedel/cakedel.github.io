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
    $('.youtube .zoom').on('click', function(e){
        e.preventDefault();
        // <!-- event 전파 방법을 막는 방법! -->
        // <!-- e.preventDefault(); 자기가 가진 기본 이벤트를 없앤다. 
        $('#youtube').YTPFullscreen()
    })
});