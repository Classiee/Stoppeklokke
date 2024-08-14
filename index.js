const klokke = document.getElementById('klokke');
const rundeTider = document.getElementById('forrigeRunde');
const startKnapp = document.getElementById('startKnapp');
const stoppKnapp = document.getElementById('stoppKnapp');

let seconds = 0;
var timer;

function countSeconds() {
    seconds ++;
    klokke.innerHTML = seconds;
}

function startKlokke() {
    timer = setInterval(countSeconds, 1000);
    startKnapp.disabled = true;
    stoppKnapp.disabled = false;
}


function stoppKlokke() {
    clearInterval(timer);
    rundeTider.innerHTML += seconds + ' Rundetid';
    startKnapp.disabled = false;
    stoppKnapp.disabled = true;
}

function resetKlokke() {
    clearInterval(timer);
    seconds = 0;
    klokke.innerHTML = seconds;
    startKnapp.disabled = false;
    stoppKnapp.disabled = true;
}

function resetRunder() {
    rundeTider.innerHTML = 'Alle rundetider';
}
