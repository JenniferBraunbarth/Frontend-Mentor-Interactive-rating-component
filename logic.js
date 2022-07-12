'use strict';
// VARIABLEN
const elements = {};

// FUNKTIONEN

const rateNum = () => {
    for (const rating of elements.ratingNums) {
        rating.addEventListener("click", () => {
            submitRating();
            elements.ratingResult.innerText = rating.innerText;
        });
    }
};

const submitRating = () => {
    elements.button.addEventListener("click", () => {
elements.contRating.classList.toggle("display");
elements.contThanks.classList.toggle("display");
    });
};

const domMapping = () => {
    elements.button = document.querySelector(".submit");
    elements.ratingNums = Array.from(document.querySelectorAll(".num p"));
    elements.ratingResult = document.querySelector("#rating");
    elements.contRating=document.querySelector(".rating");
    elements.contThanks=document.querySelector(".thanks");
};

const init = () => {
    domMapping();
    rateNum();
};

init();