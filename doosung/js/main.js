document.addEventListener('DOMContentLoaded', function () {
    const productSwiper = new Swiper('.productSlider', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.productNext',
            prevEl: '.productPrev',
        },
        scrollbar: {
            el: '.productScroll',
            draggable: true,
        },
    });
    const floorExplain = new Swiper('.floorExplain', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: '.floorNext',
            prevEl: '.floorPrev',
        },
    });
    const floorSlider = new Swiper('.floorSlider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.floorNext',
            prevEl: '.floorPrev',
        },
    });
    const floorImage = new Swiper('.floorImage', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: '.floorNext',
            prevEl: '.floorPrev',
        },
    });


});