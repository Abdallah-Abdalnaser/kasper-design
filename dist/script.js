"use strict";
let slider = document.querySelector(".landing"), sliderImage = ["../image/landing2.jpg", "../image/landing.jpg", "../image/landing3.jpg"], btn = Array.from(document.querySelectorAll(".landing ul li")), next = document.querySelector(".landing i:last-of-type"), back = document.querySelector(".landing i:first-of-type"), liArray = Array.from(document.querySelectorAll(".portifolio .contener ul li")), cardArray = Array.from(document.querySelectorAll(".portifolio .galare .card"));
slider.style.cssText = `background-image: url(../image/landing2.jpg)`;
let place = 0;
function moveNext() {
    if (place < sliderImage.length - 1) {
        slider.style.cssText = `background-image: url(${sliderImage[++place]})`;
    }
    btn.forEach((e) => {
        e.classList.remove("active");
    });
    btn[place].classList.add("active");
}
function moveBack() {
    if (place > 0) {
        slider.style.cssText = `background-image: url(${sliderImage[--place]})`;
    }
    btn.forEach((e) => {
        e.classList.remove("active");
    });
    btn[place].classList.add("active");
}
next.addEventListener("click", moveNext);
back.addEventListener("click", moveBack);
btn.forEach((e, index) => {
    e.addEventListener("click", () => {
        btn.forEach((e) => {
            e.classList.remove("active");
        });
        slider.style.cssText = `background-image: url(${sliderImage[index]})`;
        e.classList.add("active");
    });
});
liArray.forEach((e) => {
    e.addEventListener("click", (e) => {
        liArray.forEach((e) => {
            e.classList.remove("active");
        });
        cardArray.forEach((e) => {
            e.style.display = "none";
        });
        let targetCard = Array.from(document.querySelectorAll(e.target.dataset.type));
        targetCard.forEach((e) => {
            e.style.display = "block";
        });
        e.target.classList.add("active");
    });
});
