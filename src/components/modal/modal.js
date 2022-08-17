const modalOpenBtns = document.querySelectorAll('[data-id="openmodal"]');
const modalOpenCallmeBtns = document.querySelectorAll('[data-id="callme"');
const modalCloseBtn = document.querySelector('.modal__close-js');
const modal = document.querySelector('.modal-js');
const stars = document.querySelectorAll(`[data-id='stars']`);
const title = modal.querySelector('.modal__title');
let submitBtn = modal.querySelector('[type="submit"]');

const generateStars = (star) => {
    star.innerHTML = '';
    const numStars = star.dataset.stars;
    const text = star.dataset.text || '';
    for (let i = 1; i < 6; i++) {
        let div = document.createElement("div");
        div.classList.add("stars");
        div.classList.add(`${i <= numStars ? "stars_full" : "stars_empty"}`);
        star.append(div);
    }
    let div = document.createElement("div");
    div.classList.add("stars__count");
    div.textContent = numStars + ' ' + text || '';
    star.append(div);
}


const initStars  = (arr) => arr.forEach(star => generateStars(star));

initStars(stars);

const closeModal = () => {
    // const form = document.querySelector('.modal__form').reset();
    modal.classList.remove('modal_opened');
    modal.classList.remove('modal_opened-callme');
}

const checkKeyPress = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
};
  
const checkPressOverlay = (e) => {
    if (e.target === modal) {
        closeModal();
    }
};
  
const openModal = (e) => {
    e.preventDefault();
    title.textContent = 'Оформить заказ';
    generateModalInfo(e);
    modal.classList.add('modal_opened');
}

const generateModalInfo = (e) => {
    const card = e.target.closest('.model__info');
    let modalStars = modal.querySelector('.model__stars');
    submitBtn.textContent = '';
    modal.querySelector('.model__name').textContent = card.querySelector('.model__name').textContent;
    modal.querySelector('.model__size').textContent = card.querySelector('.model__size').textContent;
    modalStars.dataset.stars = card.querySelector('.model__stars').dataset.stars;
    modal.querySelector('.price').innerHTML = card.querySelector('.price').innerHTML;
    submitBtn.textContent = 'Оформить заказ';
    generateStars(modalStars);
}

modalCloseBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => checkKeyPress(e));
modal && modal.addEventListener("click", e => checkPressOverlay(e));
modalOpenBtns.forEach(btn => btn.addEventListener('click', openModal));

modalOpenCallmeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        submitBtn.textContent = '';
        submitBtn.textContent = 'Отправить заявку';
        title.textContent = 'Заказать звонок';
        modal.classList.add('modal_opened-callme');
    })
})