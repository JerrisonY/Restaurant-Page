const main = document.querySelector('main');

let homeTab = () => {
    const btnContainer = document.querySelector('.btn-container');
    const menuContainer = document.querySelector('.menu-container');
    const aboutContainer = document.querySelector('.about-container');

    if (!!menuContainer) {
        menuContainer.remove()
    } else if (!!aboutContainer) {
        aboutContainer.remove()
    }

    if (!btnContainer) {
        let container = document.createElement('div');
        let leftBtn = document.createElement('span');
        let rightBtn = document.createElement('span');

        container.classList.add('btn-container', 'active')
        main.classList.add('bg-image2');
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
}


export { homeTab };