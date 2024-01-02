var square = document.querySelector(".square");
var menu = document.querySelector('.menu');
var number = 0;
function openTheDoor() {
    number++;
 if (number % 2 == 0) {
    menu.classList.remove('open');
 } else {
    menu.classList.add('open');
 }
}
square.addEventListener('click', openTheDoor);


