import './index.html';
import './styles/main.scss';
import './scripts/modal.js';
import './scripts/validation.js';

window.addEventListener('load', function(){

// placeholder animation

    let inputItem = document.querySelectorAll('.js-input-animation');

    inputItem.forEach((item) => {
        let input = item.querySelector('.js-input');
        let inputPlaceholder = input.getAttribute('placeholder');
        let wrap = document.createElement('div');
        wrap.classList.add('placeholder-wrap');



        console.log(inputPlaceholder);
    });







});

