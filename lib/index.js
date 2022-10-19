var counter = 0;
var counterButton = document.getElementById("counterButton");
document.getElementById("counterButtin").addEventListener("click", increment);

function increment() {
    counter++;
    counterButton.innerHTML = counter;
}