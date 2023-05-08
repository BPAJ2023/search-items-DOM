const formAdd = document.querySelector('.form--add');

const addElement = function (element, txt, attr = "style", style){
    const newElement = document.createElement(element);
        if (txt) {
             newElement.textContent = txt;
        };
        if (attr && style) {
            newElement.setAttribute(attr, style);
        };
document.querySelector(".result").appendChild(newElement);
return false;
};

formAdd.addEventListener('submit', (e)=>{ 
    e.preventDefault();
    const elementHTML = document.querySelector('input[name="elementHTML"]').value;
    const txt = document.querySelector('input[name="txt"]').value;
    const attr = document.querySelector('input[name="attr"]').value;
    const style = document.querySelector('input[name="style"]').value;
    
    addElement(elementHTML,txt,attr,style);
    return false;
});

const formSearch = document.querySelector('.form--search');

const searchElement = (e, nameElement)=>{
    e.preventDefault();
    const content = document.querySelector('.content');
    content.textContent = '';
    const elements = document.querySelectorAll(nameElement);
    console.log(elements);
    if (elements.length <= 0){
        const info = document.createElement('p');
        info.className = 'content__info';
        info.innerHTML = `Na tej stronie nie ma elementów ${nameElement}`;
        content.appendChild(info);
        return;
    } else {
        const info = document.createElement('p');
        info.className = 'content__info';
        info.innerHTML = `Na tej stronie jest ${elements.length} elementów ${nameElement}`;
        content.appendChild(info);
        showElements(elements);
    };
};

const showElements = (elements)=>{    
    const content = document.querySelector('.content');
    elements.forEach((item)=>{
        const divItem = document.createElement('div');
        divItem.className = "content__item-info";
        divItem.innerHTML = `
        <div>Klasa/klasy elementu to: ${item.className} </div>
        <div>Wysokość elementu to: ${item.offsetHeight} </div>
        <div>Szerokość elementu to: ${item.offsetWidth} </div>
        <div>Odległość od góry elementu to: ${item.offsetTop} </div>
        <div>Odległość od lewej elementu to: ${item.offsetLeft} </div>
        `;
        content.appendChild(divItem);
    })
};


formSearch.addEventListener('submit',e=>searchElement(e, formSearch.elements.search.value));