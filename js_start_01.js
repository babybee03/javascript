var position = 0;
var main_w = document.querySelector("#main_box");
var left_w = document.querySelector("#left_box");
var right_w = document.querySelector("#right_box");

function ani_slide() {
    position++;
    if (position % 3 == 0) {
        left_w.classList.remove('open');
        right_w.classList.remove('open');
    } else if (position % 3 == 1) {
        left_w.classList.add('open');
        right_w.classList.add('open');
    } else {
        left_w.classList.remove('open');
        right_w.classList.add('open');
    }
}

main_w.addEventListener('click',ani_slide);
left_w.addEventListener('click',ani_slide);