'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import ScrollLinks from './modules/ScrollLinks';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import commandImg from './modules/commandImg';
import validationCalc from './modules/validationCalc';
import Calc from './modules/Calc';
import sendForm from './modules/sendForm';

//timer
countTimer('21 november 2020');
//menu
toggleMenu();
//scroll menu
ScrollLinks();
//popup
togglePopUp();
//tabs
tabs();
//добавить точки
addDots();
//slider
slider();
commandImg();
validationCalc();
//калькулятор
Calc(100);
//send-ajax-form
sendForm();