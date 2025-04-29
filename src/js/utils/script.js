import { initSliders } from './swiper';

window.addEventListener('load', () => {
  document.documentElement.classList.add('_page-loaded');

  if (document.querySelectorAll('[data-move-to]').length) {
    const elements = document.querySelectorAll('[data-move-to]');
    const moveElements = () => {
      for (let i = 0; i < elements.length; i++) {
        const child = elements[i];
        const data = child.dataset.moveTo.split(',');

        if (!data) return;

        if (window.matchMedia('(max-width: 49em)').matches) {
          document.querySelector(`${data[0]}`).append(child);
        } else {
          document.querySelector(`${data[1]}`).append(child);
        }
      }
    };

    moveElements();

    window.addEventListener('resize', moveElements);
  }

  if (document.querySelector('.header__menu-btn')) {
    document
      .querySelector('.header__menu-btn')
      .addEventListener('click', () => {
        document.documentElement.classList.toggle('_show-menu');
      });
  }

  if (document.querySelectorAll('.current-year').length) {
    document.querySelectorAll('.current-year').forEach(el => {
      el.innerHTML = new Date().getFullYear();
    });
  }

  initSliders();
});
