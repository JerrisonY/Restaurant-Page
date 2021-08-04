const main = document.querySelector('main');

let aboutTab = () => {
    const btnContainer = document.querySelector('.btn-container');
    const menuContainer = document.querySelector('.menu-container');
    const aboutContainer = document.querySelector('.about-container');

    if (!!btnContainer) {
        btnContainer.remove();
    } else if (!!menuContainer) {
        menuContainer.remove();
    }
    main.removeAttribute('class') // removes all classes within main tag

    if (!aboutContainer) { // checks if aboutContainer exists, prevents multiple elements
        let container = document.createElement('div');
        let header = document.createElement('h3');
        let text = document.createElement('p');

        container.classList.add('about-container', 'active')

        header.textContent = 'About Us';
        text.textContent = 'This is an intro page all about the restaurant and all things that are food'

        container.append(header, text);
        main.append(container);
    }
}

export { aboutTab };