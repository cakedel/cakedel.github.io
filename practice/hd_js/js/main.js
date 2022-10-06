window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.top_close_btn').addEventListener('click', function () {
        document.querySelector('.TopBanner').classList.add('on')
        document.querySelector('.MainVisual').classList.add('on')
    });

    document.querySelector('.lang strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.lang').classList.toggle('on');
    });

    document.querySelector('.top_search strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.top_search').classList.toggle('on');
    })

    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on')
    })

    const main_slider = new Swiper('.main_slider', {
        loop: true,
        on: {
            'init': function () {
                const current = document.querySelector('.swiper-slide-active')
                current.classList.add('on')
                document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
            }
        }
    })
    const totalslide = document.querySelectorAll('.swiper-slide')
    const slideDots = document.querySelectorAll('.slide_dots li')

    main_slider.on('slideChangeTransitionEnd', function () {

        totalslide.forEach(it => it.classList.remove('on'))
        const current = document.querySelector('.swiper-slide-active')
        current.classList.add('on')
        // console.log(totalslide, current, this.realIndex);

        let count = this.realIndex;
        slideDots.forEach(it => it.classList.remove('on'))
        slideDots[count].classList.add('on')

        document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
    })

    document.querySelector('.MainVisual .next').addEventListener('click', function () {
        main_slider.slideNext()
    })
    document.querySelector('.MainVisual .prev').addEventListener('click', function () {
        main_slider.slidePrev()
    })

    slideDots.forEach((it, idx) => {
        it.addEventListener('click', function () {
            main_slider.slideTo(idx + 1)
        })
    })
})
