$(function () {

    var TXT = ['HOME', '01', '02', '03', '04', 'SNS', 'copyright']
    //fullpage 
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        //navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            setTimeout(function () {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.navBar li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.thisPage').text(TXT[num - 1]);

            num !== 1
                ? $('.Header').addClass('on')
                : $('.Header').removeClass('on')

        },
    });
    $('.basicSlider').slick({
        arrows: false,
        asNavFor: '.basicSlider',
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,

    });
    $('.productSlider .slideMenu li').on('click', function () {
        var idx = $(this).index()
        $('.basicSlider').slick('slickGoTo', idx)
    })
    $('.basicSlider').on('afterChange', function (e, s, c) {
        $('.productSlider .slideMenu li').eq(c).addClass('on').siblings().removeClass('on')
    });
    $('.allOpen').on('click', function(){
        $(this).toggleClass('on')
        $('.cover').slideToggle('on')
    })

})