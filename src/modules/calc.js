/*
 *** Created by NikNet 27.11.2019
*/
"use strict";
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        calcItem = document.querySelectorAll('.calc-item'),
        totalValue = document.getElementById('total');

    // Валидатор + доп.условие на исключение из проверки первого текст.поля
    calcBlock.addEventListener('input', () => {
        calcItem.forEach((item) => {
            if (!item[0]) {
                item.value = item.value.replace(/[^0-9]/g, "");
            }
        });
    });

    // Калькулятор
    const countSum = () => {
        let total = 0;
        let countValue = 1;
        let dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = Math.round(price * typeValue * squareValue * countValue * dayValue);
        }

        totalValue.textContent = total;

    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;

        // Variant 1
        /* if (target.matches('.calc-type') || target.matches('.calc-square') ||
             target.matches('.calc-count') || target.matches('.calc-day')) {
             console.log("1");

         }*/

        // Variant 2
        /*if ( target === calcType || target === calcSquare || target === calcCount || target === calcDay ) {
            console.log("1");
        }*/

        // Variant 3
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};

export default calc;
    