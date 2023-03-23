"use strict";
let liArray = Array.from(document.querySelectorAll(".portifolio .contener ul li"));
let cardArray = Array.from(document.querySelectorAll(".portifolio .galare .card"));
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
