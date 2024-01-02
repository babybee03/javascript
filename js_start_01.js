var square = document.querySelector(".square");
var menu = document.querySelector('.menu');

function openTheDoor(event) {
   event.stopPropagation();

   menu.classList.toggle('open');
}

function closeMenu() {
   menu.classList.remove('open');
}

square.addEventListener('click', openTheDoor);
document.addEventListener('click', closeMenu);
