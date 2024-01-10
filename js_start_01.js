var button = document.querySelector(".button");
var wrap = document.querySelector('.wrap');
var number = 0;
button.addEventListener('click', function(){
   number++;
   if(number % 2 == 1) {
      wrap.classList.remove('open');
      wrap.classList.add('open');
   } else {
      wrap.classList.remove('open');
   }
})

