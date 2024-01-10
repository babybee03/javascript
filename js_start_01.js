/*
var all = document.querySelector('.all');
var pic_1 = document.querySelector('#pic_1');
var pic_2 = document.querySelector('#pic_2');
var pic_3 = document.querySelector('#pic_3');


pic_1.addEventListener('click', function (){
    pic_2.classList.add('up');
    pic_1.classList.remove('up');
})

pic_2.addEventListener('click', function (){
    pic_3.classList.add('up');
    pic_2.classList.remove('up');
})

pic_3.addEventListener('click', function (){
    pic_1.classList.add('up');
    pic_3.classList.remove('up');
})
*/
var all = document.querySelector('.all');
var i=0;

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
