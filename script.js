// Grab elements (like variables)
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const result = document.getElementById("result");

// Add functions and event listeners
yesButton.onclick = function() {
    result.innerText = "Yayy!";
};


noButton.onclick = function() {
    yesButton.innerText = "No";
};