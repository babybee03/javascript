/*
var a = document.querySelectorAll('div');

for (var i = 0; i < a.length; i++) {
    var b="ff"; var c="00";
    
    var colormix = "#";
    for (var j = 1; j <=3; j++) {
        d=Math.ceil(Math.random()*2);
        if (d == 1) {
            d = b;
        } else {
            d = c;
        }
        colormix += d;
    }
    a[i].style.color = colormix;
}



var a = document.querySelectorAll('div');


for (var i = 0; i < a.length; i++) {
    var a = "ff"; var b= "00";

    var colormix = "#";
    
    for (var j=1; j <=3; j++) {
        var randomNum = Math.ceil(Math.random()*2);
        if (randomNum == 1) {
            d = a;
        } else {
            d = b;
        }
        colormix += d;
    }
    
    a[i].style.color = colormix;
}
*/
var answer = 'green';


var button = document.querySelector('button');
var box = document.querySelectorAll('input');

button.addEventListener('click', function(){
    for (var i = 0; i < answer.length; i++) {
        if (box[i].value == answer[i]) {
            box[i].style.backgroundColor = "yellow";
        } else if (answer.includes(box[i].value)){
            box[i].style.backgroundColor = "pink";
        } else {
            box[i].style.backgroundColor = "olivedrab";
        }
    }
    if (box[0].value=="g" && box[1].value=="r" && box[2].value=="e" && box[3].value=="e" && box[4].value=="n") {
        alert("그린!! 정답입니다! 그린컴퓨터학원 잘 다니세요~ ^^");
    } else {
        for (var j = 3; j >0; j-- ) {
            alert("틀렸습니다. 기회는"+j+"번!");
            break;
        }
        
    }
})