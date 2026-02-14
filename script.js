// Grab elements (like variables)
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const result = document.getElementById("result");
const result1 = document.getElementById("result1");

const maxX = window.innerWidth - 100;
const maxY = window.innerHeight - 50;

const img = document.getElementById("surprise");

let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);

// Add functions and event listeners
yesButton.onclick = function() {
    result.innerText = "Erinomainen valinta!";
    img.style.transform = "scale(1)";
    img.style.opacity = 1;
    result1.innerText = "Valmistaudu ikimuistoiseen iltaan."
    result1.style.opacity = 1;
    result1.style.top += 1000+"px";
    yesButton.style.opacity = 0;
    noButton.style.opacity = 0;

};

noButton.onclick = function()   {
    moveButton();
    increaseButton();


};
function moveButton()   {
    const randomX = Math.random()*maxX;
    const randomY = Math.random()*maxY;
    noButton.style.left = randomX+"px";
    noButton.style.top = randomY+"px";
};    

function increaseButton()   {
    currentSize += 5;
    yesButton.style.fontSize = currentSize + "px";
}