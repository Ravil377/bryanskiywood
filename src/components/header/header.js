import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const headerBottom = document.querySelector('.header__bottom');
const searchBtn = headerBottom.querySelector(`[data-id='search']`);
const catalogBtn = headerBottom.querySelector(`[data-id='catalog']`);
const searchCloseBtn = headerBottom.querySelector(`[data-id='search-close-btn']`);


searchBtn && searchBtn.addEventListener('click', () => {
    headerBottom.classList.add('_active');
})
searchCloseBtn && searchCloseBtn.addEventListener('click', () => {
    headerBottom.classList.remove('_active');
    searchCloseBtn.closest('.search').querySelector('input[type="text"]').value='';
})

headerBottom && headerBottom.addEventListener('mouseover', (e) => {
    const ta = e.target.closest(`[data-id='submenu']`);
    if(ta) {
        ta.classList.add('_active');
    }
})

headerBottom && headerBottom.addEventListener('mouseout', (e) => {
    const ta = e.target.closest(`[data-id='submenu']`);
    if(ta) {
        ta.classList.remove('_active');
    }
})

catalogBtn.addEventListener('click', () => {
    catalogBtn.classList.toggle('_active');
})

const swiperDoors = new Swiper('.swiper-door-js ', {
    slidesPerView: 'auto',
    breakpoints: {
        425: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        }
    },
    navigation: {
        // nextEl: '.before-services__btn_right',
        // prevEl: '.before-services__btn_left',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },     
});

const swiperReview = new Swiper('.review__slider-js', {
    slidesPerView: 1,
    spaceBetween: 55,
    navigation: {
        nextEl: '.review__slider-next-btn-js',
        prevEl: '.review__slider-prev-btn-js',
    },   
});

const detail = new Swiper('.detail__slider-js', {
    slidesPerView: 1,
    spaceBetween: 55,
    navigation: {
        nextEl: '.detail__slider-next-btn-js',
        prevEl: '.detail__slider-prev-btn-js',
    },   
});

const tabsColor = document.querySelector('.color-tabs-js');
const textColor = document.querySelector('.color-text-js');
tabsColor && tabsColor.addEventListener('click', (e) => {
    const color = e.target;
    if(color.tagName === 'LI') {
        tabsColor.querySelector('._active').classList.remove('_active');
        textColor.textContent = color.dataset.color;
        color.classList.add('_active');
    }
})

if(tabsColor) {
    tabsColor.querySelector('LI').classList.add('_active');
    textColor.textContent = tabsColor.querySelector('LI').dataset.color;
}

