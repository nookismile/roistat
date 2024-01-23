import './index.html';
import './styles/main.scss';

window.addEventListener('load', function() {

    // menu-burger

    let menuBurger = document.querySelector('.js-burger');
    let mainNav = document.querySelector('.js-menu-mobile');

    menuBurger.addEventListener('click', openMenu);

    function openMenu() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    }

    // form

    let inputName = document.querySelector('.js-input-name');
    let inputPhone = document.querySelector('.js-input-phone');
    let checkbox = document.querySelector("#check");
    let btnSubmit = document.querySelector('.js-btn-form');

    function activateBtn() {
        btnSubmit.disabled = false;
    }

    function deactivateBtn() {
        btnSubmit.disabled = true;
    }

    function submitSuccess() {
        let success = document.querySelector('.success');
        success.textContent = 'Ваши данные успешно отправлены';
        success.classList.add('active');
    }

    function submitError() {
        let error = document.querySelector('.error');
        error.textContent = 'Ошибка';
        error.classList.add('active');
    }

    function keyDownFunc() {
        this.value = this.value.replace(/\D/g, '');
    }

    inputPhone.addEventListener('input', activateBtn);
    inputPhone.addEventListener('input', keyDownFunc);

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            activateBtn()
        } else {
            deactivateBtn()
        }
    })

    function setSuccess(input) {
        const inputControl = input.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.classList.remove('active');
    };


    function setError(input) {
        const inputControl = input.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = 'Пожалуйста, заполните это поле';
        errorDisplay.classList.add('active');
        errorDisplay.classList.remove('success');
    }

    const ajaxSend = async (formData) => {
        const response = await fetch("data.php", {
            method: "POST",
            body: formData
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}`);
        }
        return await response.text();
    };

    let data = {
        name: '',
        site: '',
        phone: ''
    }

    let form = document.querySelector(".form-reg");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        if(inputName.value === '') {
            setError(inputName);
        } else {
            setSuccess(inputName);
            data.name = inputName.value;
        }

        if(inputPhone.value === '') {
            setError(inputPhone);
        } else {
            setSuccess(inputPhone);
            data.phone = inputPhone.value;
        }

        ajaxSend(formData)
            .then((response) => {
                console.log(response);
                form.reset();
                submitSuccess();
            })
            .catch((err) => console.error(err))
    });

    // modal

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

    // parallax

    const wrapper = document.querySelector('.parallax');
    const layers = document.querySelectorAll('.parallax__layer');

    const handleParallax = (evt) => {
        const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
        const parallaxTopOffset = wrapper.getBoundingClientRect().top;

        const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
        const coordY = evt.clientY - parallaxTopOffset - 0.5 *  wrapper.offsetHeight;

        layers.forEach((layer)=>{
            const layerSpeed = layer.dataset.speed;
            const x = -(coordX * layerSpeed).toFixed(2);
            const y = -(coordY * layerSpeed).toFixed(2);
            layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
        });
    };

    const reset = () => {
        layers.forEach((layer)=>{
            layer.removeAttribute('style');
        });
    }

    wrapper.addEventListener('mousemove', handleParallax);
    wrapper.addEventListener('mouseout', reset);
});
