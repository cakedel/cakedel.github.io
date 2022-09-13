$(function () {

    var closeBanner = () => {
        // $('.TopBanner').toggleClass('on')
        // $('.TopBanner').slideToggle('on')
        // $('.TopBanner').slideUp('on')
        // vanila javascript
        document.querySelector('.TopBanner').classList.toggle('on')
    };
    $('.TopBanner i').on('click', closeBanner);

    $('.pop button').on('click', function () {
        $(this).parent().hide();
    });

    $('.MainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.ProductSlider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
    })

    //$(this) = e.currentTarget

    function toggleClass() {
        $(this).toggleClass('on')
        $('Footer .popup').toggleClass('on')
    }

    $('.pop li').on('click', toggleClass);
    $('.Footer .popup i').on('click', function () {
        $('.Footer .popup').toggleClass('on')
    })

    $('.mopen').on('click', function(){
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    })
})