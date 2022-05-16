//Constants
let time = new Date().toLocaleString().slice(0, 2);
let timeStr = parseInt(time);


//Functions and shit

function setContentGradient() {
    var content = document.getElementById('content');
    if (time > 6 && time < 12) {
        content.style.backgroundImage = 'linear-gradient(rgb(255, 255, 77), rgb(20, 20, 20), rgb(20, 20, 20), rgb(20, 20, 20))'
    } else if (time > 12 && time < 17) {
        content.style.backgroundImage = 'linear-gradient(rgb(255, 153, 204), rgb(20, 20, 20), rgb(20, 20, 20), rgb(20, 20, 20))'
    } else if (time > 17 && time < 5) {
        content.style.backgroundImage = 'linear-gradient(rgb(102, 140, 255), rgb(20, 20, 20), rgb(20, 20, 20), rgb(20, 20, 20))'
    } else {
        console.log('There\'s something seriously wrong with the system time.');
    }
}


//Code to run
//setContentGradient();