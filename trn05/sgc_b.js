$(function () {

    var TXT = ['HOME', '01', '02', '03', '04', 'lee,s portfolio', 'copyright']
    //fullpage 
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06', 'page07'],
        //navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            setTimeout(function () {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);
        },
    });

    //https://github.com/aminta/fullPage.js-2.9.6 2버전 설명...
    //https://desipossa.github.io/backup-01/%ED%92%80%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%8B%A4%EC%8A%B5%20f01/fullpage01.html

    $('.slide').on('wheel', function (e) {
        console.log(e.originalEvent.wheelDelta);
        if (e.originalEvent.wheelDelta > 0 && $(this).index() > 0) {
            $.fn.fullpage.moveSlideLeft();
        }
        if (e.originalEvent.wheelDelta < 0 && $(this).index() < 2) {
            $.fn.fullpage.moveSlideRight()
        }
    })
})