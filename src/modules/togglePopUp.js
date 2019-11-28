/*
 *** Created by NikNet 27.11.2019
*/
"use strict";

const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupContent = document.querySelector('.popup-content'),
        popupBtn = document.querySelectorAll('.popup-btn');

    // Animations for PopUp
    // let clientWidth = document.documentElement.clientWidth;
    let start = 1;
    let animation;

    const popupGo = () => {
        let clientWidth = document.documentElement.clientWidth;
        animation = requestAnimationFrame(popupGo);
        start += 5;
        popupContent.style.left = start + 'px';
        if (start > (clientWidth / 2)) {
            start = 0;
            cancelAnimationFrame(animation);
        }
    };

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            let clientWidth = document.documentElement.clientWidth;
            if (clientWidth > 768) {
                popup.style.display = 'block';
                popupGo();
            } else {
                popup.style.display = 'block';
            }
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });

};

export default togglePopUp;
    