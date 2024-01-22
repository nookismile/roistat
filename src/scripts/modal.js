let modalBtn = document.querySelector('.js-modal-btn');
let modal = document.querySelector('.js-modal');
let modalClose = document.querySelector('.js-close-btn');
let modalOverlay = document.querySelector('.overlay');
let body = document.querySelector('body')

const Keys = {
    ESC: 'Esc',
    ESCAPE: 'Escape',
};

const openModal = () => {
    modal.classList.add('open');
    modalOverlay.classList.add('active');
    body.classList.add('freeze');
}

const closeModal = () => {
    modal.classList.remove('open');
    modalOverlay.classList.remove('active');
    body.classList.remove('freeze');
}

modalBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', () => {
    closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === Keys.ESC || e.key === Keys.ESCAPE) {
        closeModal();
    }
});

modalOverlay.addEventListener('click', () => {
    closeModal();
});


