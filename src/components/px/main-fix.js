import Swiper, { Navigation, Thumbs } from "swiper";
Swiper.use([Thumbs, Navigation]);


$(".js-range-slider").ionRangeSlider();

let currencySelect = document.getElementById('currency-select');
let updateSelected = function(e) {
  document.querySelector('.is-visible').classList.remove('is-visible');
  document.querySelector('[data-currency-code="' + e.target.value + '"]').classList.add('is-visible');
};
currencySelect && currencySelect.addEventListener('change', updateSelected);

if(document.querySelector('.stone__small-slider-js')) {
  const stoneDetailSmallSwiper = new Swiper(".stone__small-slider-js", {
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horisontal',
    breakpoints: {
        992: {
            direction: 'vertical'
        },
    }
  });
  const stoneDetailBigSwiper = new Swiper(".stone__big-slider-js", {
      spaceBetween: 10,
      slidesPerView: 1,
      thumbs: {
        swiper: stoneDetailSmallSwiper,
      },
      navigation: {
        nextEl: '.swiper-button-next-js',
        prevEl: '.swiper-button-prev-js',
      },
  });
}

const tableHeader = document.querySelector('.catalog__header-js');
tableHeader && tableHeader.addEventListener('click', (e) => {
  const curr = e.target;
  const active = tableHeader.querySelector('._active');
  if (active) {
    active.classList.remove('_active');
  }
  if(active != curr) {
    curr.classList.add('_active');
  }
})