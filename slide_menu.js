var aaa = document.querySelector("#box_02_01");
var bbb = document.querySelector(".box_02");

var position = 0;

function ani_slide_06() {
    position++;
    if(position % 2 == 1) {
        bbb.classList.add("open");
        aaa.innerText = "◀"
    } else {
        bbb.classList.remove("open");
        aaa.innerText = "▶"
    }
}
aaa.addEventListener("click",ani_slide_06);