var counter = 0;
var counterButton = document.getElementById("counterButton");
document.getElementById("counterButton").addEventListener("click", increment);

counterButton.innerHTML = 0;

function increment() {
    counter++;
    counterButton.innerHTML = counter;
}