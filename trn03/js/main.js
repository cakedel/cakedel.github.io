$(function () {
    $('.TopBanner i').on('click', function () {
        $('.TopBanner').slideUp();
    })
    $('.pop button').on('click', function () {
        $(this).parent().hide();
    })
})