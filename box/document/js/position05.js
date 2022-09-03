$(function(){
    $('.smile').on('click',function(){
        $(this).toggleClass('active')
    })

    // dom을 읽어봤을때 this 자기자신
    $('.top_banner button').on('click',function(){
        $('.top_banner .container').toggleClass('active');
    })
})