import { homeTab } from './home.js';
import { menuTab } from './menu.js';
import { aboutTab } from './about.js';

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

homeTab();

home.addEventListener('click', () => {
    homeTab();
})

menu.addEventListener('click', () => {
    menuTab()
})

about.addEventListener('click', () => {
    aboutTab()
})