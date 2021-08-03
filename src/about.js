const main = document.querySelector('main');

let aboutTab = () => {
    main.removeAttribute('class') // removes all classes within main tag
    console.log('hi')
}

export { aboutTab };