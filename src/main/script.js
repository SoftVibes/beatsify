//Variables
let listSelected = null;
var playState = 'pause';

//Functions
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

function playButtonHover(mode) {
    if (mode == 'on') {
        img = document.getElementById('img-button-track-play-pause');
        img.style.width = '4.5vh';
        img.style.height = '4.5vh';
    } else if (mode == 'off') {
        img = document.getElementById('img-button-track-play-pause');
        img.style.width = '4vh';
        img.style.height = '4vh';
    }
}

function loadTrack() {
    var getData = new XMLHttpRequest();
    getData.onreadystatechange = function () {
        data = JSON.parse(this.responseText);
        mins = Math.floor(data.length / 60);
        secs = data.length % 60;
        document.getElementById('track-img').src = data.img;
        document.getElementById('track-name').innerHTML = data.name;
        document.getElementById('track-artist').innerHTML = data.artist;
        document.getElementById('track-time').innerHTML = `${mins}:${secs}`;
    }

    getData.open('GET', 'http://localhost:8080/track');
    getData.send();
}

function clickPlayPause() {
    img = document.getElementById('img-button-track-play-pause');
    if (playState == 'pause') {
        img.src = 'http://localhost:8080/resource/images/pause.svg';
        playState = 'play'
    } else if (playState == 'play') {
        img.src = 'http://localhost:8080/resource/images/play.svg';
        playState = 'pause'
    }
}

//Startup
listHover('home');
listSelect('home');
//loadTrack();