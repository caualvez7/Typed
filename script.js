document.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function () {
                this.slides.forEach(slide => {
                    slide.style.transition = 'transform 0.3s ease';
                });
            },
            slideChangeTransitionEnd: function () {
                this.slides.forEach(slide => {
                    slide.style.transform = 'scale(0.9)';
                });
                this.slides[this.activeIndex].style.transform = 'scale(1.1)';
            },
        },
    });
});
