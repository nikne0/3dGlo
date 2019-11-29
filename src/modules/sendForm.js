/*
 *** Created by NikNet 27.11.2019
*/
"use strict";

const sendForm = () => {
    // Создание переменных для сообщений на странице
    const errorMessage = "Error send......",
        loadMessage = "Uploading.......",
        successMessage = "Thanks! We will contact you!";

    // Создание элемента для добавления на страницу + стили
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: red';
    let progress = document.createElement('progress');
    progress.style.cssText = 'wight: 15%';



    // Получение переменные для форм
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    // Создаем массив с формами
    let arrForms = [form1, form2, form3];

    // Извлечение нужной формы с помощью цикла
    arrForms.forEach((item) => {

        // Создание обработчика для формы на событие SUBMIT
        item.addEventListener("submit", (event) => {
            event.preventDefault();  // отмена дефолтного поведения (автоматической перезагрузки страницы)
            item.appendChild(statusMessage);  // добавления элемента для вывода сообщения на страницу
            item.appendChild(progress);  // добавления элемента для вывода сообщения на страницу

            // создание обьекта FormData для считывания всего что содержится в форме имеет атрибуе name
            // и сохранения в переменную
            const formData = new FormData(item);
            let body = {};

            // Получения данных с обьекта formData  с помощью forEach
            formData.forEach((val, key) => {
                body[key] = val;  // записываем в переменную body
            });

            statusMessage.textContent = loadMessage;

            postData(body)
                .then((response) => {
                    if (response.status !== 200) throw new Error('status network not 200'); // jshint ignore:line
                    statusMessage.textContent = successMessage;
                })
                .then(() => {
                    item.reset();  // очистка форм после отправки
                    progress.style.display = 'none';
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                });
        });

        // Создаем валидацию на ввод значений в импуты форм
        item.addEventListener('input', (event) => {
            const target = event.target,
                inputPhone = document.querySelectorAll('.form-phone'),
                inputName = document.querySelectorAll('input[name="user_name"]'),
                inputText = document.querySelectorAll('input[name="user_message"]');

            const validateForm = (input, inputType, pattern) => {
                if (target.matches(inputType)) {
                    input.forEach((item) => {
                        item.addEventListener('change', () => {
                            if (item.value != item.value.match(pattern)){
                                item.value = '';
                                item.style.border = '2px solid red';
                            } else {
                                item.style.border = 'none';
                            }
                        });
                    });
                }
            };

            validateForm(inputPhone, 'input[type=tel]', /^\+?[78]\d{10}$/);
            validateForm(inputName, 'input[type=text]', /^[A-Za-zА-Яа-яЁё]+$/);
            validateForm(inputText, 'input .mess', /^[а-яА-ЯёЁ0-9\s]+$/);
        });

    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;
    