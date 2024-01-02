var topleft = document.querySelector('#topleft');
var topright = document.querySelector('#topright');
var bottomleft = document.querySelector('#bottomleft');
var bottomright = document.querySelector('#bottomright');
var container = document.querySelector('.container');
var number = 0;

function loveIsOpenDoor() {
    number++;
    if (number % 6 === 0) {
        topleft.classList.remove('open');
        topright.classList.remove('open');
        bottomleft.classList.remove('open');
        bottomright.classList.remove('open');
    } else  if (number % 6 === 1) {
        topleft.classList.add('open');
        topright.classList.remove('open');
        bottomleft.classList.remove('open');
        bottomright.classList.remove('open');
    } else if (number % 6 === 2 ){
        topleft.classList.remove('open');
        topright.classList.add('open');
        bottomleft.classList.remove('open');
        bottomright.classList.remove('open');
    } else if (number % 6 === 3) {
        topleft.classList.remove('open');
        topright.classList.remove('open');
        bottomleft.classList.add('open');
        bottomright.classList.remove('open');
    } else if (number % 6 === 4){
        topleft.classList.remove('open');
        topright.classList.remove('open');
        bottomleft.classList.remove('open');
        bottomright.classList.add('open');
    } else {
        topleft.classList.add('open');
        topright.classList.add('open');
        bottomleft.classList.add('open');
        bottomright.classList.add('open');
    }
}

container.addEventListener('click', loveIsOpenDoor);