const showBox = document.querySelectorAll(".showBox");

const getTop = (element) => element.getBoundingClientRect().top;

const fadeIn = (element) => {
    let y = getTop(element);

    if(y < window.scrollY + window.innerHeight - 400) {
        element.classList.add("on");
    }
};

window.addEventListener("scroll", () => {
    for(let element of showBox) {
        fadeIn(element);
    }
});
