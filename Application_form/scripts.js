let registrationForm = document.getElementById("registrationForm");
//функция для проверки введеных значений
registrationForm.addEventListener("submit", function (event) {
    //получаем элементы формы
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let middleName = document.getElementById("middleName");
    let tele = document.getElementById("tele");
    let dobInput = document.getElementById('dob');
    let errorFirstName = document.getElementById("errorFirstName");
    let errorLastName = document.getElementById("errorLastName");
    let errorMiddleName = document.getElementById("errorMiddleName");
    let errorTele = document.getElementById("errorTele");
    let errorDob = document.getElementById('errorDob');
    let errorAgreeRules = document.getElementById("errorAgreeRules");
    //условия для проверки полей
    if (!/^[А-Я][А-Яа-яЁё\s\-]+$/.test(firstName.value)) {
        firstName.style.borderColor = "red";
        errorFirstName.textContent = "Имя должно быть написано только кириллицей с заглавной буквы.";
        event.preventDefault();
    } else {
        firstName.style.borderColor = "";
        errorFirstName.textContent = "";
    }
    if (!/^[А-Я][А-Яа-яЁё\s\-]+$/.test(lastName.value)) {
        lastName.style.borderColor = "red";
        errorLastName.textContent = "Фамилия должна быть написана только кириллицей с заглавной буквы.";
        event.preventDefault();
    } else {
        lastName.style.borderColor = "";
        errorLastName.textContent = "";
    }
    if (!/^[А-Я][А-Яа-яЁё\s\-]+$/.test(middleName.value) && middleName.value != "") {
        middleName.style.borderColor = "red";
        errorMiddleName.textContent = "Отчество должно быть написано только кириллицей с заглавной буквы.";
        event.preventDefault();
    } else {
        middleName.style.borderColor = "";
        errorMiddleName.textContent = "";
    }
    if (!/^[7-8] \(\d{3}\) \d{3}-\d{4}$/.test(tele.value)) {
        tele.style.borderColor = "red";
        errorTele.textContent = "Телефон должен содержать только цифры.";
        event.preventDefault();
    } else {
        tele.style.borderColor = "";
        errorTele.textContent = "";
    }
    dobInput.addEventListener('change', function () { //функция для проверки даты рождения
        let dobValue = new Date(dobInput.value);
        let minDate = new Date('1920-01-01');
        let maxDate = new Date('2018-12-31');

        if (dobValue < minDate || dobValue > maxDate) {
            errorDob.textContent = 'Год рождения должен быть в промежутке с 1920 по 2018';
            dobInput.style.borderColor = 'red';
        } else {
            errorDob.textContent = '';
            dobInput.style.borderColor = '';
        }
    });
    if (!document.getElementById("agreeRules").checked) {
        errorAgreeRules.textContent = "Вы должны согласиться с правилами регистрации.";
        event.preventDefault();
    } else {
        errorAgreeRules.textContent = "";
    }
});
tele.addEventListener('input', function (e) { //метод шаблона для номера телфона
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    if (x) {
        e.target.value = !x[2] ? x[1] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '');
    }
});

let sogl = document.getElementById("sogl");
let modal = document.querySelector('.modal');
let modalContent = document.querySelector('.modal-content');
let modalName = document.querySelector('.modal-name');
let modalDescription = document.querySelector('.modal-description');
let closeBtn = document.querySelector('.close');

sogl.addEventListener('click', () => {// открытие модального окна
    modalName.textContent = "Пользовательское соглашение";
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {// закрытие модального окна
    modal.style.display = 'none';
});  