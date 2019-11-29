/*
 *** Created by NikNet 27.11.2019
*/
"use strict";

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from "element-closest";
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import photos from './modules/photos';
import calc from './modules/calc';
import sendForm from './modules/sendForm';




/****************TIMER*************************/
countTimer('01 december 2019');

/*************MENU**********************/
toggleMenu();

/************POPUP***********************/
togglePopUp();

/************TABS***************************/
tabs();

/**************SLIDER**********************/
slider();

/***************TEAM PHOTO*************************/
photos();

/***********************CALCULATE VALIDATION + PRACTICE***********/
calc(100);

/***************VALIDATION FORMS********************************************/
/*
const form1 = new Validator({
    selector: '#form1',
    pattern: {},
    method: {
        'form1-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'form1-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form1-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ]
    }
});

const form2 = new Validator({
    selector: '#form2',
    pattern: {},
    method: {
        'form2-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'form2-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form2-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form2-message': [
            ['notEmpty'],
            ['pattern', 'message']
        ]
    }
});

const form3 = new Validator({
    selector: '#form3',
    pattern: {},
    method: {
        'form3-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'form3-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form3-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ]
    }
});

form1.init();
form2.init();
form3.init();
*/

/*****************SEND AJAX FORM*********************************/
sendForm();
    