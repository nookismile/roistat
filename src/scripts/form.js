window.addEventListener('load', function() {

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

});
