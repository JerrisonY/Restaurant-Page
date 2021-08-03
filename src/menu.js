const main = document.querySelector('main');

let menuTab = () => {
    main.removeAttribute('class') // removes all classes within main tag
    
    let container = document.createElement('div');
    let item = document.createElement('div');
    let item2 = document.createElement('div');

    container.classList.add('menu-container');
    item.classList.add('menu-items');
    item2.classList.add('menu-items');

    container.append(item, item2)
    main.append(container)
}

export { menuTab };