
var all = document.querySelector('.all');
var box_1 = document.querySelector('.box_1');
var box_2 = document.querySelector('.box_2');
var box_3 = document.querySelector('.box_3');
var i=0;
/*
all.addEventListener('click',function(){
    i++;
    if(i % 3 == 1) {
        all.classList.add('open_1');
        all.classList.remove('open_2');
    } else if (i % 3 == 2) {
        all.classList.add('open_2');
        all.classList.remove('open_1');
    } else {
        all.classList.remove('open_1');
        all.classList.remove('open_2');
    }
})
*/
box_1.addEventListener('click', function(){
    all.classList.add('open_1');
    all.classList.remove('open_2');
})

box_2.addEventListener('click', function(){
    all.classList.remove('open_2');
    all.classList.remove('open_1');
})

box_3.addEventListener('click', function(){
    all.classList.add('open_2');
    all.classList.remove('open_1');
})

