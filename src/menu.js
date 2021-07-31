const main = document.querySelector('main');
const btnContainer = document.querySelector('.btn-container')

let menuTab = () => {
    main.removeAttribute('class') // removes all classes within main tag
    btnContainer.remove()
}

export { menuTab };