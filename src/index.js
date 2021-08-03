import { menuTab } from './menu.js';
import { aboutTab } from './about.js';

const main = document.querySelector('main');
const imageOne = document.querySelector('.bg-image');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');


let createButtons = () => {
    let container = document.createElement('div');
    let leftBtn = document.createElement('span');
    let rightBtn = document.createElement('span');

    container.classList.add('btn-container')
    leftBtn.classList.add('left-arrow');
    rightBtn.classList.add('right-arrow');

    leftBtn.textContent = '\u2329';
    rightBtn.textContent = '\u232a';

    container.append(leftBtn, rightBtn)
    main.append(container)

    rightBtn.addEventListener('click', () => {
        if (main.classList.contains('bg-image2')) {
            main.classList.remove('bg-image2')
            main.classList.add('bg-image')
        } else {
            main.classList.add('bg-image2')
            main.classList.remove('bg-image')
        }
    })

    leftBtn.addEventListener('click', () => {
        if (main.classList.contains('bg-image2')) {
            main.classList.remove('bg-image2')
            main.classList.add('bg-image')
        } else {
            main.classList.add('bg-image2')
            main.classList.remove('bg-image')
        }
    })
}

createButtons()

home.addEventListener('click', () => {
    const menuContainer = document.querySelector('.menu-container')
    menuContainer.remove()

    createButtons();
    main.classList.add('bg-image2');

})

menu.addEventListener('click', () => {
    const btnContainer = document.querySelector('.btn-container')
    btnContainer.remove()

    menuTab()
})

about.addEventListener('click', () => {
    const btnContainer = document.querySelector('.btn-container');
    btnContainer.remove();
    // const menuContainer = document.querySelector('.menu-container');
    // menuContainer.remove();

    aboutTab()
})