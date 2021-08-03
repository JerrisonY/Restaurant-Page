const main = document.querySelector('main');

let menuTab = () => {
    main.removeAttribute('class') // removes all classes within main tag
    
    let container = document.createElement('div');
    let header = document.createElement('h4');
    let item = document.createElement('div');
    let text = document.createElement('h5')
    let texta = document.createElement('p')
    
    let item2 = document.createElement('div');
    let text2 = document.createElement('h5');
    let textb = document.createElement('p');

    let item3 = document.createElement('div');
    let text3 = document.createElement('h5');
    let textc = document.createElement('p');

    let item4 = document.createElement('div');
    let text4 = document.createElement('h5');
    let textd = document.createElement('p');

    let item5 = document.createElement('div');
    let text5 = document.createElement('h5');
    let texte = document.createElement('p');


    container.classList.add('menu-container');
    header.classList.add('menu-header');

    item.classList.add('menu-items');
    item2.classList.add('menu-items');
    item3.classList.add('menu-items');
    item4.classList.add('menu-items');
    item5.classList.add('menu-items');

    header.textContent = 'The Taste';
    text.textContent = 'Oyster';
    texta.textContent = 'bison tartare + truffle custard';

    text2.textContent = 'roasted scallop';
    textb.textContent = 'whipped salmon roe, sour apple, pine nuts, sea lettuce';

    text3.textContent = 'crab porridge';
    textc.textContent = 'Prairie grains, pickled daylily, foie gras + celtuce';

    text4.textContent = 'nose to tail';
    textd.textContent = 'stuffed pig’s trotter, crispy cheek, Ontario morels + Madeira jus';

    text5.textContent = 'halibut';
    texte.textContent = 'sablefish larded halibut, caramelized squash, smoked mussel + vermouth';

    item.append(text, texta)
    item2.append(text2, textb)
    item3.append(text3, textc)
    item4.append(text4, textd)
    item5.append(text5, texte)
    container.append(header, item, item2, item3, item4, item5)
    main.append(container)

}


export { menuTab };