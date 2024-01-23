let menuBurger = document.querySelector('.js-burger');
let mainNav = document.querySelector('.js-menu-mobile');


menuBurger.addEventListener('click', openMenu);

function openMenu() {
    this.classList.toggle('active');
    mainNav.classList.toggle('active');
}


