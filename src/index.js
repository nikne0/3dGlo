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

/*****************SEND AJAX FORM*********************************/
sendForm();
    