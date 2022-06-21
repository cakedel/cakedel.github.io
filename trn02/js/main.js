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

});