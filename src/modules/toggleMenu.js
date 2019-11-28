/*
 *** Created by NikNet 27.11.2019
*/
"use strict";

const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');


    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    // Создаем один обработчик на события меню и его элементы
    let closeBtn = document.querySelector('.close-btn');
    let elemMenu = [btnMenu, menu];

    elemMenu.forEach((item) => {
        item.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.menu')) handlerMenu();
            if (target.tagName === 'A') handlerMenu();

        });
    });

};

export default toggleMenu;
    