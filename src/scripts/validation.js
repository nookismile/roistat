let inputName = document.querySelector('.js-input-name');
let inputSite = document.querySelector('.js-input-site');
let inputPhone = document.querySelector('.js-input-phone');
let btnSubmit = document.querySelector('.js-btn-form');

const activateBtn = () => {
    btnSubmit.removeAttribute('disabled');
}

const submitSuccess = () => {
    let success = document.querySelector('.success');
    success.textContent = 'Ваши данные успешно отправлены';
    success.classList.add('active');
}

const submitError = () => {
    let error = document.querySelector('.error');
    error.textContent = 'Ошибка';
    error.classList.add('active');
}

inputName.addEventListener('input', activateBtn);
inputPhone.addEventListener('input', activateBtn);


//validate form

const validate = () => {

    let errorInputName = document.querySelector('.js-input-name');
    let errorInputSite = document.querySelector('.js-input-site');
    let errorInputPhone = document.querySelector('.js-input-phone');


}





let inputNameValue = inputName.value;
let inputSiteValue = inputSite.value;
let inputPhoneValue = inputPhone.value;

let data = {
    name: inputNameValue,
    site: inputSiteValue,
    phone: inputPhoneValue,
}

let form = document.querySelector(".form-reg");

const ajaxSend = async (formData) => {
    const response = await fetch("data.php", {
        method: "POST",
        body: formData
    });
    if (!response.ok) {
        console.log(formData);
        throw new Error(`Ошибка ${response.status}`);
    }
    return await response.text();
};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    let errorInputName = document.querySelector('.js-input-name');
    let errorInputSite = document.querySelector('.js-input-site');
    let errorInputPhone = document.querySelector('.js-input-phone');

    if (inputNameValue === '') {
        errorInputName.classList.add('active');
        errorInputName.textContent = 'Введите имя';
    }


    // ajaxSend(formData)
    //     .then((response) => {
    //         console.log(response);
    //         form.reset();
    //         submitSuccess();
    //     })
    //     .catch((err) => console.error(err))
});