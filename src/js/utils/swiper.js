export const initSliders = () => {
  if (document.querySelector('.destinations__slider')) {
    new Swiper('.destinations__slider', {
      spaceBetween: 20,
      navigation: {
        prevEl: '.destinations .controls__btn_prev',
        nextEl: '.destinations .controls__btn_next',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });
  }
  if (document.querySelector('.blog-hero__slider')) {
    new Swiper('.blog-hero__slider', {
      pagination: {
        el: '.blog-hero__pagination',
        type: 'bullets',
        clickable: true,
      },
      effect: 'fade',
      autoplay: {
        delay: 5000,
      },
      speed: 1000,
    });
  }
};
