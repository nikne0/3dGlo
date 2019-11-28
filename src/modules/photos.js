/*
 *** Created by NikNet 27.11.2019
*/
"use strict";

const photos = () => {
    let commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach((item) => {
        const srcImg = item.getAttribute('src');

        item.addEventListener('mouseenter', (event) => {
            let target = event.target;
            target.src = target.dataset.img;
        });

        item.addEventListener('mouseleave', (event) => {
            let target = event.target;
            target.src = srcImg;
        });

    });
};

export default photos;
    