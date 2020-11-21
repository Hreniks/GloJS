import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'mdn-polyfills/Node.prototype.append';

require('element-remove');
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
countTimer('22 november 2020');
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