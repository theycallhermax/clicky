var counter = 0;
var counterButton = document.getElementById("counterButton");
document.getElementById("counterButton").addEventListener("click", increment);

function increment() {
    counter++;
    counterButton.innerHTML = counter;
}