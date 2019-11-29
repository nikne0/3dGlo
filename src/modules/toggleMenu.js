/*
 *** Created by NikNet 27.11.2019
*/
"use strict";

const toggleMenu = () => {
    const menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target;

        if (target.closest('.menu') || target.tagName === 'A') {
            handlerMenu();
        } else if (!target.classList.contains("active-menu")) {
            menu.classList.remove('active-menu');
        }
    });
};

export default toggleMenu;
    