let listSelected = null;

function listHover(item) {
    img = document.getElementById('list-button-img-' + item);
    img.src = `http://localhost:8080/resource/images/${item}_selected.svg`;

    button = document.getElementById('list-button-' + item);
    button.style.backgroundColor = 'rgb(255, 255, 255)';
    button.style.color = 'rgb(0, 0, 0)';
}

function listUnhover(item) {
    if(item != listSelected) {
        img = document.getElementById('list-button-img-' + item);
        img.src = `http://localhost:8080/resource/images/${item}_unselected.svg`;
        
        button = document.getElementById('list-button-' + item);
        button.style.backgroundColor = 'rgb(0, 0, 0)';
        button.style.color = 'rgb(255, 255, 255)';
    }
}

function listSelect(item) {
    if (listSelected != null) {
        img = document.getElementById('list-button-img-' + listSelected);
        img.src = `http://localhost:8080/resource/images/${listSelected}_unselected.svg`;

        button1 = document.getElementById('list-button-' + listSelected);
        button1.style.backgroundColor = 'rgb(0, 0, 0)';
        button1.style.color = 'rgb(255, 255, 255)';
    }
    listSelected = item;
    button2 = document.getElementById('list-button-' + item);
    button2.style.backgroundColor = 'rgb(255, 255, 255)';
    button2.style.color = 'rgb(0, 0, 0)';
}

listHover('home');
listSelect('home');